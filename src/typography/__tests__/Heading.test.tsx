import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '../.... Remove this comment to see the full error message
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Heading from '../src/Heading'

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
expect.addSnapshotSerializer(UIBoxSerializer)

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
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
])('<Heading /> %s renders as expected', (_: any, size: any) => {
  const component = (
    <ThemeProvider value={defaultTheme}>
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Heading size={size}>{`Heading ${size}`}</Heading>
    </ThemeProvider>
  )
  const tree = renderer.create(component).toJSON()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(tree).toMatchSnapshot()
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('Heading lets you override the underlying DOM element', async () => {
  render(
    <ThemeProvider value={defaultTheme}>
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Heading is="h1">Testing h1</Heading>
    </ThemeProvider>
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(screen.getByText('Testing h1', { selector: 'h1' })).toBeTruthy()
})
