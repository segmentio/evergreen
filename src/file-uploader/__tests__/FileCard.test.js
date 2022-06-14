import React from 'react'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import humanize from 'humanize-plus'
import { MimeType } from '../../constants'
import FileCard from '../src/FileCard'

const testId = 'test-file-card'
/**
 * Utility function for rendering the system under test with a props object + testing id
 * @param {import('../../..').FileCardProps} props
 */
const renderWithProps = (props = {}) => render(<FileCard {...props} data-testid={testId} />)

describe('FileCard', () => {
  describe('props', () => {
    describe('ref', () => {
      it('should forward ref', () => {
        const ref = jest.fn()

        renderWithProps({ ref })

        expect(ref).toHaveBeenCalled()
      })
    })

    describe('description', () => {
      it('should render description when non-empty', () => {
        const description = faker.random.words()
        renderWithProps({ description })

        expect(screen.getByText(description)).toBeInTheDocument()
      })
    })

    describe('isInvalid', () => {
      it('should render InfoSignIcon when true', () => {
        renderWithProps({ isInvalid: true })

        const fileCard = screen.getByTestId(testId)

        expect(fileCard.querySelector(`[data-icon='info-sign']`)).toBeInTheDocument()
      })

      it('should set aria-invalid true', () => {
        renderWithProps({ isInvalid: true })
        const fileCard = screen.getByTestId(testId)

        expect(fileCard).toHaveAttribute('aria-invalid', true.toString())
      })
    })

    describe('isLoading', () => {
      it('should render <Spinner /> when true', () => {
        renderWithProps({ isLoading: true })
        const fileCard = screen.getByTestId(testId)

        expect(fileCard.querySelector('circle')).toBeInTheDocument()
      })

      it.each([undefined, null, false])('should not render <Spinner /> when %p', isLoading => {
        renderWithProps({ isLoading })
        const fileCard = screen.getByTestId(testId)

        expect(fileCard.querySelector('circle')).not.toBeInTheDocument()
      })
    })

    describe('name', () => {
      it('should render name', () => {
        const name = faker.system.fileName()
        renderWithProps({ name })

        expect(screen.getByText(name)).toBeInTheDocument()
      })
    })

    describe('onRemove', () => {
      describe('when onRemove is a function', () => {
        it('should render <IconButton /> with TrashIcon', () => {
          const onRemove = jest.fn()

          renderWithProps({ onRemove })
          const fileCard = screen.getByTestId(testId)

          expect(fileCard.querySelector(`[data-icon='trash']`)).toBeInTheDocument()
        })

        it('should render disabled <IconButton /> when isLoading = true', () => {
          const onRemove = jest.fn()

          renderWithProps({ onRemove, isLoading: true })
          const fileCard = screen.getByTestId(testId)
          const icon = fileCard.querySelector(`[data-icon='trash']`)
          const iconButton = fileCard.querySelector('button')

          expect(icon).toBeInTheDocument()
          expect(iconButton).toBeDisabled()
          expect(iconButton).toContainElement(icon)
        })

        it('should render disabled <IconButton /> when disabled = true', () => {
          const onRemove = jest.fn()

          renderWithProps({ onRemove, disabled: true })
          const fileCard = screen.getByTestId(testId)
          const icon = fileCard.querySelector(`[data-icon='trash']`)
          const iconButton = fileCard.querySelector('button')

          expect(icon).toBeInTheDocument()
          expect(iconButton).toBeDisabled()
          expect(iconButton).toContainElement(icon)
        })
      })

      it.each([undefined, null])('should not render <IconButton /> with TrashIcon when onRemove is %p', onRemove => {
        renderWithProps({ onRemove })
        const fileCard = screen.getByTestId(testId)

        expect(fileCard.querySelector(`[data-icon='trash']`)).not.toBeInTheDocument()
      })
    })

    describe('sizeInBytes', () => {
      it('should render humanized size', () => {
        const sizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 * 1024 })

        renderWithProps({ sizeInBytes })

        expect(screen.getByText(humanize.fileSize(sizeInBytes, 0))).toBeInTheDocument()
      })
    })

    describe('src', () => {
      describe('when src is non-empty', () => {
        it.each([MimeType.css, MimeType.doc, MimeType.mp3, MimeType.mp4])(
          'should not render <img /> when type is %p',
          type => {
            const src = faker.image.animals()

            renderWithProps({ src, type })
            const fileCard = screen.getByTestId(testId)

            expect(fileCard.querySelector('img')).not.toBeInTheDocument()
          }
        )

        it.each([MimeType.png, MimeType.gif, MimeType.jpeg])('should render <img /> when type is %p', type => {
          const src = faker.image.animals()

          renderWithProps({ src, type })
          const fileCard = screen.getByTestId(testId)

          expect(fileCard.querySelector('img')).toBeInTheDocument()
        })
      })

      it.each([undefined, null, ''])('should not render <img /> when src is %p', src => {
        renderWithProps({ src })

        const fileCard = screen.getByTestId(testId)

        expect(fileCard.querySelector('img')).not.toBeInTheDocument()
      })
    })

    describe('validationMessage', () => {
      it('should render validationMessage', () => {
        const validationMessage = faker.random.words()

        renderWithProps({ validationMessage })

        expect(screen.getByText(validationMessage)).toBeInTheDocument()
      })
    })
  })
})
