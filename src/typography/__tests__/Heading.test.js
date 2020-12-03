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
