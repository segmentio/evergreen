import React from 'react'
import defaultTheme from './defaultTheme'

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer
} = React.createContext(defaultTheme)

export { ThemeProvider, ThemeConsumer }
