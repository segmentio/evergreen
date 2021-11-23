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
    render(<Checkbox id="test-123" />)
    expect(screen.getByRole('checkbox').getAttribute('id')).toEqual('test-123')
  })

  it('should render with a name', () => {
    render(<Checkbox name="test-name" />)
    expect(screen.getByRole('checkbox').getAttribute('name')).toEqual('test-name')
  })

  it('should render label with no checked', () => {
    render(<Checkbox label="Check me" />)
    expect(screen.getByText('Check me')).toBeVisible()
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
  })

  it('should be in indeterminate state', () => {
    render(<Checkbox indeterminate />)
    expect(screen.getByRole('checkbox').indeterminate).toBeTruthy()
  })

  it('should be in checked state', () => {
    render(<Checkbox checked />)
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })

  it('should be disable when disabled is true', () => {
    render(<Checkbox disabled />)
    expect(screen.getByRole('checkbox').disabled).toBeTruthy()
  })

  it('should check and uncheck checkbox when clicked', () => {
    function ControlledCheckbox() {
      const [checked, setChecked] = React.useState(false)
      return (
        <Checkbox
          checked={checked}
          onChange={e => {
            setChecked(e.target.checked)
          }}
        />
      )
    }
    render(<ControlledCheckbox />)
    const checkbox = screen.getByRole('checkbox')
    expect(screen.getByRole('checkbox').checked).toBeFalsy()
    fireEvent.click(checkbox)
    expect(screen.getByRole('checkbox').checked).toBeTruthy()
  })
})
