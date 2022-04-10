import React from 'react'
import { render } from '@testing-library/react'
import { Badge } from '../'

describe('Badge', () => {
  it('Renders its children without crashing', () => {
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    expect(() => render(<Badge>Testing</Badge>)).not.toThrow()
  })
})
