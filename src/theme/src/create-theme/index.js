import createStyles from './createStyles'
import * as defaultBase from './base/'

export default function createTheme(styleConfig = {}, base = defaultBase) {
  const styles = createStyles(styleConfig)

  const theme = {}

  for (const key in base) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      theme[key] = base[key](styles)
    }
  }

  return theme
}
