import { Appearance } from './appearance'
import { Size } from './size'
import { StyleProps } from './style-props'
import { ThemeCallback } from './theme-callback'

export type ComponentStyle = {
  baseStyle?: StyleProps | ThemeCallback
  appearances?: { [appearance: Appearance]: StyleProps | ThemeCallback }
  sizes?: { [size: Size]: StyleProps | ThemeCallback }
}
