/* eslint-disable import/first, import/order */
import test from 'ava'
import React from 'react'
import Box from 'ui-box'
import { shallow } from 'enzyme'
import Button from '../../buttons/src/Button'
import extractStyles, { hydrate } from '../src/extractStyles'

test('extractStyles method returns css and scriptContents for a Box', t => {
  shallow(<Box height={11} />)
  const result = extractStyles()
  t.snapshot(result)
})

test('extractStyles method returns css and scriptContents for a Button', t => {
  shallow(<Button />)
  const result = extractStyles()
  t.snapshot(result)
})

test('extractStyles should return a scriptProps', t => {
  shallow(<Box height={16} />)
  const result = extractStyles()
  const wrapper = shallow(<script {...result.scriptProps} />)
  t.snapshot(wrapper)
})

test('extractStyles should hydrate', t => {
  shallow(<Box height={16} />)
  const result = extractStyles()
  hydrate(result.manualHydrateCache)
  t.snapshot(result.manualHydrateCache)
})
