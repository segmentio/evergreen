import { Theme } from '../../types'
import components, {
  Components,
  DefaultThemeAppearances,
  DefaultThemeSizes,
  DefaultThemePseudoSelectors,
} from './components'
import { tokens as ogTokens } from './deprecated/foundational-styles'
import tokens from './tokens'
import { DefaultThemeColor, DefaultThemeColors } from './tokens/colors'
import { DefaultThemeFills } from './tokens/fills'
import { DefaultThemeIntent, DefaultThemeIntents } from './tokens/intents'
import {
  DefaultThemeFontFamilies,
  DefaultThemeFontSizes,
  DefaultThemeFontWeights,
  DefaultThemeLetterSpacings,
  DefaultThemeLineHeights,
} from './tokens/typography'

interface DefaultTheme extends Theme {
  /**
   * @deprecated This field is deprecated and will be removed in a future version. Reference
   * the same tokens that are spread onto the root object instead.
   */
  tokens: unknown
  colors: DefaultThemeColors
  fills: DefaultThemeFills
  intents: DefaultThemeIntents
  fontSizes: DefaultThemeFontSizes
  fontWeights: DefaultThemeFontWeights
  letterSpacings: DefaultThemeLetterSpacings
  lineHeights: DefaultThemeLineHeights
  components: typeof components
}

const defaultTheme: DefaultTheme = {
  tokens: ogTokens,

  // Once we are done using the above ^ we can switch to this:
  ...tokens,

  // Component-specific theming
  components,
}

export type {
  Components,
  DefaultTheme,
  DefaultThemeAppearances,
  DefaultThemeColors,
  DefaultThemeColor,
  DefaultThemeFills,
  DefaultThemeIntents,
  DefaultThemeIntent,
  DefaultThemePseudoSelectors,
  DefaultThemeSizes,
  DefaultThemeFontWeights,
  DefaultThemeFontSizes,
  DefaultThemeFontFamilies,
  DefaultThemeLetterSpacings,
  DefaultThemeLineHeights,
}
export default defaultTheme
