import React from 'react'
import { render } from '@testing-library/react'
import Box from 'ui-box'
import { hydrate } from '../src/autoHydrate'
import extractStyles from '../src/extractStyles'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('autoHydrate', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should hydrate', () => {
    render(<Box height={16} />)
    const result = extractStyles()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      hydrate(result.cache)
    }).not.toThrow()
  })
})
