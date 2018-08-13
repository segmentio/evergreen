import createStyles from './createStyles'
import * as defaultBase from './base'
import * as defaultHelpers from './helpers'

export default function createTheme(
  styleConfig = {},
  helpers = defaultHelpers,
  base = defaultBase
) {
  const styles = createStyles(styleConfig)

  const theme = {
    ...styles
  }

  for (const key in helpers) {
    if (Object.prototype.hasOwnProperty.call(helpers, key)) {
      styles[key] = helpers[key](styles, styleConfig)
    }
  }

  for (const key in base) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      theme[key] = base[key](styles)
    }
  }

  return theme
}
