import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import usePaneAppearance from '../../theme/src/hooks/usePaneAppearance'

const StringAndBoolPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
])

const Pane = memo(
  forwardRef(function Pane(props, ref) {
    const {
      className,

      // Pulled out of props because we'll get them from the style hook
      background,
      elevation,
      hoverElevation,
      activeElevation,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,

      ...restProps
    } = props

    const { className: themedClassName, boxProps } = usePaneAppearance(props)

    return (
      <Box
        ref={ref}
        className={cx(className, themedClassName)}
        {...boxProps}
        {...restProps}
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
