import test from 'ava'
import { render } from 'enzyme'
import * as React from 'react'
import Box from 'ui-box'

import extractStyles from '../src/extractStyles'
import { hydrate } from '../src/autoHydrate'

test.serial('should hydrate', t => {
  render(<Box height={16} />)
  const result = extractStyles()
  t.notThrows(() => {
    hydrate(result.cache)
  })
})
