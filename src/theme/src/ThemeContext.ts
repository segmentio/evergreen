import React from 'react'
import defaultTheme from './default-theme'

export interface Theme {
  colors: any
  badgeColors: any
  elevations: any
  palette: any
  scales: any
  getCodeProps: (appearance: 'default' | 'minimal') => any
  getFontFamily: (fontFamily?: string) => string
  getHeadingStyle: (size?: number) => any
  getLinkClassName: (color?: string) => string
  getParagraphStyle: (size?: number) => any
  getTextColor: (colorAlias?: string) => string
  getTextStyle: (size?: number) => any
  getTagInputClassName: (alias: 'default') => string
  getTextInputClassName: (alias: 'none') => string
  getTextSizeForControlHeight: (height: number) => number
  getBorderRadiusForControlHeight: (height: number) => number
}

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer
} = React.createContext<Theme>(defaultTheme)

export { ThemeProvider, ThemeConsumer }
