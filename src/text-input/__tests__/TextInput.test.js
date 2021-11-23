import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput, TextInputField } from '../'

function makeTextInputFixture(props = {}) {
  return <TextInput data-testid="input" {...props} />
}

function makeTextInputFieldFixture(props = {}) {
  return <TextInputField data-testid="input" label="Name" {...props} />
}

describe('TextInput', () => {
  it('Should render without crashing', () => {
    expect(() => render(makeTextInputFixture())).not.toThrow()
  })

  it('Should accept placeholder text', () => {
    const { getByPlaceholderText } = render(makeTextInputFixture({ placeholder: 'Enter text here' }))
    expect(getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  it('Should set an invalid state if `isInvalid` is `true`', () => {
    const { getByTestId } = render(makeTextInputFixture({ isInvalid: true }))
    const input = getByTestId('input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('Should accept an `onChange` handler to be a controlled component', () => {
    function ControlledTextInput() {
      const [value, setValue] = useState('')
      return (
        <TextInput
          data-testid="input"
          placeholder="Enter text here"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )
    }

    const { getByDisplayValue, getByTestId } = render(<ControlledTextInput />)
    const input = getByTestId('input')
    userEvent.click(input)
    expect(document.activeElement).toEqual(input)
    userEvent.type(input, 'Testing')
    expect(getByDisplayValue('Testing')).toEqual(input)
  })

  it('Should not be interactive if `disabled` is passed in', () => {
    const { getByDisplayValue, getByTestId } = render(makeTextInputFixture({ disabled: true }))
    const input = getByTestId('input')
    userEvent.type(input, 'Testing')
    expect(() => getByDisplayValue('Testing')).toThrowError()
    expect(getByDisplayValue('')).toEqual(input)
  })
})

describe('TextInputField', () => {
  it('Should render without crashing', () => {
    expect(() => render(makeTextInputFieldFixture())).not.toThrow()
  })

  it('Should render a required `label` when passed in', () => {
    const { getByLabelText } = render(makeTextInputFieldFixture())
    expect(getByLabelText('Name')).toBeInTheDocument()
  })

  it('Should render a `hint` underneath the input', () => {
    const { getByText } = render(makeTextInputFieldFixture({ hint: 'Enter a value in the input' }))
    expect(getByText('Enter a value in the input')).toBeInTheDocument()
  })

  it('Should render an astrix when `required` is passed in', () => {
    const { getByTitle } = render(makeTextInputFieldFixture({ required: true }))
    expect(getByTitle('This field is required.')).toBeInTheDocument()
  })

  it('Should not render a `validationMessage` when passed in', () => {
    const { getByText } = render(makeTextInputFieldFixture({ validationMessage: 'Please enter a value' }))
    expect(getByText('Please enter a value')).toBeInTheDocument()
  })
})
