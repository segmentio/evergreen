import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'
import textDropdownColors from './textDropdownColors'

const getDefaultAppearance = theme => {
  const focusShadow =
    theme?.textDropdownColors?.default?.focus?.shadowColor ||
    textDropdownColors.default.focus.shadowColor

  return Themer.createTextDropdownButtonAppearance({
    base: {
      borderRadius: 3
    },
    hover: {},
    focus: {
      boxShadow: `0 0 0 3px ${focusShadow}`
    },
    active: {},
    disabled: {
      opacity: 0.5
    }
  })
}

/**
 * Get the appearance of a `TextDropdownButton`.
 * @param {object} theme the current theme object
 */
const getTextDropdownButtonAppearance = theme => {
  return getDefaultAppearance(theme)
}

/**
 * Get the className of a `TextDropdownButton`.
 */
export default memoizeClassName(getTextDropdownButtonAppearance)
