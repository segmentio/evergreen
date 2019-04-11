import createAppearance from './createAppearance'
import missingStateWarning, { logMissingState } from './missingStateWarning'

interface Items {
  base?: any
  disabled?: any
  hover?: any
  active?: any
  focus?: any
  checked?: any
  checkedActive?: any
  checkedHover?: any
  checkedDisabled?: any
}

const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div'
const checkedHoverState = '&:checked:hover + div'
const checkedActiveState = '&:not([disabled]):checked:active + div'
const checkedDisabledState = '&[disabled]:checked + div'

const hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
}

/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */
const createSwitchAppearance = (items: Items = {}) => {
  missingStateWarning({
    items,
    props: [
      'base',
      'disabled',
      'hover',
      'active',
      'focus',
      'checked',
      'checkedActive',
      'checkedHover',
      'checkedDisabled'
    ],
    cb: logMissingState('createSwitchAppearance', items)
  })

  return {
    ...hiddenCheckboxStyle,
    '& + div > svg': { display: 'none' },
    '& + div': { cursor: 'pointer', ...createAppearance(items.base) },
    [disabledState]: {
      cursor: 'not-allowed',
      ...createAppearance(items.disabled)
    },
    [hoverState]: createAppearance(items.hover),
    [focusState]: createAppearance(items.focus),
    [activeState]: createAppearance(items.active),
    [checkedState]: {
      ...createAppearance(items.checked),
      '& > svg': { display: 'block' }
    },
    [checkedHoverState]: {
      ...createAppearance(items.checkedHover),
      '& > svg': { display: 'block' }
    },
    [checkedActiveState]: {
      ...createAppearance(items.checkedActive),
      '& > svg': { display: 'block' }
    },
    [checkedDisabledState]: {
      ...createAppearance(items.checkedDisabled),
      '& > svg': { display: 'block' }
    }
  }
}

export default createSwitchAppearance
