import React from 'react'
import defaultTheme from './default-theme'

export interface Theme {
  colors: any
  badgeColors: any
  elevations: any
  palette: any
  scales: any
  getAlertProps: typeof defaultTheme.getAlertProps
  getAvatarInitialsFontSize: typeof defaultTheme.getAvatarInitialsFontSize
  getAvatarProps: typeof defaultTheme.getAvatarProps
  getBackground: typeof defaultTheme.getBackground
  getBadgeClassName: typeof defaultTheme.getBadgeClassName
  getBadgeProps: typeof defaultTheme.getBadgeProps
  getBorderRadiusForControlHeight: typeof defaultTheme.getBorderRadiusForControlHeight
  getButtonClassName: typeof defaultTheme.getButtonClassName
  getCodeProps: typeof defaultTheme.getCodeProps
  getElevation: typeof defaultTheme.getElevation
  getFontFamily: typeof defaultTheme.getFontFamily
  getHeadingStyle: typeof defaultTheme.getHeadingStyle
  getIconColor: typeof defaultTheme.getIconColor
  getIconForIntent: typeof defaultTheme.getIconForIntent
  getIconSizeForButton: typeof defaultTheme.getIconSizeForButton
  getIconSizeForIconButton: typeof defaultTheme.getIconSizeForIconButton
  getIconSizeForInput: typeof defaultTheme.getIconSizeForInput
  getIconSizeForSelect: typeof defaultTheme.getIconSizeForSelect
  getLinkClassName: typeof defaultTheme.getLinkClassName
  getParagraphStyle: typeof defaultTheme.getParagraphStyle
  getTagInputClassName: typeof defaultTheme.getTagInputClassName
  getTextColor: typeof defaultTheme.getTextColor
  getTextDropdownButtonClassName: typeof defaultTheme.getTextDropdownButtonClassName
  getTextInputClassName: typeof defaultTheme.getTextInputClassName
  getTextSizeForControlHeight: typeof defaultTheme.getTextSizeForControlHeight
  getTextStyle: typeof defaultTheme.getTextStyle
}

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer
} = React.createContext<Theme>(defaultTheme)

export { ThemeProvider, ThemeConsumer }
