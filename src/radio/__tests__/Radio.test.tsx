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
    render(<Radio data-testid="test-id-radio" />)
    expect(screen.getByTestId('test-id-radio')).toBeVisible()
  })

  it('should render with an id when id is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio id="test-123" />)
    expect(screen.getByRole('radio').getAttribute('id')).toEqual('test-123')
  })

  it('should render with a name when name is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio name="test-name" />)
    expect(screen.getByRole('radio').getAttribute('name')).toEqual('test-name')
  })

  it('should render with a label when label is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio label="Select" />)
    expect(screen.getByLabelText('Select')).toBeInTheDocument()
  })

  it('should render with a value when value is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Radio value="test-value" />)
    expect(screen.getByRole('radio').getAttribute('value')).toEqual('test-value')
  })

  it('should render a disabled state when disabled is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('should render a checked state when checked is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio checked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('should render a required state when isRequired is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
    render(<Radio isRequired />)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'required' does not exist on type 'HTMLEl... Remove this comment to see the full error message
    expect(screen.getByRole('radio').required).toBeTruthy()
  })

  it('should render an invalid state when isInvalid is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
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
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Mock<any, any>' is not assignable to type 'n... Remove this comment to see the full error message
    render(<Radio onChange={onChangeMock} />)

    const radio = screen.getByRole('radio')
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    expect(onChangeMock).toBeCalledTimes(1)
  })
})
