import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import Button from './Button'

const IconButton = memo(
  forwardRef(function IconButton(props, ref) {
    const { icon, iconSize, ...restProps } = props

    return (
      <Button
        ref={ref}
        paddingLeft={0}
        paddingRight={0}
        flex="none"
        {...restProps}
      >
        <IconWrapper icon={icon} color="currentColor" size={iconSize} />
      </Button>
    )
  })
)

IconButton.propTypes = {
  /**
   * Composes the dimensions spec from the Box primitive.
   */
  ...dimensions.propTypes,

  /**
   * Composes the spacing spec from the Box primitive.
   */
  ...spacing.propTypes,

  /**
   * Composes the position spec from the Box primitive.
   */
  ...position.propTypes,

  /**
   * Composes the layout spec from the Box primitive.
   */
  ...layout.propTypes,

  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default IconButton
