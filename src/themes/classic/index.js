import {
  palette,
  scales,
  tokens as ogTokens
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

import tokens from './tokens'
import components from './components'

export default {
  /* DEPRECATED */
  palette,
  scales,
  tokens: ogTokens,

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
  ...tokens,

  // Component-specific theming
  components
}
