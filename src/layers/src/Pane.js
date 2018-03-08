import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import ElevationStyles from './styles/elevation-styles'
import BorderColors from './styles/border-colors'
import LayerAppearances from './styles/layer-appearances'

const ElevationPropType = PropTypes.oneOf(
  ElevationStyles.map((_, index) => index)
)

const StringAndBoolPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
])

export default class Pane extends PureComponent {
  static propTypes = {
    /**
     * Composes the Box component as the base.
     */
    ...Box.propTypes,

    /**
     * The appearance of the Pane.
     * Values: tint1, tint2, tint3, selected, dark.
     */
    appearance: PropTypes.oneOf(Object.keys(LayerAppearances)),

    /**
     * Elevation of the Pane.
     * Values: 0, 1, 2, 3, 4.
     */
    elevation: ElevationPropType,

    /**
     * Elevation of the Pane on hover. Might get deprecated.
     * Values: 0, 1, 2, 3, 4.
     */
    hoverElevation: ElevationPropType,

    /**
     * Elevation of the Pane on click. Might get deprecated.
     * Values: 0, 1, 2, 3, 4.
     */
    activeElevation: ElevationPropType,

    /**
     * Can be a explicit border value or a boolean.
     * Values: true, extraMuted, muted, default.
     */
    border: StringAndBoolPropType,

    /**
     * Can be a explicit border value or a boolean.
     * Values: true, extraMuted, muted, default.
     */
    borderTop: StringAndBoolPropType,

    /**
     * Can be a explicit border value or a boolean.
     * Values: true, extraMuted, muted, default.
     */
    borderRight: StringAndBoolPropType,

    /**
     * Can be a explicit border value or a boolean.
     * Values: true, extraMuted, muted, default.
     */
    borderBottom: StringAndBoolPropType,

    /**
     * Can be a explicit border value or a boolean.
     * Values: true, extraMuted, muted, default.
     */
    borderLeft: StringAndBoolPropType
  }

  render() {
    const {
      appearance,

      elevation,
      hoverElevation,
      activeElevation,

      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,

      css = {},
      ...props
    } = this.props

    let appearanceStyle = {}
    if (Object.prototype.hasOwnProperty.call(LayerAppearances, appearance)) {
      appearanceStyle = LayerAppearances[appearance]
    }

    let elevationStyle
    if (Number.isInteger(elevation)) {
      elevationStyle = ElevationStyles[elevation]
    }

    let hoverElevationStyle = {}
    if (Number.isInteger(hoverElevation)) {
      hoverElevationStyle = {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
        ':hover': {
          ...(css[':hover'] || {}),
          transform: 'translateY(-2px)',
          boxShadow: ElevationStyles[hoverElevation]
        }
      }
    }

    let activeElevationStyle = {}
    if (Number.isInteger(activeElevation)) {
      activeElevationStyle = {
        ':active': {
          ...(css[':active'] || {}),
          transform: 'translateY(-1px)',
          boxShadow: ElevationStyles[activeElevation]
        }
      }
    }

    const [_borderTop, _borderRight, _borderBottom, _borderLeft] = [
      borderTop,
      borderRight,
      borderBottom,
      borderLeft
    ].map(borderSideProperty => {
      if (
        Object.prototype.hasOwnProperty.call(BorderColors, borderSideProperty)
      ) {
        return `1px solid ${BorderColors[borderSideProperty]}`
      } else if (borderSideProperty === true) {
        // Use default, which is now muted, border color when explicitly a true boolean
        return `1px solid ${BorderColors.muted}`
      } else if (Object.prototype.hasOwnProperty.call(BorderColors, border)) {
        return `1px solid ${BorderColors[border]}`
      } else if (border === true) {
        return `1px solid ${BorderColors.muted}`
      }

      return borderSideProperty
    })

    return (
      <Box
        borderTop={_borderTop}
        borderRight={_borderRight}
        borderBottom={_borderBottom}
        borderLeft={_borderLeft}
        boxShadow={elevationStyle}
        {...appearanceStyle}
        css={{
          ...css,
          ...hoverElevationStyle,
          ...activeElevationStyle
        }}
        {...props}
      />
    )
  }
}
