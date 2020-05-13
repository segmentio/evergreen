import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { CaretDownIcon } from '../../icons'
import { Text } from '../../typography'
import { Spinner } from '../../spinner'
import { useTheme } from '../../theme'

const TextDropdownButton = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const {
      className,
      intent,
      height,
      isActive,
      children,
      disabled,
      appearance,
      isLoading,

      // Paddings
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,

      // Icons
      icon,

      ...restProps
    } = props

    const themedClassName = theme.getTextDropdownButtonClassName()

    return (
      <Text
        is="button"
        ref={ref}
        className={themedClassName}
        paddingX={4}
        marginX={-4}
        paddingY={2}
        marginY={-2}
        size={300}
        data-active={isActive}
        {...TextDropdownButton.styles}
        {...restProps}
        disabled={disabled}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        {children}
        <IconWrapper icon={icon} marginLeft={2} color="default" size={12} />
      </Text>
    )
  })
)

TextDropdownButton.propTypes = {
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
   * An Evergreen icon or custom icon node. By default it uses <CaretDownIcon />
   */
  icon: PropTypes.node,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

TextDropdownButton.defaultProps = {
  isActive: false,
  icon: <CaretDownIcon />
}

TextDropdownButton.styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
}

export default TextDropdownButton
