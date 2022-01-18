import React from 'react'
import { render } from '@testing-library/react'
import { Label } from '..'

describe('Label', () => {
  it('Renders without crashing', () => {
    expect(() => render(<Label>Name</Label>)).not.toThrow()
  })
})
