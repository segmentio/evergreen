import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Heading from '../src/Heading'

expect.addSnapshotSerializer(UIBoxSerializer)

test.each([
  ['size 100', 100],
  ['size 200', 200],
  ['size 300', 300],
  ['size 400', 400],
  ['size 500', 500],
  ['size 600', 600],
  ['size 700', 700],
  ['size 800', 800],
  ['size 900', 900]
])('<Heading /> %s renders as expected', (_, size) => {
  const component = (
    <ThemeProvider value={defaultTheme}>
      <Heading size={size}>{`Heading ${size}`}</Heading>
    </ThemeProvider>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading lets you override the underlying DOM element', async () => {
  render(
    <ThemeProvider value={defaultTheme}>
      <Heading is="h1">Testing h1</Heading>
    </ThemeProvider>
  )

  expect(screen.getByText('Testing h1', { selector: 'h1' })).toBeTruthy()
})

describe('Colors', () => {
  test('<Heading /> accepts arbitrary theme values for color', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Heading color="blue600">Testing</Heading>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('<Heading /> does not render any color when a non-theme color is passed in ', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Heading color="COLOR THAT DOESNT EXIST">Testing</Heading>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
