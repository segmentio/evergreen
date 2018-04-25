const theme = {}

/**
 * General.
 */
theme.elevation = {}

/**
 * Components.
 */
theme.Layer = {
  appearance: {},
  elevation: []
}

const Themer = {}
const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const disabledState = `[disabled], [data-disabled]`
const hoverState = '&:not([disabled]):not([data-disabled]):hover'
const focusState = '&:not([disabled]):not([data-disabled]):focus'
const activeState =
  '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[aria-expanded="true"], &:not([disabled]):not([data-disabled])[data-active]'

const hasOwnProperty = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop)

Themer.createButtonAppearance = states => {
  if (isDev) {
    if (!hasOwnProperty(states, 'default')) {
      console.error(
        'Themer.createButtonAppearance() is missing a default state',
        states
      )
    }
    if (!hasOwnProperty(states, 'hover')) {
      console.error(
        'Themer.createButtonAppearance() is missing a hover state',
        states
      )
    }
    if (!hasOwnProperty(states, 'focus')) {
      console.error(
        'Themer.createButtonAppearance() is missing a focus state',
        states
      )
    }
    if (!hasOwnProperty(states, 'active')) {
      console.error(
        'Themer.createButtonAppearance() is missing a active state',
        states
      )
    }
  }

  return {
    ...baseStyle,
    ...(states.default || {}),
    [disabledState]: states.disabled || {},
    [hoverState]: states.hover || {},
    [focusState]: states.focus || {},
    [activeState]: states.active || {}
  }
}

theme.Button = {
  appearances: {
    green: Themer.createButtonAppearance({
      default: {},
      hover: {},
      focus: {},
      active: {}
    }),
    blue: Themer.createButtonAppearance({
      default: {},
      hover: {},
      focus: {},
      active: {}
    })
  }
}

theme.Link = {
  appearances: {}
}
theme.Input = {}
theme.Tab = {}
theme.TableRow = {}
