import { Theme } from '../../types/theme/theme'
import components, { DefaultThemeAppearances, DefaultThemeSizes, DefaultThemePseudoSelectors } from './components'
import { tokens as ogTokens } from './deprecated/foundational-styles'
import tokens from './tokens'
import { DefaultThemeColors } from './tokens/colors'
import { DefaultThemeFills } from './tokens/fills'
import { DefaultThemeIntents } from './tokens/intents'

type DefaultTheme = typeof defaultTheme & Theme

const defaultTheme = {
  /**
   * @deprecated This field is deprecated and will be removed in a future version. Reference
   * the same tokens that are spread onto the root object instead.
   */
  tokens: ogTokens,
  /* END DEPRECATED */

  // Once we are done using the above ^ we can switch to this:
  ...tokens,

  // Component-specific theming
  components
}

export type {
  DefaultTheme,
  DefaultThemeAppearances,
  DefaultThemeColors,
  DefaultThemeFills,
  DefaultThemeIntents,
  DefaultThemePseudoSelectors,
  DefaultThemeSizes
}
export default defaultTheme
