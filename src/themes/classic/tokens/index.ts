import colors from './colors'
import fills from './fills'
import intents from './intents'
import radii from './radii'
import shadows from './shadows'
import typography from './typography'
import zIndices from './z-indices'

const tokens = {
  colors,
  fills,
  intents,
  radii,
  shadows,
  ...typography,
  zIndices
}

export default tokens
