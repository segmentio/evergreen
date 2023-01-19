import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Spinner } from '../../spinner'
import { internalStyles, pseudoSelectors } from './Button'

const TextDropdownButton = memo(
  forwardRef(function TextDropdownButton(props, ref) {
    const {
      appearance,
      children,
      className,
      disabled,
      icon = CaretDownIcon,
      is = 'button',
      isActive = false,
      isLoading,
      size = 'medium',
      ...restProps
    } = props

    const themedProps = useStyleConfig('TextDropdownButton', { size }, pseudoSelectors, internalStyles)

    return (
      <Box
        is={is}
        ref={ref}
        type={is === 'button' ? 'button' : undefined}
        className={className}
        data-active={isActive || undefined}
        {...themedProps}
        {...restProps}
        disabled={disabled || isLoading}
      >
        {isLoading && <Spinner marginLeft={-2} marginRight={4} size={12} />}
        {children}
        <IconWrapper icon={icon} marginLeft={2} color="default" size={12} />
      </Box>
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
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default TextDropdownButton
