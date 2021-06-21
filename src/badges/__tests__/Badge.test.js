import React from 'react'
import { render } from '@testing-library/react'
import { Badge } from '../'

describe('Badge', () => {
  it('Renders its children without crashing', () => {
    expect(() => render(<Badge>Testing</Badge>)).not.toThrow()
  })
})
