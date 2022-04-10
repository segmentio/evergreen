import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '../'
import { mockRef } from '../../test/utils'

function makeTextInputFixture(props = {}) {
  return <TextInput data-testid="input" {...props} />
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
