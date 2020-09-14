import components from './components'
import {
  getRowClassName,
  getMenuItemClassName,
  segmentedControl
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
  segmentedControl,
  /* END DEPRECATED */

  // Once we are done using the above ^ we can switch to this:
  ...tokens,

  // Component-specific theming
  components
}
