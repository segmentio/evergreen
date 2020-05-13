import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { useTheme } from '../../theme'
import Button from './Button'

const IconButton = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const { icon, iconSize, height, intent, ...restProps } = props

    let iconWithProps
    if (icon && React.isValidElement(icon)) {
      iconWithProps = React.cloneElement(icon, {
        color: intent === 'none' ? 'default' : 'currentColor',
        size: iconSize || theme.getIconSizeForIconButton(height),
        ...icon.props
      })
    }

    return (
      <Button
        ref={ref}
        intent={intent}
        height={height}
        width={height}
        paddingLeft={0}
        paddingRight={0}
        display="flex"
        justifyContent="center"
        {...restProps}
      >
        {iconWithProps}
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
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.node,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

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

IconButton.defaultProps = {
  intent: 'none',
  appearance: 'default',
  height: 32
}

export default IconButton
