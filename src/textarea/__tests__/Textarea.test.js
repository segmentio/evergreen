import React from 'react'
import { faker } from '@faker-js/faker'
import { render, fireEvent } from '@testing-library/react'
import { Textarea } from '..'

const makeTextareaFixture = (props = {}) => <Textarea data-testid="Textarea" {...props} />

describe('Textarea', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFixture())).not.toThrow()
  })

  it('Should be disabled when disabled is true', () => {
    const { container } = render(makeTextareaFixture({ disabled: true }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toBeDisabled()
  })

  it.each([undefined, null, false])('Should not be disabled when disabled is %p', disabled => {
    const { container } = render(makeTextareaFixture({ disabled }))

    const textarea = container.querySelector('textarea')
    expect(textarea).not.toBeDisabled()
  })

  it('Should be required when required is true', () => {
    const { container } = render(makeTextareaFixture({ required: true }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toBeRequired()
  })

  it.each([undefined, null, false])('Should not be required when required is %p', required => {
    const { container } = render(makeTextareaFixture({ required }))

    const textarea = container.querySelector('textarea')
    expect(textarea).not.toBeRequired()
  })

  it('Should render with placeholder when placeholder provided', () => {
    const expected = faker.random.alphaNumeric()
    const { container } = render(makeTextareaFixture({ placeholder: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveAttribute('placeholder', expected)
  })

  it('Should pass through `spellCheck` prop to textarea', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ spellCheck: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveAttribute('spellCheck', expected.toString())
  })

  it('Should render with `aria-invalid` when isInvalid provided', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ isInvalid: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveAttribute('aria-invalid', expected.toString())
  })

  it('Should render with `data-gramm_editor` when grammarly provided', () => {
    const expected = faker.datatype.boolean()
    const { container } = render(makeTextareaFixture({ grammarly: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveAttribute('data-gramm_editor', expected.toString())
  })

  it('Should pass through `width` prop to textarea', () => {
    const expected = faker.datatype.number({ min: 10, max: 100 })
    const { container } = render(makeTextareaFixture({ width: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveStyle({ width: `${expected}px` })
  })

  it('Should pass through `height` prop to textarea', () => {
    const expected = faker.datatype.number({ min: 10, max: 100 })
    const { container } = render(makeTextareaFixture({ height: expected }))

    const textarea = container.querySelector('textarea')
    expect(textarea).toHaveStyle({ height: `${expected}px` })
  })

  it('Should call onChange when event is fired', () => {
    const onChange = jest.fn()
    const { container } = render(makeTextareaFixture({ onChange }))

    const textarea = container.querySelector('textarea')
    fireEvent.change(textarea, { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalled()
  })
})
