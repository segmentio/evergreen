import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':-moz-focusring': {
    color: 'transparent',
    textShadow: '0 0 0 #000'
  }
}

const disabledState = '[disabled]'
const invalidState = '&[aria-invalid]'
const hoverState = '&:not([disabled]):hover'
const focusState = '&:not([disabled]):focus'
const activeState = '&:not([disabled]):active'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createSelectAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'disabled', 'invalid', 'hover', 'active', 'focus'],
    cb: prop => {
      console.error(
        `Themer.createSelectAppearance() is missing a ${prop} item `,
        items
      )
    }
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [disabledState]: {
      cursor: 'not-allowed',
      ...createAppearance(items.disabled)
    },
    [invalidState]: createAppearance(items.invalid),
    [hoverState]: createAppearance(items.hover),
    [focusState]: createAppearance(items.focus),
    [activeState]: createAppearance(items.active)
  }
}

export default createSelectAppearance
