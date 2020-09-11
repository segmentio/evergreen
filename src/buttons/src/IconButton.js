import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import useStyleConfig from '../../hooks/use-style-config'
import Button, {
  getIconSizeForButton,
  internalStyles,
  pseudoSelectors
} from './Button'

const IconButton = memo(
  forwardRef(function IconButton(props, ref) {
    const {
      icon,
      iconSize,
      size = 'medium',
      intent,
      appearance,
      ...restProps
    } = props

    // Composes the exact same styles as button
    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Button',
      { appearance, intent, size },
      pseudoSelectors,
      internalStyles
    )

    const relativeIconSize = getIconSizeForButton(
      restProps.height || boxProps.height
    )

    return (
      <Button
        ref={ref}
        paddingLeft={0}
        paddingRight={0}
        flex="none"
        size={size}
        {...restProps}
      >
        <IconWrapper
          icon={icon}
          color="currentColor"
          size={iconSize || relativeIconSize}
        />
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
