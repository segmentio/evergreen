import React from 'react'
import { render } from '@testing-library/react'
import faker from 'faker'
import Code from '../src/Code'

describe('Code', () => {
  it('should pass through `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = (
      <Code data-testid="text" className={expected}>
        Testing
      </Code>
    )
    const { getByTestId } = render(component)
    expect(getByTestId('text')).toHaveClass(expected)
  })
})
