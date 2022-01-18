import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from '../src/Checkbox'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Checkbox', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not crash when rendering', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      render(<Checkbox />)
    }).not.toThrowError()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      render(<Checkbox />)
    }).not.toBeNull()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with an id', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox id="test-123" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').getAttribute('id')).toEqual('test-123')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render with a name', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox name="test-name" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').getAttribute('name')).toEqual('test-name')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render label with no checked', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox label="Check me" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('Check me')).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should be in indeterminate state', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox indeterminate />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').indeterminate).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should be in checked state', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox checked />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should be disable when disabled is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox disabled />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').disabled).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should check and uncheck checkbox when clicked', () => {
    function ControlledCheckbox() {
      const [checked, setChecked] = React.useState(false)
      return (
        <Checkbox
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
          checked={checked}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
          onChange={(e: any) => {
            setChecked(e.target.checked)
          }}
        />
      );
    }
    render(<ControlledCheckbox />)
    const checkbox = screen.getByRole('checkbox')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
    fireEvent.click(checkbox)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })
})
