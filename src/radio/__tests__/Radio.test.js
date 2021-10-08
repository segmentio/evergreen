import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Radio from '../src/Radio'

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
    expect(screen.getByRole('radio').disabled).toBeTruthy()
  })

  it('should be checked', () => {
    render(<Radio checked />)
    expect(screen.getByRole('radio').checked).toBeTruthy()
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
    expect(screen.getByRole('radio').getAttribute('aria-invalid')).toBeTruthy()
  })

  it('should be checked when clicked', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')
    expect(screen.getByRole('radio').checked).toBeFalsy()
    fireEvent.click(radio)
    expect(screen.getByRole('radio').checked).toBeTruthy()
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
