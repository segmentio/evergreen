import createStyles from './createStyles'
// Enable this: import * as defaultBase from './component-specific/'

export default function createTheme(styleConfig = {}, base = {}) {
  const styles = createStyles(styleConfig)

  for (const key in base) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      base[key] = base[key](styles)
    }
  }

  return base
}
