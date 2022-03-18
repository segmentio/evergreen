import { ComponentStyle } from './component-style'
import { Components } from './components'

export type ComponentStyles<T extends Components = Components> = {
  [Component in T]: ComponentStyle
}
