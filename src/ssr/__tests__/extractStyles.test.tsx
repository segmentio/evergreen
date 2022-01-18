import React from 'react'
import { render } from '@testing-library/react'
import Box from 'ui-box'
import Button from '../../buttons/src/Button'
import extractStyles from '../src/extractStyles'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('extractStyles', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('returns styles for a Box', () => {
    render(<Box height={11} />)
    const result = extractStyles({ nonce: 'abcd1234' })
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toMatchSnapshot()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result.css).toBeTruthy()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result.cache.uiBoxCache).toBeTruthy()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result.cache.glamorIds).toBeTruthy()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result.hydrationScript).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('returns styles for a Button', () => {
    render(<Button />)
    const result = extractStyles()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toMatchSnapshot()
  })
})
