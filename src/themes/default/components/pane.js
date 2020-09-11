function borderProperty(theme, { value, border }) {
  if (Object.prototype.hasOwnProperty.call(theme.colors.border, value)) {
    return `1px solid ${theme.colors.border[value]}`
  }

  if (value === true) {
    return `1px solid ${theme.colors.border.default}`
  }

  if (value === false) {
    return null
  }

  if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
    return `1px solid ${theme.colors.border[border]}`
  }

  if (border === true) {
    return `1px solid ${theme.colors.border.default}`
  }

  return value
}

const baseStyle = (theme, props) => ({
  background: theme.colors[props.background] || props.background,
  boxShadow: theme.shadows[props.elevation],
  borderTop: borderProperty(theme, {
    border: props.border,
    value: props.borderTop
  }),
  borderRight: borderProperty(theme, {
    border: props.border,
    value: props.borderRight
  }),
  borderBottom: borderProperty(theme, {
    border: props.border,
    value: props.borderBottom
  }),
  borderLeft: borderProperty(theme, {
    border: props.border,
    value: props.borderLeft
  }),

  _hover: Number.isInteger(props.hoverElevation)
    ? {
        transform: 'translateY(-2px)',
        boxShadow: `shadows.${props.hoverElevation}`
      }
    : undefined,

  _active: Number.isInteger(props.activeElevation)
    ? {
        transform: 'translateY(-1px)',
        boxShadow: `shadows.${props.activeElevation}`
      }
    : undefined
})

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
