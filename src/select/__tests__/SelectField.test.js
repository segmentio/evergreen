import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select, SelectField } from '../'
import { mockRef } from '../../test/utils'

function makeSelectFixture(props = {}) {
  return (
    <Select data-testid="select" defaultValue="foo" name="select" {...props}>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </Select>
  )
}

function makeSelectFieldFixture(props = {}) {
  return (
    <SelectField data-testid="select" defaultValue="foo" label="Select" {...props}>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </SelectField>
  )
}

describe('Select', () => {
  it('Should render without crashing', () => {
    expect(() => render(makeSelectFixture())).not.toThrow()
  })

  it('Should set an invalid state if `isInvalid` is `true`', () => {
    const { container } = render(makeSelectFixture({ isInvalid: true }))
    const input = container.querySelector('select')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('Should not be interactive if `disabled` is passed in', () => {
    const { container } = render(makeSelectFixture({ disabled: true }))
    const select = container.querySelector('select')

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(select).not.toHaveFocus()
  })
})

describe('SelectField', () => {
  it('Should render without crashing', () => {
    expect(() => render(makeSelectFieldFixture())).not.toThrow()
  })

  it('should forward ref to underlying <select />', () => {
    const ref = mockRef()

    render(makeSelectFieldFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })

  it('Should have expected accessible name when `label` prop passed in', () => {
    const { container, getByLabelText } = render(makeSelectFieldFixture())
    const select = container.querySelector('select')
    expect(getByLabelText('Select')).toBeInTheDocument()
    expect(select).toHaveAccessibleName('Select')
  })

  it('Should add hint text to accessible description when `hint` prop provided', () => {
    const { container, getByText } = render(makeSelectFieldFixture({ hint: 'Some description.' }))
    expect(getByText('Some description.')).toBeInTheDocument()
    expect(container.querySelector('select')).toHaveAccessibleDescription('Some description.')
  })

  it('Should render an astrix when `required` is passed in', () => {
    const { getByTitle } = render(makeSelectFieldFixture({ required: true }))
    expect(getByTitle('This field is required.')).toBeInTheDocument()
  })

  it('Should render a `validationMessage` when passed in', () => {
    const { container, getByText } = render(makeSelectFieldFixture({ validationMessage: 'Please choose a value.' }))
    expect(getByText('Please choose a value.')).toBeInTheDocument()
    expect(container.querySelector('select')).toHaveAccessibleDescription('Please choose a value.')
  })

  it('Should correctly compose an accessible description from multiple hints', () => {
    const { container } = render(makeSelectFieldFixture({ hint: 'Am hint.', validationMessage: 'Try again.' }))

    expect(container.querySelector('select')).toHaveAccessibleDescription('Try again. Am hint.')
  })
})
