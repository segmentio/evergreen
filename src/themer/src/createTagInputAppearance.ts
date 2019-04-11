import { StackingOrder } from '../../constants'
import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface Items {
  base?: any
  focus?: any
  disabled?: any
  invalid?: any
}

const baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
}

const focusState = '&[aria-activedescendant]'
const disabledState = '&[aria-disabled="true"]'

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createTagInputAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'focus', 'disabled'],
    cb: logMissingState('createTagInputAppearance', items)
  })

  return {
    ...baseStyle,
    ...createAppearance(items.base),
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

export default createTagInputAppearance
