import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FilePicker, { CLASS_PREFIX } from '../src/FilePicker'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<FilePicker />', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('snapshot', () => {
    const component = <FilePicker />
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets name', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const { container } = render(<FilePicker name="hi" />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveClass(`${CLASS_PREFIX}-file-input`)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('type', 'file')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('name', 'hi')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets accept', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const { container } = render(<FilePicker accept="application/json" />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('accept', 'application/json')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets required', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker required />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('required')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets multiple', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker multiple />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('multiple')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets disabled', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker disabled />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('disabled')

    const button = await screen.findByRole('button')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button).toHaveAttribute('disabled')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets capture', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    const { container } = render(<FilePicker capture />)

    const fileInput = container.querySelector('input[type=file]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(fileInput).toHaveAttribute('capture')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes through height', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { container } = render(<FilePicker height={20} />)

    const input = container.querySelector('input[type=text]')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(input).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(input).toHaveStyle({ height: '20px' })

    const button = await screen.findByRole('button')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button).toHaveStyle({ height: '20px' })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes through props', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { container } = render(<FilePicker width={20} />)

    const root = container.querySelector(`.${CLASS_PREFIX}-root`)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(root).toBeDefined()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(root).toHaveStyle({ width: '20px' })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onChange', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onChange = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const { container } = render(<FilePicker onChange={onChange} />)

    const fileInput = container.querySelector('input[type=file]')

    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
    fireEvent.change(fileInput, {
      target: {
        files: [{ name: 'data.json' }]
      }
    })

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  /**
   * Skip this test until we can get around jsdom's super strict FileList handling
   * @see {@link https://github.com/jsdom/jsdom/issues/1272}
   */
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it.skip('calls onBlur', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onBlur = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
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

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets placeholder', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<FilePicker placeholder="placeholder here!" />)

    const input = await screen.findByPlaceholderText('placeholder here!')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(input).toBeDefined()
  })
})
