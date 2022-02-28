import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import faker from 'faker'
import { buildFiles } from '../../test/utils'
import FileUploader from '../src/FileUploader'

const testId = 'test-file-uploader'
const renderWithProps = (props = {}) => render(<FileUploader {...props} data-testid={testId} />)

describe('FileUploader', () => {
  describe('props', () => {
    describe('description', () => {
      it('should render description', () => {
        const description = faker.random.words()

        renderWithProps({ description })

        expect(screen.getByText(description)).toBeInTheDocument()
      })
    })

    describe('hint', () => {
      it('should render hint', () => {
        const hint = faker.random.words()

        renderWithProps({ hint })

        expect(screen.getByText(hint)).toBeInTheDocument()
      })
    })

    describe('label', () => {
      it('should render label', () => {
        const label = faker.random.words()

        renderWithProps({ label })

        expect(screen.getByText(label)).toBeInTheDocument()
      })
    })

    describe('onAccepted', () => {
      describe('when files should be accepted', () => {
        it('should fire on drop', () => {
          const onAccepted = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ onAccepted })
          const element = screen.getByTestId(testId)
          fireEvent.drop(element, { dataTransfer: { files } })

          expect(onAccepted).toHaveBeenCalledWith(files)
        })

        it('should fire when file input receives files', () => {
          const onAccepted = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ onAccepted })
          const element = screen.getByTestId(testId)
          const fileInput = element.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onAccepted).toHaveBeenCalledWith(files)
        })
      })

      describe('when files should be rejected', () => {
        it('should not fire', () => {
          const onAccepted = jest.fn()
          const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
          const files = buildFiles(3, { size: maxSizeInBytes + 1 })

          renderWithProps({ maxSizeInBytes, onAccepted })
          const element = screen.getByTestId(testId)
          const fileInput = element.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onAccepted).not.toHaveBeenCalled()
        })
      })
    })

    describe('onChange', () => {
      it('should fire on drop', () => {
        const onChange = jest.fn()
        const files = buildFiles(3)

        renderWithProps({ onChange })
        const element = screen.getByTestId(testId)
        fireEvent.drop(element, { dataTransfer: { files } })

        expect(onChange).toHaveBeenCalledWith(files)
      })

      it('should fire when file input receives files', () => {
        const onChange = jest.fn()
        const files = buildFiles(3)

        renderWithProps({ onChange })
        const element = screen.getByTestId(testId)
        const fileInput = element.querySelector('input')
        fireEvent.change(fileInput, { target: { files } })

        expect(onChange).toHaveBeenCalledWith(files)
      })

      it('should include both accepted and rejected files in callback ', () => {
        const onChange = jest.fn()
        const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
        const acceptedFiles = buildFiles(3, { size: maxSizeInBytes - 1 })
        const rejectedFiles = buildFiles(3, { size: maxSizeInBytes + 1 })
        const expected = [...acceptedFiles, ...rejectedFiles]

        renderWithProps({ maxSizeInBytes, onChange })
        const element = screen.getByTestId(testId)
        fireEvent.drop(element, { dataTransfer: { files: expected } })

        expect(onChange).toHaveBeenCalledWith(expected)
      })

      describe('should fire even if array is empty', () => {
        const onChange = jest.fn()
        const expected = []

        renderWithProps({ onChange })
        const element = screen.getByTestId(testId)
        fireEvent.drop(element, { dataTransfer: { files: expected } })

        expect(onChange).toHaveBeenCalledWith(expected)
      })

      describe('when disabled is true', () => {
        it('should not fire on drop', () => {
          const disabled = true
          const onChange = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ disabled, onChange })
          const element = screen.getByTestId(testId)
          fireEvent.drop(element, { dataTransfer: { files } })

          expect(onChange).not.toHaveBeenCalled()
        })

        it('should not fire when file input receives files', () => {
          const disabled = true
          const onChange = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ disabled, onChange })
          const element = screen.getByTestId(testId)
          const fileInput = element.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onChange).not.toHaveBeenCalled()
        })
      })
    })

    describe('onRejected', () => {
      describe('when files should be accepted', () => {
        it('should not fire', () => {
          const onRejected = jest.fn()
          const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
          const files = buildFiles(3, { size: maxSizeInBytes - 1 })

          renderWithProps({ maxSizeInBytes, onRejected })
          const element = screen.getByTestId(testId)
          const fileInput = element.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onRejected).not.toHaveBeenCalled()
        })
      })

      describe('when files should be rejected', () => {
        it('should fire on drop', () => {
          const onRejected = jest.fn()
          const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
          const files = buildFiles(3, { size: maxSizeInBytes + 1 })
          const expected = expect.arrayContaining(files.map(file => expect.objectContaining({ file })))

          renderWithProps({ maxSizeInBytes, onRejected })
          const element = screen.getByTestId(testId)
          fireEvent.drop(element, { dataTransfer: { files } })

          expect(onRejected).toHaveBeenCalledWith(expected)
        })

        it('should fire when file input receives files', () => {
          const onRejected = jest.fn()
          const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
          const files = buildFiles(3, { size: maxSizeInBytes + 1 })
          const expected = expect.arrayContaining(files.map(file => expect.objectContaining({ file })))

          renderWithProps({ maxSizeInBytes, onRejected })
          const element = screen.getByTestId(testId)
          const fileInput = element.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onRejected).toHaveBeenCalledWith(expected)
        })
      })
    })

    describe('validationMessage', () => {
      it('should render validationMessage', () => {
        const validationMessage = faker.random.words()

        renderWithProps({ validationMessage })

        expect(screen.getByText(validationMessage)).toBeInTheDocument()
      })

      it('should not render validationMessage when dragging invalid number of files', () => {
        const validationMessage = faker.random.words()
        const maxFiles = 2

        const { rerender } = renderWithProps({ maxFiles, validationMessage })
        const element = screen.getByTestId(testId)
        fireEvent.dragOver(element, {
          dataTransfer: {
            files: buildFiles(maxFiles + 1)
          }
        })
        rerender()

        expect(screen.queryByText(validationMessage)).toBeNull()
      })
    })
  })
})
