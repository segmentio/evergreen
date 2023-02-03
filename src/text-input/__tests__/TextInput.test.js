import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '../'
import { mockRef } from '../../test/utils'
import colors from '../../themes/default/tokens/colors'

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

  it.each([undefined, 'default'])('should render with gray400 border when appearance is %p', appearance => {
    render(makeTextInputFixture({ appearance }))

    // For some reason we were applying a border: 1px solid transparent style and then overriding it with
    // the individual borderColor style, see https://github.com/segmentio/evergreen/issues/1581
    expect(screen.getByTestId('input')).not.toHaveStyle({
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent'
    })

    // ui-box splits the borderColor prop into individual sides/styles, so border: colors.gray400
    // won't pass this test
    expect(screen.getByTestId('input')).toHaveStyle({
      borderTopColor: colors.gray400,
      borderBottomColor: colors.gray400,
      borderLeftColor: colors.gray400,
      borderRightColor: colors.gray400
    })
  })

  it('should render with transparent border when appearance is none', () => {
    render(makeTextInputFixture({ appearance: 'none' }))

    expect(screen.getByTestId('input')).toHaveStyle({
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent'
    })
  })
})
