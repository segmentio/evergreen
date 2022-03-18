import { Appearance } from './appearance'
import { Size } from './size'
import { StyleProps } from './style-props'

export type ComponentStyle = {
  baseStyle?: StyleProps
  appearances?: { [appearance: Appearance]: StyleProps }
  sizes?: { [size: Size]: StyleProps }
}
