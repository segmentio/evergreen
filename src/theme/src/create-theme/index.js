import createStyles from './createStyles'
// Enable this: import * as defaultBase from './component-specific/'

export default function createTheme(styleConfig = {}, base = {}) {
  const styles = createStyles(styleConfig)

  return Object.keys(base).map(key => base[key](styles))
}
