import { autoHydrate } from './ssr'

autoHydrate()

export { StackingOrder, Intent, Position } from './constants'
export { extractStyles } from './ssr'
export { ThemeProvider, ThemeConsumer, withTheme, defaultTheme } from './theme'
