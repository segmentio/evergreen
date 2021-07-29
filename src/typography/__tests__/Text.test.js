import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Text from '../src/Text'

expect.addSnapshotSerializer(UIBoxSerializer)

test.each([
  ['size 300', 300],
  ['size 400', 400],
  ['size 500', 500],
  ['size 600', 600]
])('<Text /> %s renders as expected', (_, size) => {
  const component = (
    <ThemeProvider value={defaultTheme}>
      <Text size={size}>{`Text ${size}`}</Text>
    </ThemeProvider>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('Colors', () => {
  test('<Text /> accepts arbitrary theme values for color', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Text color="muted">Testing</Text>{' '}
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('<Text /> does not render any color when a non-theme color is passed in ', () => {
    const component = (
      <ThemeProvider value={defaultTheme}>
        <Text color="SOMETHING DOESNT EXISt">Testing</Text>{' '}
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Sizing', () => {
  const originalConsoleError = console.error
  const mockFn = jest.fn()
  beforeEach(() => {
    console.error = mockFn
  })

  afterEach(() => {
    console.error = originalConsoleError
  })

  test('<Text /> has undefined behavior when trying to set arbitrary sizes', () => {
    render(<Text size={800} />)
    expect(mockFn.mock.calls.length).toEqual(1)
    expect(mockFn.mock.calls[0][0]).toMatchInlineSnapshot(`
      Extracted Styles:
      box-sizing: border-box;
      color: #474d66;
      font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";


      "Warning: Failed %s type: %s%s"
    `)
  })
})
