import { Appearance } from './appearance'
import { Color } from './color'
import { IntentTypes } from './intent-types'
import { Size } from './size'

export interface StyleModifiers {
  appearance?: Appearance
  color?: Color
  intent?: IntentTypes
  size?: Size
}
