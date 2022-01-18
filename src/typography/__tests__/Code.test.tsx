import React from 'react'
import { render } from '@testing-library/react'
import faker from 'faker'
import renderer from 'react-test-renderer'
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
  ])('<Code /> %s renders as expected', (_, size) => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Code size={size}>{`Text ${size}`}</Code>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it.each([
    ['size 300', 300],
    ['size 400', 400],
    ['size 500', 500],
    ['size 600', 600]
  ])('<Code /> %s with minimal appearance specified renders as expected', (_, size) => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Code size={size} appearance="minimal">{`Text ${size}`}</Code>
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
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
