import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilePicker, { CLASS_PREFIX } from '../src/FilePicker'

const getFileInput = container => container.querySelector('input[type=file]')
const getTextInput = container => container.querySelector('input[type=text]')
const getButton = container => container.querySelector('button')

describe('<FilePicker />', () => {
  it('snapshot - no file selected', () => {
    const { asFragment } = render(<FilePicker />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('snapshot - one file seleted', async () => {
    const { asFragment, container } = render(<FilePicker />)

    const fileInput = await getFileInput(container)
    userEvent.upload(fileInput, [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })])

    expect(asFragment()).toMatchSnapshot()
  })

  it('snapshot - multiple files selected', async () => {
    const { asFragment, container } = render(<FilePicker multiple />)

    const fileInput = await getFileInput(container)
    userEvent.upload(fileInput, [
      new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
      new File(['(□_□¬)'], 'brucelee.png', { type: 'image/png' })
    ])

    expect(asFragment()).toMatchSnapshot()
  })

  it('sets name', async () => {
    const { container } = render(<FilePicker name="hi" />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveClass(`${CLASS_PREFIX}-file-input`)
    expect(fileInput).toHaveAttribute('type', 'file')
    expect(fileInput).toHaveAttribute('name', 'hi')
  })

  it('sets accept', async () => {
    const { container } = render(<FilePicker accept="application/json" />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('accept', 'application/json')
  })

  it('sets required', async () => {
    const { container } = render(<FilePicker required />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('required')
  })

  it('sets multiple', async () => {
    const { container } = render(<FilePicker multiple />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('multiple')
  })

  it('sets disabled', async () => {
    const { container } = render(<FilePicker disabled />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('disabled')

    const button = await getButton(container)
    expect(button).toBeDefined()
    expect(button).toHaveAttribute('disabled')
  })

  it('sets capture', async () => {
    const { container } = render(<FilePicker capture />)

    const fileInput = await getFileInput(container)
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('capture')
  })

  it('passes through height', async () => {
    const { container } = render(<FilePicker height={20} />)

    const input = await getTextInput(container)
    expect(input).toBeDefined()
    expect(input).toHaveStyle({ height: '20px' })

    const button = await getButton(container)
    expect(button).toBeDefined()
    expect(button).toHaveStyle({ height: '20px' })
  })

  it('passes through props', async () => {
    const { container } = render(<FilePicker width={20} />)

    const root = container.querySelector(`.${CLASS_PREFIX}-root`)
    expect(root).toBeDefined()
    expect(root).toHaveStyle({ width: '20px' })
  })

  it('calls onChange', async () => {
    const onChange = jest.fn()
    const { container } = render(<FilePicker onChange={onChange} />)

    const fileInput = await getFileInput(container)

    fireEvent.change(fileInput, {
      target: {
        files: [{ name: 'data.json' }]
      }
    })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('calls onBlur', async () => {
    const onBlur = jest.fn()
    const { container } = render(<FilePicker onBlur={onBlur} />)

    const input = await getTextInput(container)

    fireEvent.focus(input)
    fireEvent.blur(input, { target: {} })

    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  it('sets placeholder', async () => {
    const placeholder = 'placeholder here!'
    const { container } = render(<FilePicker placeholder={placeholder} />)

    const input = await getTextInput(container)
    expect(input.placeholder).toEqual(placeholder)
  })

  it('sets browseOrReplaceText', async () => {
    const browseText = 'Select'
    const replaceText = 'Replace'
    const replaceMultipleText = 'Replace all'

    const { container } = render(
      <FilePicker
        multiple
        browseOrReplaceText={fileCount => {
          if (!fileCount) return browseText
          if (fileCount === 1) return replaceText
          return replaceMultipleText
        }}
      />
    )

    const button = await getButton(container)

    expect(button).toHaveTextContent(browseText)

    const fileInput = await getFileInput(container)
    userEvent.upload(fileInput, [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })])

    expect(button).toHaveTextContent(replaceText)

    userEvent.upload(fileInput, [
      new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
      new File(['(□_□¬)'], 'brucelee.png', { type: 'image/png' })
    ])

    expect(button).toHaveTextContent(replaceMultipleText)
  })

  it('sets inputText', async () => {
    const noFiles = ':('
    const oneFile = 'File: chucknorris.png'
    const multipleFiles = 'Files: 2'

    const { container } = render(
      <FilePicker
        multiple
        inputText={files => {
          if (!files.length) return noFiles
          if (files.length === 1) return `File: ${files[0].name}`
          return `Files: ${files.length}`
        }}
      />
    )

    const textInput = await getTextInput(container)

    expect(textInput).toHaveValue(noFiles)

    const fileInput = await getFileInput(container)
    userEvent.upload(fileInput, [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })])

    expect(textInput).toHaveValue(oneFile)

    userEvent.upload(fileInput, [
      new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
      new File(['(□_□¬)'], 'brucelee.png', { type: 'image/png' })
    ])

    expect(textInput).toHaveValue(multipleFiles)
  })
})
