import React from 'react'
import defaultTheme, { DefaultTheme } from '../../themes/default'
import { Theme } from '../../types/theme/theme'

/**
 * Use React 16.3+ createContext API.
 */
const ThemeContext = React.createContext(defaultTheme)
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext

/**
 * Returns a typed version of the ThemeContext when using a custom theme
 */
const getThemeContext = <T extends Theme = DefaultTheme>() => ThemeContext as any as React.Context<T>

export default ThemeContext
export { getThemeContext, ThemeProvider, ThemeConsumer }
