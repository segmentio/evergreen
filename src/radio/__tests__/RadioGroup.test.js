import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RadioGroup from '../src/RadioGroup'

describe('Radio Group', () => {
  const options = [
    { label: 'Read-only', value: 'read-only' },
    { label: 'Write', value: 'write', isDisabled: true },
    { label: 'Restricted', value: 'restricted' }
  ]

  it('should not crash when rendering', () => {
    expect(() => {
      render(<RadioGroup options={options} />)
    }).not.toThrowError()
  })

  it('should render the radio options with the options specified', () => {
    render(<RadioGroup options={options} />)
    expect(screen.getByRole('group')).toBeVisible()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('should show group label when label is specified', () => {
    render(<RadioGroup options={options} label="Permissions" />)
    expect(screen.getByRole('group').getAttribute('aria-label')).toEqual('Permissions')
    expect(screen.getByLabelText('Permissions')).toBeVisible()
  })

  it('should have all options in required states when isRequired is true', () => {
    render(<RadioGroup options={options} isRequired />)
    screen.getAllByRole('radio').forEach(element => {
      expect(element).toBeRequired()
    })
  })

  it('should select the option that has the same value specified', () => {
    render(<RadioGroup options={options} value="write" />)
    expect(screen.getByRole('radio', { name: 'Write' })).toBeChecked()
  })

  it('should handle state change when onChange is specified', () => {
    const onChangeMock = jest.fn()
    render(<RadioGroup options={options} value="read-only" onChange={onChangeMock} />)

    const radio = screen.getByRole('radio', { name: 'Restricted' })
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    expect(onChangeMock).toBeCalledTimes(1)
  })

  it('should render the radio buttons with HTML name attributes specified', () => {
    render(<RadioGroup options={options} label="Permissions" name="RadioInput" />)
    screen.getAllByRole('radio').forEach(element => {
      expect(element.getAttribute('name')).toEqual('RadioInput')
    })
  })

  it('should render the radio buttons with auto-generated HTML name attributes when name property is empty', () => {
    render(<RadioGroup options={options} label="Permissions" />)
    screen.getAllByRole('radio').forEach(element => {
      expect(element.getAttribute('name')).not.toBe('')
    })
  })

  // untested props: defaultValue, size
})
