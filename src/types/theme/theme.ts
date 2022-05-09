import { Components } from '../../themes'
import { Color } from './color'
import { ComponentStyles } from './component-styles'
import { Fill } from './fill'
import { FontFamilies } from './font-families'
import { FontWeights } from './font-weights'
import { IntentColors } from './intent-colors'
import { LetterSpacings } from './letter-spacings'
import { ZIndices } from './z-indices'

export interface Theme<TComponents extends Components = Components> {
  colors: { [color: string]: Color<string | { [group: string]: Color }> }
  fills: { [fill: string]: Fill }
  intents: { [intent: string]: IntentColors }
  fontFamilies: FontFamilies
  radii: string[]
  shadows: string[] & { focusRing: string }
  fontSizes: string[]
  fontWeights: FontWeights
  letterSpacings: LetterSpacings
  lineHeights: string[]
  zIndices: ZIndices
  components: Partial<ComponentStyles<TComponents>>
}
