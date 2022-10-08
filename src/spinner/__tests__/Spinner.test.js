import React from 'react'
import { render } from '@testing-library/react'
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
    expect(() => {
      render(<Spinner />)
    }).not.toBeNull()
  })

  it('should render Spinner with delay time', () => {
    const spinnerDelay = render(<Spinner delay={300} />)

    jest.advanceTimersByTime(300)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
    expect(spinnerDelay).not.toBeNull()
  })
})
