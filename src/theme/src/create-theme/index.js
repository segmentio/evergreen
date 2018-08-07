import createStyles from './createStyles'
import * as defaultBase from './base/'

export default function createTheme(styleConfig = {}, base = defaultBase) {
  const styles = createStyles(styleConfig)

  return Object.keys(base).map(key => base[key](styles))
}
