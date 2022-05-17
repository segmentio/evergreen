import { StyleModifiers } from './style-modifiers'
import { StyleProps } from './style-props'
import { Theme } from './theme'

export type ThemeCallback<TStyle = StyleProps, T extends Theme = Theme> = (
  theme: T,
  styleModifiers: StyleModifiers
) => TStyle
