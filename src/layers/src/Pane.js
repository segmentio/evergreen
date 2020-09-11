import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import useStyleConfig from '../../hooks/use-style-config'

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active'
}

const internalStyles = {}

const Pane = memo(
  forwardRef(function Pane(props, ref) {
    const {
      activeElevation,

      // Pulled out of props because we'll get them from the style hook
      background,
      border,
      borderBottom,
      borderLeft,
      borderRight,
      borderTop,
      className,
      elevation,
      hoverElevation,

      ...restProps
    } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Pane',
      {
        elevation,
        hoverElevation,
        activeElevation,
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft
      },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        ref={ref}
        className={cx(className, themedClassName)}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

const StringAndBoolPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
])

Pane.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors` are available.
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
