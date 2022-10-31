import React from 'react'
import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Code from '../src/Code'

expect.addSnapshotSerializer(UIBoxSerializer)

describe('Code', () => {
  it('Should render', () => {
    expect(() => render(<Code>This is my code</Code>)).not.toThrow()
  })

  it.each([
    ['size 300', 300],
    ['size 400', 400],
    ['size 500', 500],
    ['size 600', 600]
  ])('<Code /> %s renders as expected', async (_, size) => {
    const text = `Text ${size}`
    const { findByText } = render(
      <ThemeProvider value={defaultTheme}>
        <Code size={size}>{text}</Code>
      </ThemeProvider>
    )

    expect((await findByText(text)).outerHTML).toMatchSnapshot()
  })

  it.each([
    ['size 300', 300],
    ['size 400', 400],
    ['size 500', 500],
    ['size 600', 600]
  ])('<Code /> %s with minimal appearance specified renders as expected', async (_, size) => {
    const text = `Text ${size}`
    const { findByText } = render(
      <div>
        <ThemeProvider value={defaultTheme}>
          <Code size={size} appearance="minimal">
            {text}
          </Code>
        </ThemeProvider>
      </div>
    )

    expect((await findByText(text)).outerHTML).toMatchSnapshot()
  })

  it('should pass through `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = (
      <Code data-testid="code" className={expected}>
        Testing
      </Code>
    )
    const { getByTestId } = render(component)
    expect(getByTestId('code')).toHaveClass(expected)
  })
})
