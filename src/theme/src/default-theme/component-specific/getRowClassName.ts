import * as tinycolor from 'tinycolor2'

import { IntentType } from '../../../../constants'
import { Themer } from '../../../../themer'
import scales from '../foundational-styles/scales'
import palette from '../foundational-styles/palette'
import memoizeClassName from '../utils/memoizeClassName'

const defaultAppearance = Themer.createRowAppearance({
  base: {},

  hover: {
    backgroundColor: scales.neutral.N1A
  },

  focus: {
    backgroundColor: scales.blue.B1A
  },

  active: {
    backgroundColor: scales.blue.B2A
  },

  current: {}
})

const danger = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.red.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(1.5)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.red.lightest)
      .darken(2.2)
      .toString()
  },

  current: {}
})

const warning = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.orange.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(1.5)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.orange.lightest)
      .darken(2.5)
      .toString()
  },

  current: {}
})

const success = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.green.lightest
  },

  hover: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(1)
      .toString()
  },

  focus: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(2)
      .toString()
  },

  active: {
    backgroundColor: tinycolor(palette.green.lightest)
      .darken(3)
      .toString()
  },

  current: {}
})

/**
 * Get the appearance of a `Row`.
 * @param {string} appearance — only one default appearance.
 * @param {string} intent - none, info, success, warning, danger.
 * @return {string} the appearance object.
 */
const getRowAppearance = (appearance: string, intent: IntentType) => {
  switch (intent) {
    case 'danger':
      return danger
    case 'warning':
      return warning
    case 'success':
      return success
    case 'none':
    default:
      return defaultAppearance
  }
}

/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getRowAppearance)
