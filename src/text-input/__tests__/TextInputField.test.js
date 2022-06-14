import React from 'react'
import { render } from '@testing-library/react'
import { TextInputField } from '../'

function makeTextInputFieldFixture(props = {}) {
  return <TextInputField data-testid="input" label="Name" {...props} />
}

describe('TextInputField', () => {
  it('should render without crashing', () => {
    expect(() => render(makeTextInputFieldFixture())).not.toThrow()
  })

  it('should render a required `label` when passed in', () => {
    const { getByLabelText } = render(makeTextInputFieldFixture())
    expect(getByLabelText('Name')).toBeInTheDocument()
  })

  it('should render a `hint` underneath the input', () => {
    const { getByText } = render(makeTextInputFieldFixture({ hint: 'Enter a value in the input' }))
    expect(getByText('Enter a value in the input')).toBeInTheDocument()
  })

  it('should render an astrix when `required` is passed in', () => {
    const { getByTitle } = render(makeTextInputFieldFixture({ required: true }))
    expect(getByTitle('This field is required.')).toBeInTheDocument()
  })

  it('should not render a `validationMessage` when passed in', () => {
    const { getByText } = render(makeTextInputFieldFixture({ validationMessage: 'Please enter a value' }))
    expect(getByText('Please enter a value')).toBeInTheDocument()
  })
})
