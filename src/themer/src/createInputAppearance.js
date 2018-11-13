import { StackingOrder } from '../../constants'
import missingStateWarning from './missingStateWarning'
import createAppearance from './createAppearance'

const baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none'
}

const invalidState = '&[aria-invalid="true"]'
const placeholder = '&::placeholder'
const focusState = '&:focus'
const disabledState = '&:disabled'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createInputAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: prop => {
      console.error(
        `Themer.createInputAppearance() is missing a ${prop} item `,
        items
      )
    }
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
    [invalidState]: createAppearance(items.invalid),
    [placeholder]: createAppearance(items.placeholder),
    [focusState]: {
      zIndex: StackingOrder.FOCUSED,
      ...createAppearance(items.focus)
    },
    [disabledState]: {
      cursor: 'not-allowed',
      ...createAppearance(items.disabled)
    }
  }
}

export default createInputAppearance
