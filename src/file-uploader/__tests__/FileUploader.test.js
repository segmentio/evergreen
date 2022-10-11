import React from 'react'
import { faker } from '@faker-js/faker'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Key, MimeType } from '../../constants'
import { majorScale } from '../../scales'
import { buildFiles } from '../../test/utils'
import { Paragraph } from '../../typography'
import FileUploader from '../src/FileUploader'

const testId = 'test-file-uploader'
/**
 * Utility function for rendering the system under test with a props object + testing id
 * @param {import('../../..').FileUploaderProps} props
 */
const renderWithProps = (props = {}) => render(<FileUploader {...props} data-testid={testId} />)

describe('FileUploader', () => {
  beforeEach(cleanup)

  describe('props', () => {
    describe('acceptedMimeTypes', () => {
      it('should forward csv string to file input', () => {
        const acceptedMimeTypes = faker.random.arrayElements(Object.values(MimeType))

        renderWithProps({ acceptedMimeTypes })
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')

        expect(fileInput).toHaveAttribute('accept', acceptedMimeTypes.join(','))
      })
    })

    describe('browseOrDragText', () => {
      it.each([undefined, null])('when %p, should render default text', browseOrDragText => {
        renderWithProps({ browseOrDragText })

        const defaultElements = screen.getAllByText(
          content => content.includes('Browse') || content.includes('or drag files here')
        )

        expect(defaultElements).toHaveLength(2)
      })

      it('when function returns string, should render text wrapped in Paragraph', () => {
        const browseOrDragText = () => 'Custom browse text'

        renderWithProps({ browseOrDragText })

        const container = screen.getByText(browseOrDragText())
        expect(container).toBeInTheDocument()
        expect(container).toHaveStyle({ marginTop: majorScale(3) })
      })

      it('when function returns non-string, should render returned content', () => {
        const browseOrDragTestId = 'custom-browse-text'
        const browseOrDragText = () => <Paragraph data-testid={browseOrDragTestId}>Custom</Paragraph>

        renderWithProps({ browseOrDragText })

        expect(screen.getByTestId(browseOrDragTestId)).toBeInTheDocument()
      })
    })

    describe('description', () => {
      it('should render description', () => {
        const description = faker.random.words()

        renderWithProps({ description })

        expect(screen.getByText(description)).toBeInTheDocument()
      })
    })

    describe('disabled', () => {
      it('should ignore click event when disabled', () => {
        const onClick = jest.fn()
        const disabled = true

        renderWithProps({ disabled })
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
        fileInput.onclick = onClick
        fireEvent.click(fileUploader)

        expect(onClick).not.toHaveBeenCalled()
      })

      it.each([Key.Enter, Key.Space])('should ignore %p keyboard event when disabled', key => {
        const onClick = jest.fn()
        const disabled = true

        renderWithProps({ disabled })
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
        fileInput.onclick = onClick
        fireEvent.keyDown(fileUploader, { key })

        expect(onClick).not.toHaveBeenCalled()
      })

      it('should set aria-disabled true', () => {
        const disabled = true

        renderWithProps({ disabled })
        const fileUploader = screen.getByTestId(testId)

        expect(fileUploader).toHaveAttribute('aria-disabled', true.toString())
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

    describe('maxFiles', () => {
      it("should render singular 'file' when maxFiles is 1", () => {
        const maxFiles = 1

        renderWithProps({ maxFiles })

        expect(screen.getByText(text => text.includes('file') && !text.includes('files'))).toBeInTheDocument()
      })

      it.each([undefined, null, 0, 2, 100])("should render plural 'files' when maxFiles is %p", maxFiles => {
        renderWithProps({ maxFiles })

        expect(screen.getByText(text => text.includes('files'))).toBeInTheDocument()
      })

      it('should not render dropzone when maxFiles is 1 and values is not empty', () => {
        const values = buildFiles(1)
        const maxFiles = 1

        renderWithProps({ maxFiles, values })

        expect(screen.queryByTestId(testId)).toBeNull()
      })
    })

    describe('onAccepted', () => {
      describe('when files should be accepted', () => {
        it('should fire on drop', () => {
          const onAccepted = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ onAccepted })
          const fileUploader = screen.getByTestId(testId)
          fireEvent.drop(fileUploader, { dataTransfer: { files } })

          expect(onAccepted).toHaveBeenCalledWith(files)
        })

        it('should fire when file input receives files', () => {
          const onAccepted = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ onAccepted })
          const fileUploader = screen.getByTestId(testId)
          const fileInput = fileUploader.querySelector('input')
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
          const fileUploader = screen.getByTestId(testId)
          const fileInput = fileUploader.querySelector('input')
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
        const fileUploader = screen.getByTestId(testId)
        fireEvent.drop(fileUploader, { dataTransfer: { files } })

        expect(onChange).toHaveBeenCalledWith(files)
      })

      it('should fire when file input receives files', () => {
        const onChange = jest.fn()
        const files = buildFiles(3)

        renderWithProps({ onChange })
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
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
        const fileUploader = screen.getByTestId(testId)
        fireEvent.drop(fileUploader, { dataTransfer: { files: expected } })

        expect(onChange).toHaveBeenCalledWith(expected)
      })

      describe('should fire even if array is empty', () => {
        const onChange = jest.fn()
        const expected = []

        renderWithProps({ onChange })
        const fileUploader = screen.getByTestId(testId)
        fireEvent.drop(fileUploader, { dataTransfer: { files: expected } })

        expect(onChange).toHaveBeenCalledWith(expected)
      })

      describe('when disabled is true', () => {
        it('should not fire on drop', () => {
          const disabled = true
          const onChange = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ disabled, onChange })
          const fileUploader = screen.getByTestId(testId)
          fireEvent.drop(fileUploader, { dataTransfer: { files } })

          expect(onChange).not.toHaveBeenCalled()
        })

        it('should not fire when file input receives files', () => {
          const disabled = true
          const onChange = jest.fn()
          const files = buildFiles(3)

          renderWithProps({ disabled, onChange })
          const fileUploader = screen.getByTestId(testId)
          const fileInput = fileUploader.querySelector('input')
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
          const fileUploader = screen.getByTestId(testId)
          const fileInput = fileUploader.querySelector('input')
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
          const fileUploader = screen.getByTestId(testId)
          fireEvent.drop(fileUploader, { dataTransfer: { files } })

          expect(onRejected).toHaveBeenCalledWith(expected)
        })

        it('should fire when file input receives files', () => {
          const onRejected = jest.fn()
          const maxSizeInBytes = faker.datatype.number({ min: 1024, max: 10 * 1024 })
          const files = buildFiles(3, { size: maxSizeInBytes + 1 })
          const expected = expect.arrayContaining(files.map(file => expect.objectContaining({ file })))

          renderWithProps({ maxSizeInBytes, onRejected })
          const fileUploader = screen.getByTestId(testId)
          const fileInput = fileUploader.querySelector('input')
          fireEvent.change(fileInput, { target: { files } })

          expect(onRejected).toHaveBeenCalledWith(expected)
        })
      })
    })

    describe('renderFile', () => {
      it('should be called for each file', () => {
        const renderFile = jest.fn()
        const values = buildFiles(2)

        renderWithProps({ renderFile, values })

        expect(renderFile).toHaveBeenCalledTimes(values.length)
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
        const fileUploader = screen.getByTestId(testId)
        fireEvent.dragOver(fileUploader, {
          dataTransfer: {
            files: buildFiles(maxFiles + 1)
          }
        })
        rerender()

        expect(screen.queryByText(validationMessage)).toBeNull()
      })
    })

    describe('values', () => {
      it('should render <FileCard /> for each file', () => {
        const values = buildFiles(2)

        renderWithProps({ values })
        const fileCards = values.map(file => screen.getByText(file.name), { exact: true })

        expect(fileCards).toHaveLength(values.length)
      })
    })
  })

  describe('interactions', () => {
    describe('when clicked', () => {
      it('should forward click event to file input', () => {
        const onClick = jest.fn()

        renderWithProps()
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
        fileInput.onclick = onClick
        fireEvent.click(fileUploader)

        expect(onClick).toHaveBeenCalled()
      })
    })

    describe('when keyboard event is fired', () => {
      it.each([Key.Enter, Key.Space])('should forward as click event to file input when key is %p', key => {
        const onClick = jest.fn()

        renderWithProps()
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
        fileInput.onclick = onClick
        fireEvent.keyDown(fileUploader, { key })

        expect(onClick).toHaveBeenCalled()
      })

      it.each(['A', '[', '1'])('should ignore event when key is %p', key => {
        const onClick = jest.fn()

        renderWithProps()
        const fileUploader = screen.getByTestId(testId)
        const fileInput = fileUploader.querySelector('input')
        fileInput.onclick = onClick
        fireEvent.keyDown(fileUploader, { key })

        expect(onClick).not.toHaveBeenCalled()
      })
    })
  })
})
