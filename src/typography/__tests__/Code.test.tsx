import React from 'react'
import { render } from '@testing-library/react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker'
import renderer from 'react-test-renderer'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '../.... Remove this comment to see the full error message
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Code from '../src/Code'

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
expect.addSnapshotSerializer(UIBoxSerializer)

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Code', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(<Code>This is my code</Code>)).not.toThrow()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it.each([
    ['size 300', 300],
    ['size 400', 400],
    ['size 500', 500],
    ['size 600', 600]
  ])('<Code /> %s renders as expected', (_: any, size: any) => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Code size={size}>{`Text ${size}`}</Code>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it.each([
    ['size 300', 300],
    ['size 400', 400],
    ['size 500', 500],
    ['size 600', 600]
  ])('<Code /> %s with minimal appearance specified renders as expected', (_: any, size: any) => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Code size={size} appearance="minimal">{`Text ${size}`}</Code>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass through `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = (
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Code data-testid="code" className={expected}>
        Testing
      </Code>
    )
    const { getByTestId } = render(component)
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
    expect(getByTestId('code')).toHaveClass(expected)
  })
})
