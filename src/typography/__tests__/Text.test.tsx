import React from 'react'
import { render } from '@testing-library/react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker'
import renderer from 'react-test-renderer'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '../.... Remove this comment to see the full error message
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Text from '../src/Text'

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
expect.addSnapshotSerializer(UIBoxSerializer)

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test.each([
  ['size 300', 300],
  ['size 400', 400],
  ['size 500', 500],
  ['size 600', 600]
])('<Text /> %s renders as expected', (_: any, size: any) => {
  const component = (
    <ThemeProvider value={defaultTheme}>
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Text size={size}>{`Text ${size}`}</Text>
    </ThemeProvider>
  )
  const tree = renderer.create(component).toJSON()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(tree).toMatchSnapshot()
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Colors', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('<Text /> accepts arbitrary theme values for color', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Text color="muted">Testing</Text>{' '}
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('<Text /> does not render any color when a non-theme color is passed in ', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Text color="SOMETHING DOESNT EXISt">Testing</Text>{' '}
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Sizing', () => {
  const originalConsoleError = console.error
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  const mockFn = jest.fn()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    console.error = mockFn
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(() => {
    console.error = originalConsoleError
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('<Text /> has undefined behavior when trying to set arbitrary sizes', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    render(<Text size={800} />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn.mock.calls.length).toEqual(1)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFn.mock.calls[0][0]).toMatchInlineSnapshot(`
      Extracted Styles:
      box-sizing: border-box;
      color: #474d66;
      font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";


      "Warning: Failed %s type: %s%s"
    `)
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Props', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should forward `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = (
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Text data-testid="text" className={expected}>
        Testing
      </Text>
    )
    const { getByTestId } = render(component)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('text')).toHaveClass(expected)
  })
})
