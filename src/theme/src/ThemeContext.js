import React from 'react'
import classicTheme from '../../themes/classic'

/**
 * Use React 16.3+ createContext API.
 */

// NOTE(allen) - switch this back once we properly refactor Toasts to render
// them in the existing DOM tree flow, instead of mounting a new root
// outside of whatever app root an EG consumer is using.
const ThemeContext = React.createContext(classicTheme)
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext

export default ThemeContext
export { ThemeProvider, ThemeConsumer }
