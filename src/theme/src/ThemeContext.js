import React from 'react'
import defaultTheme from '../../themes/default'

/**
 * Use React 16.3+ createContext API.
 */

// NOTE(allen) - switch this back once we properly refactor Toasts to render
// them in the existing DOM tree flow, instead of mounting a new root
// outside of whatever app root an EG consumer is using.
const ThemeContext = React.createContext(defaultTheme)
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext

/**
 * Returns a typed version of the ThemeContext when using a custom theme
 */
const getThemeContext = () => ThemeContext

export default ThemeContext
export { getThemeContext, ThemeProvider, ThemeConsumer }
