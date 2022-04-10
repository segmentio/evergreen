import React from 'react'
import { render } from '@testing-library/react'
import { Select } from '../'

const makeSelectFixture = (props = {}) => <Select data-testid="select" {...props} />

describe('Select', () => {
  it('should forward ref to underlying <select />', () => {
    const ref = {
      current: jest.fn()
    }

    render(makeSelectFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
