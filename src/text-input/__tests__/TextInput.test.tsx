import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput, TextInputField } from '../'

function makeTextInputFixture(props = {}) {
  return <TextInput data-testid="input" {...props} />
}

function makeTextInputFieldFixture(props = {}) {
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
  return <TextInputField data-testid="input" label="Name" {...props} />
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TextInput', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(makeTextInputFixture())).not.toThrow()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should accept placeholder text', () => {
    const { getByPlaceholderText } = render(makeTextInputFixture({ placeholder: 'Enter text here' }))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should set an invalid state if `isInvalid` is `true`', () => {
    const { getByTestId } = render(makeTextInputFixture({ isInvalid: true }))
    const input = getByTestId('input')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should accept an `onChange` handler to be a controlled component', () => {
    function ControlledTextInput() {
      const [value, setValue] = useState('')
      return (
        <TextInput
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          data-testid="input"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          placeholder="Enter text here"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          value={value}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
          onChange={(e: any) => setValue(e.target.value)}
        />
      );
    }

    const { getByDisplayValue, getByTestId } = render(<ControlledTextInput />)
    const input = getByTestId('input')
    userEvent.click(input)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.activeElement).toEqual(input)
    userEvent.type(input, 'Testing')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByDisplayValue('Testing')).toEqual(input)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should not be interactive if `disabled` is passed in', () => {
    const { getByDisplayValue, getByTestId } = render(makeTextInputFixture({ disabled: true }))
    const input = getByTestId('input')
    userEvent.type(input, 'Testing')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => getByDisplayValue('Testing')).toThrowError()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByDisplayValue('')).toEqual(input)
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TextInputField', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(makeTextInputFieldFixture())).not.toThrow()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render a required `label` when passed in', () => {
    const { getByLabelText } = render(makeTextInputFieldFixture())
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByLabelText('Name')).toBeInTheDocument()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render a `hint` underneath the input', () => {
    const { getByText } = render(makeTextInputFieldFixture({ hint: 'Enter a value in the input' }))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('Enter a value in the input')).toBeInTheDocument()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render an astrix when `required` is passed in', () => {
    const { getByTitle } = render(makeTextInputFieldFixture({ required: true }))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTitle('This field is required.')).toBeInTheDocument()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should not render a `validationMessage` when passed in', () => {
    const { getByText } = render(makeTextInputFieldFixture({ validationMessage: 'Please enter a value' }))
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('Please enter a value')).toBeInTheDocument()
  })
})
