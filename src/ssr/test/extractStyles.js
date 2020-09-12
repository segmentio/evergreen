import React from 'react'
import test from 'ava'
import { render } from 'enzyme'
import Box from 'ui-box'
import Button from '../../buttons/src/Button'
import extractStyles from '../src/extractStyles'

test.serial('returns styles for a Box', t => {
  render(<Box height={11} />)
  const result = extractStyles({ nonce: 'abcd1234' })
  t.snapshot(result)
  t.truthy(result.css)
  t.truthy(result.cache.uiBoxCache)
  t.truthy(result.cache.glamorIds)
  t.truthy(result.hydrationScript)
})

test.serial('returns styles for a Button', t => {
  render(<Button />)
  const result = extractStyles()
  t.snapshot(result)
})
