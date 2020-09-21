import React from 'react'
import render from 'react-test-renderer'
import { ThemeProvider } from '../../theme'
import { classicTheme, defaultTheme } from '../../themes'
import Button from '../src/Button'

describe.each([
  [defaultTheme, 'default'],
  [classicTheme, 'classic']
])('<Button /> %% %s', theme => {
  it('snapshots with the rendered output', () => {
    const component = (
      <ThemeProvider value={theme}>
        <Button />
      </ThemeProvider>
    )
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
