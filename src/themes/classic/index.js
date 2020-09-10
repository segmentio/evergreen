import {
  colors,
  elevations,
  fills,
  palette,
  scales,
  tokens
} from './deprecated/foundational-styles'

import {
  headings,
  text,
  fontFamilies,
  paragraph
} from './deprecated/typography'

import {
  getRowClassName,
  getMenuItemClassName,
  checkbox,
  segmentedControl
} from './deprecated/component-specific'

// Import tokens from './tokens'
import components from './components'

export default {
  /* DEPRECATED */
  colors,
  elevations,
  fills,
  palette,
  scales,
  tokens,

  getRowClassName,
  getMenuItemClassName,

  // Component-specific
  checkbox,
  segmentedControl,

  typography: {
    headings,
    text,
    fontFamilies,
    paragraph
  },
  /* END DEPRECATED */

  // Once we are done using the above ^ we can switch to this:
  // ...tokens, (import tokens from './tokens')

  // Component-specific theming
  components
}
