import React from 'react'
import Box from 'ui-box'
import { render } from 'enzyme'
import extractStyles from '../src/extractStyles'
import { hydrate } from '../src/autoHydrate'

describe('autoHydrate', () => {
  it('should hydrate', () => {
    render(<Box height={16} />)
    const result = extractStyles()
    expect(() => {
      hydrate(result.cache)
    }).not.toThrow()
  })
})
