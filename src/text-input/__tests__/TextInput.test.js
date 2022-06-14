import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput, TextInputField } from '../'
import { mockRef } from '../../test/utils'

function makeTextInputFixture(props = {}) {
  return <TextInput data-testid="input" {...props} />
}

function makeTextInputFieldFixture(props = {}) {
  return <TextInputField data-testid="input" label="Name" {...props} />
}

describe('TextInput', () => {
  it('should forward ref to underlying <input />', () => {
    const ref = mockRef()

    render(makeTextInputFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('should render without crashing', () => {
    expect(() => render(makeTextInputFixture())).not.toThrow()
  })

  it('should accept placeholder text', () => {
    const { getByPlaceholderText } = render(makeTextInputFixture({ placeholder: 'Enter text here' }))

    expect(getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  it('should set an invalid state if `isInvalid` is `true`', () => {
    const { getByTestId } = render(makeTextInputFixture({ isInvalid: true }))
    const input = getByTestId('input')

    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should accept an `onChange` handler to be a controlled component', () => {
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

  it('should not be interactive if `disabled` is passed in', () => {
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

  it('Should have expected accessible name when `label` prop', () => {
    const { getByLabelText, getByTestId } = render(makeTextInputFieldFixture())
    expect(getByLabelText('Name')).toBeInTheDocument()
    expect(getByTestId('input')).toHaveAccessibleName('Name')
  })

  it('Should add hint text to accessible description when `hint` prop provided', () => {
    const { getByTestId, getByText } = render(makeTextInputFieldFixture({ hint: 'Enter a value in the input' }))
    expect(getByText('Enter a value in the input')).toBeInTheDocument()
    expect(getByTestId('input')).toHaveAccessibleDescription('Enter a value in the input')
  })

  it('Should render an astrix when `required` is passed in', () => {
    const { getByTitle } = render(makeTextInputFieldFixture({ required: true }))
    expect(getByTitle('This field is required.')).toBeInTheDocument()
  })

  it('Should render a `validationMessage` when passed in', () => {
    const { getByTestId, getByText } = render(makeTextInputFieldFixture({ validationMessage: 'Please enter a value.' }))
    expect(getByText('Please enter a value.')).toBeInTheDocument()
    expect(getByTestId('input')).toHaveAccessibleDescription('Please enter a value.')
  })

  it('Should correctly compose an accessible description from multiple hints', () => {
    const { getByTestId, getByText } = render(
      makeTextInputFieldFixture({ description: 'A description.', hint: 'Am hint.', validationMessage: 'Try again.' })
    )
    expect(getByText('A description.')).toBeInTheDocument()
    expect(getByText('Am hint.')).toBeInTheDocument()
    expect(getByText('Try again.')).toBeInTheDocument()
    expect(getByTestId('input')).toHaveAccessibleDescription('A description. Try again. Am hint.')
  })
})
