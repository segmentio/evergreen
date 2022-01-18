import React from 'react'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../..'
import { ThemeProvider } from '../../theme'
import Card from '../src/Card'

const testText = 'card-test-text'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Card />', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('forwards ref', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mockRef = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ ref: any; }' is not assignable to type 'Pi... Remove this comment to see the full error message
    render(<Card ref={mockRef} />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockRef).toHaveBeenCalled()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes className', () => {
    const testClass = 'test-class-name'
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    render(<Card className={testClass}>{testText}</Card>)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveClass(testClass)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('uses theme values', () => {
    const testTheme = {
      ...defaultTheme,
      components: {
        ...defaultTheme.components,
        Card: {
          baseStyle: {
            color: 'red',
            background: 'blue',
            borderRadius: 25
          }
        }
      }
    }

    render(
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ components: { Card: { baseStyle: { color: ... Remove this comment to see the full error message
      <ThemeProvider value={testTheme}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Card>{testText}</Card>
      </ThemeProvider>
    )

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('color: red')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('background: blue')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('border-top-left-radius: 25px')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('border-top-right-radius: 25px')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-left-radius: 25px')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-right-radius: 25px')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes remaining props down', () => {
    const testId = 'test-id'
    const testLabel = 'test-label'

    render(
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Card id={testId} aria-label={testLabel}>
        {testText}
      </Card>
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveAttribute('aria-label', testLabel)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText(testText)).toHaveAttribute('id', testId)
  })
})
