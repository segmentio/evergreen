import colors from './colors'
import fills from './fills'
import intents from './intents'
import radii from './radii'
import shadows from './shadows'
import sizes from './sizes'
import space from './space'
import typography from './typography'
import zIndices from './z-indices'

const tokens = {
  colors,
  fills,
  intents,
  radii,
  shadows,
  sizes,
  space,
  ...typography,
  zIndices
}

export default tokens
