import test from 'ava'
import React from 'react'
import Box from 'ui-box'
import { render } from 'enzyme'
import extractStyles from '../src/extractStyles'
import { hydrate } from '../src/autoHydrate'

test.serial('should hydrate', t => {
  render(<Box height={16} />)
  const result = extractStyles()
  t.notThrows(() => {
    hydrate(result.cache)
  })
})
