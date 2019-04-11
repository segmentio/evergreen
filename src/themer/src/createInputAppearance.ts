import { StackingOrder } from '../../constants'
import missingStateWarning, { logMissingState } from './missingStateWarning'
import createAppearance from './createAppearance'

interface Items {
  base?: any
  focus?: any
  invalid?: any
  placeholder?: any
  disabled?: any
}

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
const createInputAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: logMissingState('createInputAppearance', items)
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
