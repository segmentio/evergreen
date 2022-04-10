import React from 'react'
import { render } from '@testing-library/react'
import Box from 'ui-box'
import { hydrate } from '../src/autoHydrate'
import extractStyles from '../src/extractStyles'

describe('autoHydrate', () => {
  it('should hydrate', () => {
    render(<Box height={16} />)
    const result = extractStyles()
    expect(() => {
      hydrate(result.cache)
    }).not.toThrow()
  })
})
