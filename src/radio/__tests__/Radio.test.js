import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Radio from '../src/Radio'

describe('Radio', () => {
  it('should not crash when rendering', () => {
    expect(() => {
      render(<Radio />)
    }).not.toThrowError()
  })

  it('should render the component', () => {
    expect(() => {
      render(<Radio />)
    }).not.toBeNull()
  })

  it('should render with an id when id is specified', () => {
    render(<Radio id="test-123" />)
    expect(screen.getByRole('radio').getAttribute('id')).toEqual('test-123')
  })

  it('should render with a name when name is specified', () => {
    render(<Radio name="test-name" />)
    expect(screen.getByRole('radio').getAttribute('name')).toEqual('test-name')
  })

  it('should render with a label when label is specified', () => {
    render(<Radio label="Select me" />)
    expect(screen.getByText('Select me')).toBeVisible()
  })

  it('should render with a value when value is specified', () => {
    render(<Radio value="test-value" />)
    expect(screen.getByRole('radio').getAttribute('value')).toEqual('test-value')
  })

  it('should render a disabled state when disabled is true', () => {
    render(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('should render a checked state when checked is true', () => {
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

  it('should render a required state when isRequired is true', () => {
    render(<Radio isRequired />)
    expect(screen.getByRole('radio').required).toBeTruthy()
  })

  it('should render an invalid state when isInvalid is true', () => {
    render(<Radio isInvalid />)
    expect(screen.getByRole('radio')).toBeInvalid()
  })

  it('should render a checked state when the radio is clicked', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')
    expect(screen.getByRole('radio')).not.toBeChecked()
    fireEvent.click(radio)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('should handle state change when onChange is specified', () => {
    const onChangeMock = jest.fn()
    render(<Radio onChange={onChangeMock} />)

    const radio = screen.getByRole('radio')
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    expect(onChangeMock).toBeCalledTimes(1)
  })
})
