import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker'
import { TextareaField } from '..'

const makeTextareaFieldFixture = (props = {}) => (
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
  <TextareaField data-testid="TextareaField" label="TextareaField" {...props} />
)

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TextareaField', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(makeTextareaFieldFixture())).not.toThrow()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('FormField props', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render label when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ label: expected }))

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(screen.getByLabelText(expected)).toBeInTheDocument()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render asterisk when required is true', () => {
      const label = faker.random.alphaNumeric()
      const expected = `${label} *`
      render(makeTextareaFieldFixture({ label, required: true }))

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(screen.getByLabelText(expected)).toBeInTheDocument()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render hint when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ hint: expected }))

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render description when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ description: expected }))

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render validationMessage when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ validationMessage: expected }))

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('Should render label with `for` attribute for accessibility', () => {
      const { container } = render(makeTextareaFieldFixture({ label: faker.random.alphaNumeric() }))

      const textarea = container.querySelector('textarea')
      const label = container.querySelector('label')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(label).toHaveAttribute('for', textarea.id)
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Textarea props', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should be disabled when disabled is true', () => {
      const { container } = render(makeTextareaFieldFixture({ disabled: true }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toBeDisabled()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it.each([undefined, null, false])('Should not be disabled when disabled is %p', (disabled: any) => {
      const { container } = render(makeTextareaFieldFixture({ disabled }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).not.toBeDisabled()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should be required when required is true', () => {
      const { container } = render(makeTextareaFieldFixture({ required: true }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toBeRequired()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it.each([undefined, null, false])('Should not be required when required is %p', (required: any) => {
      const { container } = render(makeTextareaFieldFixture({ required }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).not.toBeRequired()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should render with placeholder when placeholder provided', () => {
      const expected = faker.random.alphaNumeric()
      const { container } = render(makeTextareaFieldFixture({ placeholder: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveAttribute('placeholder', expected)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should pass through `spellCheck` prop to textarea', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ spellCheck: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveAttribute('spellCheck', expected.toString())
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should render with `aria-invalid` when isInvalid provided', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ isInvalid: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveAttribute('aria-invalid', expected.toString())
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should render with `data-gramm_editor` when grammarly provided', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ grammarly: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveAttribute('data-gramm_editor', expected.toString())
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should pass through `inputWidth` prop to textarea', () => {
      const expected = faker.datatype.number({ min: 10, max: 100 })
      const { container } = render(makeTextareaFieldFixture({ inputWidth: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveStyle({ width: `${expected}px` })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should pass through `inputHeight` prop to textarea', () => {
      const expected = faker.datatype.number({ min: 10, max: 100 })
      const { container } = render(makeTextareaFieldFixture({ inputHeight: expected }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(textarea).toHaveStyle({ height: `${expected}px` })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('Should call onChange when event is fired', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onChange = jest.fn()
      const { container } = render(makeTextareaFieldFixture({ onChange }))

      const textarea = container.querySelector('textarea')
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'HTMLTextAreaElement | null' is n... Remove this comment to see the full error message
      fireEvent.change(textarea, { target: { value: 'test' } })
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onChange).toHaveBeenCalled()
    })
  })
})
