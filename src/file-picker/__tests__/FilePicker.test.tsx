import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FilePicker, { CLASS_PREFIX } from '../src/FilePicker'

describe('<FilePicker />', () => {
  it('snapshot', () => {
    const component = <FilePicker />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('sets name', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const { container } = render(<FilePicker name="hi" />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveClass(`${CLASS_PREFIX}-file-input`)
    expect(fileInput).toHaveAttribute('type', 'file')
    expect(fileInput).toHaveAttribute('name', 'hi')
  })

  it('sets accept', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const { container } = render(<FilePicker accept="application/json" />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('accept', 'application/json')
  })

  it('sets required', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker required />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('required')
  })

  it('sets multiple', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker multiple />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('multiple')
  })

  it('sets disabled', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker disabled />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('disabled')

    const button = await screen.findByRole('button')
    expect(button).toBeDefined()
    expect(button).toHaveAttribute('disabled')
  })

  it('sets capture', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker capture />)

    const fileInput = container.querySelector('input[type=file]')
    expect(fileInput).toBeDefined()
    expect(fileInput).toHaveAttribute('capture')
  })

  it('passes through height', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { container } = render(<FilePicker height={20} />)

    const input = container.querySelector('input[type=text]')
    expect(input).toBeDefined()
    expect(input).toHaveStyle({ height: '20px' })

    const button = await screen.findByRole('button')
    expect(button).toBeDefined()
    expect(button).toHaveStyle({ height: '20px' })
  })

  it('passes through props', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { container } = render(<FilePicker width={20} />)

    const root = container.querySelector(`.${CLASS_PREFIX}-root`)
    expect(root).toBeDefined()
    expect(root).toHaveStyle({ width: '20px' })
  })

  it('calls onChange', async () => {
    const onChange = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Mock<any, any>' is not assignable to type 'n... Remove this comment to see the full error message
    const { container } = render(<FilePicker onChange={onChange} />)

    const fileInput = container.querySelector('input[type=file]')

    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
    fireEvent.change(fileInput, {
      target: {
        files: [{ name: 'data.json' }]
      }
    })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  /**
   * Skip this test until we can get around jsdom's super strict FileList handling
   * @see {@link https://github.com/jsdom/jsdom/issues/1272}
   */
  it.skip('calls onBlur', async () => {
    const onBlur = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Mock<any, any>' is not assignable to type 'n... Remove this comment to see the full error message
    const { container } = render(<FilePicker onBlur={onBlur} />)

    const fileInput = container.querySelector('input[type=file]')

    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
      }
    })

    const input = container.querySelector('input[type=text]')
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
    fireEvent.blur(input, { target: {} })

    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  it('sets placeholder', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<FilePicker placeholder="placeholder here!" />)

    const input = await screen.findByPlaceholderText('placeholder here!')
    expect(input).toBeDefined()
  })
})
