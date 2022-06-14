import React from 'react'
import { render } from '@testing-library/react'
import { Select } from '../'
import { mockRef } from '../../test/utils'

const makeSelectFixture = (props = {}) => <Select data-testid="select" {...props} />

describe('Select', () => {
  it('should forward ref to underlying <select />', () => {
    const ref = mockRef()

    render(makeSelectFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
