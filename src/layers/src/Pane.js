import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

const StringAndBoolPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
])

const emptyObject = {}

const Pane = memo(
  forwardRef(function Pane(props, ref) {
    const {
      background,

      elevation,
      hoverElevation,
      activeElevation,

      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,

      css = emptyObject,
      ...restProps
    } = props
    const theme = useTheme()

    function getHoverElevationStyle(hoverElevation, css) {
      if (!Number.isInteger(hoverElevation)) return {}

      return {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
        ':hover': {
          ...(css[':hover'] || {}),
          transform: 'translateY(-2px)',
          boxShadow: theme.getElevation(hoverElevation)
        }
      }
    }

    function getActiveElevationStyle(activeElevation, css) {
      if (!Number.isInteger(activeElevation)) return {}

      return {
        ':active': {
          ...(css[':active'] || {}),
          transform: 'translateY(-1px)',
          boxShadow: theme.getElevation(activeElevation)
        }
      }
    }

    function getBorderSideProperty({ borderSideProperty, border }) {
      if (
        Object.prototype.hasOwnProperty.call(
          theme.colors.border,
          borderSideProperty
        )
      ) {
        return `1px solid ${theme.colors.border[borderSideProperty]}`
      }

      if (borderSideProperty === true) {
        return `1px solid ${theme.colors.border.default}`
      }

      if (borderSideProperty === false) {
        return null
      }

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
        return `1px solid ${theme.colors.border[border]}`
      }

      if (border === true) {
        return `1px solid ${theme.colors.border.default}`
      }

      return borderSideProperty
    }

    const elevationStyle = theme.getElevation(elevation)
    const hoverElevationStyle = getHoverElevationStyle(hoverElevation, css)
    const activeElevationStyle = getActiveElevationStyle(activeElevation, css)

    const [_borderTop, _borderRight, _borderBottom, _borderLeft] = [
      borderTop,
      borderRight,
      borderBottom,
      borderLeft
    ].map(borderSideProperty =>
      getBorderSideProperty({ borderSideProperty, border })
    )

    const className = cx(
      props.className,
      glamorCss({
        ...css,
        ...hoverElevationStyle,
        ...activeElevationStyle
      }).toString()
    )

    return (
      <Box
        ref={ref}
        borderTop={_borderTop}
        borderRight={_borderRight}
        borderBottom={_borderBottom}
        borderLeft={_borderLeft}
        boxShadow={elevationStyle}
        background={theme.getBackground(background)}
        {...restProps}
        className={className}
      />
    )
  })
)

Pane.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
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

export default Pane
