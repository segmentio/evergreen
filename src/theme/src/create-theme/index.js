import createStyles from './createStyles'
import * as defaultBase from './base/'

export default function createTheme(styleConfig = {}, base = defaultBase) {
  const styles = createStyles(styleConfig)

  for (const key in base) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      base[key] = base[key](styles)
    }
  }

  return base
}
