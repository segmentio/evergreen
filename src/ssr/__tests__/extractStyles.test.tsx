import React from 'react'
import { render } from '@testing-library/react'
import Box from 'ui-box'
import Button from '../../buttons/src/Button'
import extractStyles from '../src/extractStyles'

describe('extractStyles', () => {
  it('returns styles for a Box', () => {
    render(<Box height={11} />)
    const result = extractStyles({ nonce: 'abcd1234' })
    expect(result).toMatchSnapshot()
    expect(result.css).toBeTruthy()
    expect(result.cache.uiBoxCache).toBeTruthy()
    expect(result.cache.glamorIds).toBeTruthy()
    expect(result.hydrationScript).toBeTruthy()
  })

  it('returns styles for a Button', () => {
    render(<Button />)
    const result = extractStyles()
    expect(result).toMatchSnapshot()
  })
})
