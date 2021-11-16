import React from 'react'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../..'
import { ThemeProvider } from '../../theme'
import Pane from '../src/Pane'

const testText = 'pane-test-text'

describe('<Pane />', () => {
  it('forwards ref', () => {
    const mockRef = jest.fn()
    render(<Pane ref={mockRef} />)
    expect(mockRef).toHaveBeenCalled()
  })

  it('passes className', () => {
    const testClass = 'test-class-name'
    render(<Pane className={testClass}>{testText}</Pane>)
    expect(screen.getByText(testText)).toHaveClass(testClass)
  })

  it('uses elevation', () => {
    render(<Pane elevation={1}>{testText}</Pane>)

    expect(screen.getByText(testText)).toHaveStyle(
      'box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 2px 4px -2px rgba(67, 90, 111, 0.47)'
    )
  })

  it('uses theme values', () => {
    const testTheme = {
      ...defaultTheme,
      components: {
        ...defaultTheme.components,
        Pane: {
          baseStyle: (theme, props) => ({
            color: 'red',
            background: 'blue',
            borderRadius: 25,
            boxShadow: theme.shadows[props.elevation]
          })
        }
      },
      shadows: ['0px 0px 50px 0px #00000', '0px 0px 50px 20px #00000']
    }

    render(
      <ThemeProvider value={testTheme}>
        <Pane elevation={1}>{testText}</Pane>
      </ThemeProvider>
    )

    expect(screen.getByText(testText)).toHaveStyle('color: red')
    expect(screen.getByText(testText)).toHaveStyle('background: blue')
    expect(screen.getByText(testText)).toHaveStyle('border-top-left-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-top-right-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-left-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('border-bottom-right-radius: 25px')
    expect(screen.getByText(testText)).toHaveStyle('box-shadow: 0px 0px 50px 20px #00000')
  })

  it('passes remaining props down', () => {
    const testId = 'test-id'
    const testLabel = 'test-label'

    render(
      <Pane id={testId} aria-label={testLabel}>
        {testText}
      </Pane>
    )
    expect(screen.getByText(testText)).toHaveAttribute('aria-label', testLabel)
    expect(screen.getByText(testText)).toHaveAttribute('id', testId)
  })
})
