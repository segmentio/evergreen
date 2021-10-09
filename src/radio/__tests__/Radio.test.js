import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Radio from '../src/Radio'
import RadioGroup from '../src/RadioGroup'

describe('Radio', () => {
  it('should not crash when rendering', () => {
    expect(() => {
      render(<Radio />)
    }).not.toThrowError()
  })

  it('should render', () => {
    expect(() => {
      render(<Radio />)
    }).not.toBeNull()
  })

  it('should render with an id', () => {
    render(<Radio id="test-123" />)
    expect(screen.getByRole('radio').getAttribute('id')).toEqual('test-123')
  })

  it('should render with a name', () => {
    render(<Radio name="test-name" />)
    expect(screen.getByRole('radio').getAttribute('name')).toEqual('test-name')
  })

  it('should render with a label', () => {
    render(<Radio label="Select me" />)
    expect(screen.getByText('Select me')).toBeVisible()
  })

  it('should render with a value', () => {
    render(<Radio value="test-value" />)
    expect(screen.getByRole('radio').getAttribute('value')).toEqual('test-value')
  })

  it('should be disabled', () => {
    render(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('should be checked', () => {
    render(<Radio checked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('should render with the according size', () => {
    // the input element is always 1px, and the size is on the sibling Box
    // how to find the right assertion that has the size?
    render(<Radio size={12} />)
    // expect(screen.getByRole('radio')).toHaveStyle('height: 12px')
    // expect(screen.getByRole('radio')).toHaveStyle('width: 12px')
  })

  it('should be required and show the required asterisk', () => {
    render(<Radio isRequired />)
    expect(screen.getByRole('radio').required).toBeTruthy()
  })

  it('should be invalid', () => {
    render(<Radio isInvalid />)
    expect(screen.getByRole('radio')).toBeInvalid()
  })

  it('should be checked when clicked', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')
    expect(screen.getByRole('radio')).not.toBeChecked()
    fireEvent.click(radio)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('should handle state change', () => {
    const onChangeMock = jest.fn()
    render(<Radio onChange={onChangeMock} />)

    const radio = screen.getByRole('radio')
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    expect(onChangeMock).toBeCalledTimes(1)
  })
})

describe('Radio Group', () => {
  const options = [
    { label: 'Read-only', value: 'read-only' },
    { label: 'Write', value: 'write', isDisabled: true },
    { label: 'Restricted', value: 'restricted' }
  ]

  it('should not crash when render', () => {
    expect(() => {
      render(<RadioGroup options={options} />)
    }).not.toThrowError()
  })

  it('should show the options', () => {
    render(<RadioGroup options={options} />)
    expect(screen.getByRole('group')).toBeVisible()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('should show group title', () => {
    render(<RadioGroup options={options} label="Permissions" />)
    expect(screen.getByRole('group').getAttribute('aria-label')).toEqual('Permissions')
    expect(screen.getByText('Permissions')).toBeVisible()
  })

  it('options are all required', () => {
    // not sure if this prop even makes sense
    render(<RadioGroup options={options} isRequired />)
    screen.getAllByRole('radio').forEach(element => {
      expect(element).toBeRequired()
    })
  })

  it('should select the option that has the same value passed in', () => {
    render(<RadioGroup options={options} value="write" />)
    expect(screen.getByRole('radio', { name: 'Write' })).toBeChecked()
  })

  it('should handle state change', () => {
    const onChangeMock = jest.fn()
    render(<RadioGroup options={options} value="read-only" onChange={onChangeMock} />)

    const radio = screen.getByRole('radio', { name: 'Restricted' })
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    expect(onChangeMock).toBeCalledTimes(1)
  })

  // untested props: defaultValue, size
})
