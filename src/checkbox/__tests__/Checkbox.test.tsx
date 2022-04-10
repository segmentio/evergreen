import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from '../src/Checkbox'

describe('Checkbox', () => {
  it('should not crash when rendering', () => {
    expect(() => {
      render(<Checkbox />)
    }).not.toThrowError()
  })

  it('should render', () => {
    expect(() => {
      render(<Checkbox />)
    }).not.toBeNull()
  })

  it('should render with an id', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox id="test-123" />)
    expect(screen.getByRole('checkbox').getAttribute('id')).toEqual('test-123')
  })

  it('should render with a name', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox name="test-name" />)
    expect(screen.getByRole('checkbox').getAttribute('name')).toEqual('test-name')
  })

  it('should render label with no checked', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Checkbox label="Check me" />)
    expect(screen.getByText('Check me')).toBeVisible()
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type 'HTMLEle... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
  })

  it('should be in indeterminate state', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox indeterminate />)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'indeterminate' does not exist on type 'H... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').indeterminate).toBeTruthy()
  })

  it('should be in checked state', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox checked />)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type 'HTMLEle... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })

  it('should be disable when disabled is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Checkbox disabled />)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type 'HTMLEl... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').disabled).toBeTruthy()
  })

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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type 'HTMLEle... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
    fireEvent.click(checkbox)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type 'HTMLEle... Remove this comment to see the full error message
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })
})
