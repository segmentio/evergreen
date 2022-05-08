import { Components } from '../../themes'
import { ComponentStyle } from './component-style'

export type ComponentStyles<T extends Components = Components> = {
  [Component in T]: ComponentStyle
}
