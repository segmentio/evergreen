import React from 'react'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../..'
import { ThemeProvider } from '../../theme'
import Card from '../src/Card'

const testText = 'card-test-text'

describe('<Card />', () => {
  it('forwards ref', () => {
    const mockRef = jest.fn()
    render(<Card ref={mockRef} />)
    expect(mockRef).toHaveBeenCalled()
  })

  it('passes className', () => {
    const testClass = 'test-class-name'
    render(<Card className={testClass}>{testText}</Card>)
    expect(screen.getByText(testText)).toHaveClass(testClass)
  })

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
      <ThemeProvider value={testTheme}>
        <Card>{testText}</Card>
      </ThemeProvider>
    )

    expect(screen.getByText(testText)).toHaveStyle('color: red')
    expect(screen.getByText(testText)).toHaveStyle('background: blue')
    expect(screen.getByText(testText)).toHaveStyle('border-top-left-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-top-right-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-left-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-right-radius: 25px')
  })

  it('passes remaining props down', () => {
    const testId = 'test-id'
    const testLabel = 'test-label'

    render(
      <Card id={testId} aria-label={testLabel}>
        {testText}
      </Card>
    )
    expect(screen.getByText(testText)).toHaveAttribute('aria-label', testLabel)
    expect(screen.getByText(testText)).toHaveAttribute('id', testId)
  })
})
