import React from 'react'
import { render } from '@testing-library/react'
import { TextareaField } from '..'

const makeTextareaFieldFixture = (props = {}) => (
  <TextareaField data-testid="TextareaField" label="TextareaField" {...props} />
)

describe('TextareaField', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFieldFixture())).not.toThrow()
  })

  it('Should pass through `resize` prop to textarea', () => {
    const { container } = render(makeTextareaFieldFixture({ resize: 'none' }))

    const textarea = container.querySelector('textarea')
    expect(textarea).not.toBeNull()
    expect(textarea).toHaveStyle({ resize: 'none' })
  })
})
