import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
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
    render(makeTextInputFixture({ placeholder: 'Enter text here' }))

    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  it('should set an invalid state if `isInvalid` is `true`', () => {
    render(makeTextInputFixture({ isInvalid: true }))

    expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true')
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

    render(<ControlledTextInput />)
    const input = screen.getByTestId('input')
    userEvent.click(input)

    expect(document.activeElement).toEqual(input)
    userEvent.type(input, 'Testing')
    expect(screen.getByDisplayValue('Testing')).toEqual(input)
  })

  it('should not be interactive if `disabled` is passed in', () => {
    render(makeTextInputFixture({ disabled: true }))
    const input = screen.getByTestId('input')
    userEvent.type(input, 'Testing')

    expect(() => screen.getByDisplayValue('Testing')).toThrowError()
    expect(screen.getByDisplayValue('')).toEqual(input)
  })
})
