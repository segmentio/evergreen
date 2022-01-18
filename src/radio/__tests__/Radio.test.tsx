import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Radio from '../src/Radio'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Radio', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not crash when rendering', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      render(<Radio />)
    }).not.toThrowError()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the component', () => {
    render(<Radio data-testid="test-id-radio" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByTestId('test-id-radio')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with an id when id is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio id="test-123" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio').getAttribute('id')).toEqual('test-123')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with a name when name is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio name="test-name" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio').getAttribute('name')).toEqual('test-name')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with a label when label is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio label="Select" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByLabelText('Select')).toBeInTheDocument()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with a value when value is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio value="test-value" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio').getAttribute('value')).toEqual('test-value')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a disabled state when disabled is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio disabled />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a checked state when checked is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio checked />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio')).toBeChecked()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a required state when isRequired is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio isRequired />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio').required).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render an invalid state when isInvalid is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio isInvalid />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio')).toBeInvalid()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a checked state when the radio is clicked', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio')).not.toBeChecked()
    fireEvent.click(radio)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio')).toBeChecked()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should handle state change when onChange is specified', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onChangeMock = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    render(<Radio onChange={onChangeMock} />)

    const radio = screen.getByRole('radio')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChangeMock).toBeCalledTimes(1)
  })
})
