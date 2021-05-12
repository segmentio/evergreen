import React from 'react'
import { ThemeProvider, classicTheme, defaultTheme } from '../src'

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme === 'v5' ? classicTheme : defaultTheme
  return (
    <ThemeProvider value={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Evergreen theme for components',
    defaultValue: 'v6',
    toolbar: {
      icon: 'paintbrush',
      items: ['v6', 'v5']
    }
  }
}
