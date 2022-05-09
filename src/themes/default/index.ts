import { Theme } from '../../types'
import components, {
  Components,
  DefaultThemeAppearances,
  DefaultThemeSizes,
  DefaultThemePseudoSelectors,
} from './components'
import { tokens as ogTokens } from './deprecated/foundational-styles'
import tokens from './tokens'
import { DefaultThemeColors } from './tokens/colors'
import { DefaultThemeFills } from './tokens/fills'
import { DefaultThemeIntents } from './tokens/intents'
import {
  DefaultThemeFontFamilies,
  DefaultThemeFontSizes,
  DefaultThemeFontWeights,
  DefaultThemeLetterSpacings,
  DefaultThemeLineHeights,
} from './tokens/typography'

interface DefaultTheme extends Theme {
  colors: DefaultThemeColors
  fills: DefaultThemeFills
  intents: DefaultThemeIntents
  fontSizes: DefaultThemeFontSizes
  fontWeights: DefaultThemeFontWeights
  letterSpacings: DefaultThemeLetterSpacings
  lineHeights: DefaultThemeLineHeights
}

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
  components,
} as any as DefaultTheme

export type {
  Components,
  DefaultTheme,
  DefaultThemeAppearances,
  DefaultThemeColors,
  DefaultThemeFills,
  DefaultThemeIntents,
  DefaultThemePseudoSelectors,
  DefaultThemeSizes,
  DefaultThemeFontWeights,
  DefaultThemeFontSizes,
  DefaultThemeFontFamilies,
  DefaultThemeLetterSpacings,
  DefaultThemeLineHeights,
}
export default defaultTheme
