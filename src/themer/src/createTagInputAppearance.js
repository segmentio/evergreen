import { StackingOrder } from '../../constants'
import missingStateWarning from './missingStateWarning'
import createAppearance from './createAppearance'

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
const createTagInputAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: ['base', 'focus', 'disabled'],
    cb: prop => {
      console.error(
        `Themer.createTagInputAppearance() is missing a ${prop} item `,
        items
      )
    }
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
