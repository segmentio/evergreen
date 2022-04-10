import React from 'react'
import { render } from '@testing-library/react'
import { Label } from '..'

describe('Label', () => {
  it('Renders without crashing', () => {
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    expect(() => render(<Label>Name</Label>)).not.toThrow()
  })
})
