import React from 'react'
import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '../.... Remove this comment to see the full error message
import { UIBoxSerializer } from '../../../lib/testing'
import { ThemeProvider } from '../../theme'
import { defaultTheme } from '../../themes'
import Text from '../src/Text'

expect.addSnapshotSerializer(UIBoxSerializer)

test.each([
  ['size 300', 300],
  ['size 400', 400],
  ['size 500', 500],
  ['size 600', 600],
])('<Text /> %s renders as expected', (_: any, size: any) => {
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

describe('Props', () => {
  it('should forward `className` prop', () => {
    const expected = faker.random.word().toLowerCase()
    const component = (
      <Text data-testid="text" className={expected}>
        Testing
      </Text>
    )
    const { getByTestId } = render(component)
    expect(getByTestId('text')).toHaveClass(expected)
  })
})
