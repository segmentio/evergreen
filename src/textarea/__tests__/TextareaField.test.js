import React from 'react'
import { faker } from '@faker-js/faker'
import { render, fireEvent, screen } from '@testing-library/react'
import { TextareaField } from '..'

const makeTextareaFieldFixture = (props = {}) => (
  <TextareaField data-testid="TextareaField" label="TextareaField" {...props} />
)

describe('TextareaField', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFieldFixture())).not.toThrow()
  })

  describe('FormField props', () => {
    test('Should render label when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ label: expected }))

      expect(screen.getByLabelText(expected)).toBeInTheDocument()
    })

    test('Should render asterisk when required is true', () => {
      const label = faker.random.alphaNumeric()
      const expected = `${label} *`
      render(makeTextareaFieldFixture({ label, required: true }))

      expect(screen.getByLabelText(expected)).toBeInTheDocument()
    })

    test('Should render hint when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ hint: expected }))

      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    test('Should render description when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ description: expected }))

      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    test('Should render validationMessage when provided', () => {
      const expected = faker.random.alphaNumeric()
      render(makeTextareaFieldFixture({ validationMessage: expected }))

      expect(screen.getByText(expected)).toBeInTheDocument()
    })

    test('Should render label with `for` attribute for accessibility', () => {
      const { container } = render(makeTextareaFieldFixture({ label: faker.random.alphaNumeric() }))

      const textarea = container.querySelector('textarea')
      const label = container.querySelector('label')
      expect(label).toHaveAttribute('for', textarea.id)
    })
  })

  describe('Textarea props', () => {
    it('Should be disabled when disabled is true', () => {
      const { container } = render(makeTextareaFieldFixture({ disabled: true }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toBeDisabled()
    })

    it.each([undefined, null, false])('Should not be disabled when disabled is %p', disabled => {
      const { container } = render(makeTextareaFieldFixture({ disabled }))

      const textarea = container.querySelector('textarea')
      expect(textarea).not.toBeDisabled()
    })

    it('Should be required when required is true', () => {
      const { container } = render(makeTextareaFieldFixture({ required: true }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toBeRequired()
    })

    it.each([undefined, null, false])('Should not be required when required is %p', required => {
      const { container } = render(makeTextareaFieldFixture({ required }))

      const textarea = container.querySelector('textarea')
      expect(textarea).not.toBeRequired()
    })

    it('Should render with placeholder when placeholder provided', () => {
      const expected = faker.random.alphaNumeric()
      const { container } = render(makeTextareaFieldFixture({ placeholder: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveAttribute('placeholder', expected)
    })

    it('Should pass through `spellCheck` prop to textarea', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ spellCheck: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveAttribute('spellCheck', expected.toString())
    })

    it('Should render with `aria-invalid` when isInvalid provided', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ isInvalid: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveAttribute('aria-invalid', expected.toString())
    })

    it('Should render with `data-gramm_editor` when grammarly provided', () => {
      const expected = faker.datatype.boolean()
      const { container } = render(makeTextareaFieldFixture({ grammarly: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveAttribute('data-gramm_editor', expected.toString())
    })

    it('Should pass through `inputWidth` prop to textarea', () => {
      const expected = faker.datatype.number({ min: 10, max: 100 })
      const { container } = render(makeTextareaFieldFixture({ inputWidth: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveStyle({ width: `${expected}px` })
    })

    it('Should pass through `inputHeight` prop to textarea', () => {
      const expected = faker.datatype.number({ min: 10, max: 100 })
      const { container } = render(makeTextareaFieldFixture({ inputHeight: expected }))

      const textarea = container.querySelector('textarea')
      expect(textarea).toHaveStyle({ height: `${expected}px` })
    })

    it('Should call onChange when event is fired', () => {
      const onChange = jest.fn()
      const { container } = render(makeTextareaFieldFixture({ onChange }))

      const textarea = container.querySelector('textarea')
      fireEvent.change(textarea, { target: { value: 'test' } })
      expect(onChange).toHaveBeenCalled()
    })
  })

  it('Should correctly compose an accessible description from multiple hints', () => {
    const { getByTestId, getByText } = render(
      makeTextareaFieldFixture({ description: 'A description.', hint: 'Am hint.', validationMessage: 'Try again.' })
    )
    expect(getByText('A description.')).toBeInTheDocument()
    expect(getByText('Am hint.')).toBeInTheDocument()
    expect(getByText('Try again.')).toBeInTheDocument()
    expect(getByTestId('TextareaField')).toHaveAccessibleDescription('A description. Try again. Am hint.')
  })
})
