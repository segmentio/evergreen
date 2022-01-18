import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker'
import { Textarea } from '..'

const makeTextareaFixture = (props = {}) => <Textarea data-testid="Textarea" {...props} />

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Textarea', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(makeTextareaFixture())).not.toThrow()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should be disabled when disabled is true', () => {
    const { container } = render(makeTextareaFixture({ disabled: true }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toBeDisabled()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it.each([undefined, null, false])('Should not be disabled when disabled is %p', (disabled: any) => {
    const { container } = render(makeTextareaFixture({ disabled }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).not.toBeDisabled()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should be required when required is true', () => {
    const { container } = render(makeTextareaFixture({ required: true }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toBeRequired()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it.each([undefined, null, false])('Should not be required when required is %p', (required: any) => {
    const { container } = render(makeTextareaFixture({ required }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).not.toBeRequired()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render with placeholder when placeholder provided', () => {
    const expected = faker.random.alphaNumeric()
    const { container } = render(makeTextareaFixture({ placeholder: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveAttribute('placeholder', expected)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should pass through `spellCheck` prop to textarea', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ spellCheck: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveAttribute('spellCheck', expected.toString())
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render with `aria-invalid` when isInvalid provided', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ isInvalid: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveAttribute('aria-invalid', expected.toString())
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render with `data-gramm_editor` when grammarly provided', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ grammarly: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveAttribute('data-gramm_editor', expected.toString())
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should pass through `width` prop to textarea', () => {
    const expected = faker.datatype.number({ min: 10, max: 100 })
    const { container } = render(makeTextareaFixture({ width: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveStyle({ width: `${expected}px` })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should pass through `height` prop to textarea', () => {
    const expected = faker.datatype.number({ min: 10, max: 100 })
    const { container } = render(makeTextareaFixture({ height: expected }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(textarea).toHaveStyle({ height: `${expected}px` })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should call onChange when event is fired', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onChange = jest.fn()
    const { container } = render(makeTextareaFixture({ onChange }))

    const textarea = container.querySelector('textarea')
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'HTMLTextAreaElement | null' is n... Remove this comment to see the full error message
    fireEvent.change(textarea, { target: { value: 'test' } })
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toHaveBeenCalled()
  })
})
