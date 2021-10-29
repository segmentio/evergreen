import React from 'react'
import { render } from '@testing-library/react'
import faker from 'faker'
import Code from '../src/Code'

describe('Props', () => {
  test('<Code /> accepts arbitrary props', () => {
    const propKey = faker.random
      .word()
      .toLowerCase()
      .replace(/ /g, '')
    const propValue = faker.random
      .word()
      .toLowerCase()
      .replace(/ /g, '')
    const component = (
      <Code data-testid="text" {...{ [propKey]: propValue }}>
        Testing
      </Code>
    )
    const { getByTestId } = render(component)
    expect(getByTestId('text')).toHaveAttribute(propKey, propValue)
  })

  test('<Code /> forwards `className` prop', () => {
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
