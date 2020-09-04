function getHoverElevationStyles(theme, hoverElevation) {
  if (!Number.isInteger(hoverElevation)) return {}

  return {
    transform: 'translateY(-2px)',
    boxShadow: theme.elevations[hoverElevation]
  }
}

function getActiveElevationStyles(theme, activeElevation) {
  if (!Number.isInteger(activeElevation)) return {}

  return {
    transform: 'translateY(-1px)',
    boxShadow: theme.elevations[activeElevation]
  }
}

function borderProperty(theme, { value, border }) {
  if (
    Object.prototype.hasOwnProperty.call(
      theme.colors.border,
      value
    )
  ) {
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

export default function getPaneStyles(theme, props) {
  return {
    baseStyle: {
      background: theme.colors.background[props.background] || props.background,
      boxShadow: theme.elevations[props.elevation],
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
      borderTop: borderProperty(theme, { border: props.border, value: props.borderTop }),
      borderRight: borderProperty(theme, { border: props.border, value: props.borderRight }),
      borderBottom: borderProperty(theme, { border: props.border, value: props.borderBottom }),
      borderLeft: borderProperty(theme, { border: props.border, value: props.borderLeft }),

      _hover: getHoverElevationStyles(theme, props.hoverElevation),
      _active: getActiveElevationStyles(theme, props.activeElevation)
    }
  }
}
