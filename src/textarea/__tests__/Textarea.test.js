import React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from '..'

const makeTextareaFixture = (props = {}) => <Textarea data-testid="Textarea" {...props} />

describe('Textarea', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFixture())).not.toThrow()
  })
})
