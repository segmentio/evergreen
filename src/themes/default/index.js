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
  getMenuItemClassName
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
