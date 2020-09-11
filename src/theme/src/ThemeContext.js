import React from 'react'
import defaultTheme from '../../themes/default'

/**
 * Use React 16.3+ createContext API.
 */
const ThemeContext = React.createContext(defaultTheme)
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext

export default ThemeContext
export { ThemeProvider, ThemeConsumer }
