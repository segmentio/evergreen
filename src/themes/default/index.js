import components from './components'
import {
  getRowClassName,
  getMenuItemClassName
} from './deprecated/component-specific'
import {
  palette,
  scales,
  tokens as ogTokens
} from './deprecated/foundational-styles'

import tokens from './tokens'

export default {
  /* DEPRECATED */
  palette,
  scales,
  tokens: ogTokens,
  getRowClassName,
  getMenuItemClassName,
  /* END DEPRECATED */

  // Once we are done using the above ^ we can switch to this:
  ...tokens,

  // Component-specific theming
  components
}
