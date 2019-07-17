import React from 'react'
import defaultTheme from './default-theme'

export interface Theme {
  colors: any
  badgeColors: any
  elevations: any
  palette: any
  scales: any
  getAlertProps: (props: {
    appearance: 'default' | 'card' | undefined
    intent: 'none' | 'success' | 'warning' | 'danger' | undefined
    hasTrim: boolean | undefined
  }) =>
    | {
        className: string
        elevation: number
        borderRadius: number
      }
    | {
        className: string
        boxShadow: string
      }
  getAvatarInitialsFontSize: (
    size: number,
    sizeLimitOneCharacter: number
  ) => number
  getAvatarProps: (props: {
    isSolid?: boolean
    color: string
    hashValue?: number
  }) => {
    color: string
    backgroundColor: string
  }
  getBorderRadiusForControlHeight: (height: number) => number
  getButtonClassName: (appearance: string, intent: string) => string
  getCodeProps: (appearance: 'default' | 'minimal') => any
  getFontFamily: (fontFamily?: string) => string
  getHeadingStyle: (size?: number) => any
  getIconForIntent: (
    intent?: 'none' | 'success' | 'warning' | 'danger'
  ) => {
    icon: string
    color: string
  }
  getIconSizeForButton: (height: number) => number
  getIconSizeForIconButton: (height: number) => number
  getLinkClassName: (color?: string) => string
  getParagraphStyle: (size?: number) => any
  getTagInputClassName: (alias: 'default') => string
  getTextareaClassName: typeof defaultTheme.getTextareaClassName
  getTextColor: (colorAlias?: string) => string
  getTextDropdownButtonClassName: () => string
  getTextInputClassName: (alias: 'none') => string
  getTextSizeForControlHeight: (height: number) => number
  getTextStyle: (size?: number) => any
}

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer
} = React.createContext<Theme>(defaultTheme)

export { ThemeProvider, ThemeConsumer }
