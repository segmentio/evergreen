import createAppearance from './createAppearance'
import missingStateWarning from './missingStateWarning'

const defaultState = '& + div'
const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div, &[type=checkbox]:indeterminate + div'
const checkedHoverState =
  '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div'
const checkedActiveState =
  '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div'
const checkedDisabledState =
  '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div'

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

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const checkedStyles = {
  '& > svg': {
    display: 'block'
  }
}

/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */
const createCheckboxAppearance = (items = {}) => {
  missingStateWarning({
    items,
    props: [
      'base',
      'hover',
      'focus',
      'active',
      'disabled',
      'checked',
      'checkedDisabled',
      'checkedHover',
      'checkedActive'
    ],
    cb: prop => {
      console.error(
        `Themer.createCheckboxAppearance() is missing a ${prop} state in items: `,
        items
      )
    }
  })

  return {
    ...hiddenCheckboxStyle,
    '& + div > svg': { display: 'none' },
    [defaultState]: { ...baseStyle, ...createAppearance(items.base) },
    [hoverState]: createAppearance(items.hover),
    [focusState]: createAppearance(items.focus),
    [activeState]: createAppearance(items.active),
    [disabledState]: createAppearance(items.disabled),
    [checkedState]: { ...checkedStyles, ...createAppearance(items.checked) },
    [checkedHoverState]: {
      ...checkedStyles,
      ...createAppearance(items.checkedHover)
    },
    [checkedDisabledState]: {
      ...checkedStyles,
      ...createAppearance(items.checkedDisabled)
    },
    [checkedActiveState]: {
      ...checkedStyles,
      ...createAppearance(items.checkedActive)
    }
  }
}

export default createCheckboxAppearance
