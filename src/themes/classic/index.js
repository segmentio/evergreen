import components from './components'

import { palette, scales, tokens as ogTokens } from './deprecated/foundational-styles'

import tokens from './tokens'

export default {
  /* DEPRECATED */
  palette,
  scales,
  tokens: ogTokens,
  /* END DEPRECATED */

  // Once we are done using the above ^ we can switch to this:
  ...tokens,

  // Component-specific theming
  components
}
