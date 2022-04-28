import React from 'react'
import { render } from '@testing-library/react'
import { SelectField } from '../'
import { mockRef } from '../../test/utils'

const makeSelectFieldFixture = (props = {}) => <SelectField data-testid="select-field" label="SelectField" {...props} />

describe('SelectField', () => {
  it('should forward ref to underlying <select />', () => {
    const ref = mockRef()

    render(makeSelectFieldFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
