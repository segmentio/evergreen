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

  return value || border
}

const baseStyle = (theme, props) => {
  const transitionStyles = {}
  if (
    theme.shadows[props.hoverElevation] ||
    theme.shadows[props.activeElevation]
  ) {
    Object.assign(transitionStyles, {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
    })
  }

  let hoverStyles
  if (theme.shadows[props.hoverElevation]) {
    hoverStyles = {
      transform: 'translateY(-2px)',
      boxShadow: `shadows.${props.hoverElevation}`
    }
  }

  let activeStyles
  if (theme.shadows[props.activeElevation]) {
    activeStyles = {
      transform: 'translateY(-1px)',
      boxShadow: `shadows.${props.activeElevation}`
    }
  }

  return {
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

    ...transitionStyles,
    _hover: hoverStyles,
    _active: activeStyles
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
