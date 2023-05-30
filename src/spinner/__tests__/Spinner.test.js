import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Spinner from '../src/Spinner'

describe('Spinner', () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')

  it('should not crash when rendering', () => {
    expect(() => {
      render(<Spinner />)
    }).not.toThrowError()
  })

  it('should render', () => {
    render(<Spinner data-testid="Spinner" />)
    expect(screen.getByTestId('Spinner')).not.toBeNull()
  })

  it('should render after delay time', () => {
    render(<Spinner delay={300} data-testid="Spinner-delay" />)

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
    expect(screen.getByTestId('Spinner-delay')).not.toBeNull()
  })
})
