import React from 'react'
import test from 'ava'
import { render } from 'enzyme'
import Box from 'ui-box'
import { hydrate } from '../src/autoHydrate'
import extractStyles from '../src/extractStyles'

test.serial('should hydrate', t => {
  render(<Box height={16} />)
  const result = extractStyles()
  t.notThrows(() => {
    hydrate(result.cache)
  })
})
