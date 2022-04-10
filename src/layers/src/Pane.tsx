import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

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

      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Pane',
      {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ elevation: never; hoverElevati... Remove this comment to see the full error message
        elevation,
        hoverElevation,
        activeElevation,
        background,
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft
      },
      pseudoSelectors,
      internalStyles
    )

    return <Box ref={ref} className={cx(className, themedClassName)} {...styleProps} {...restProps} />
  })
)

const StringAndBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool])

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Pane.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
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
