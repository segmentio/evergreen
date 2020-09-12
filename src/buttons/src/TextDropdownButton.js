import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { CaretDownIcon } from '../../icons'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Spinner } from '../../spinner'
import useTextDropdownButtonAppearance from '../../theme/src/hooks/useTextDropdownButtonApperance'
import { internalStyles as styles } from './Button'

const TextDropdownButton = memo(
  forwardRef(function TextDropdownButton(props, ref) {
    const {
      className,
      size = 'medium',
      isActive = false,
      children,
      disabled,
      appearance,
      isLoading,

      icon = CaretDownIcon,
      ...restProps
    } = props

    const {
      boxProps,
      className: themedClassName
    } = useTextDropdownButtonAppearance({ appearance: 'default', size }, styles)

    const { height } = boxProps

    return (
      <Box
        is="button"
        ref={ref}
        className={cx(themedClassName, className)}
        data-active={isActive || undefined}
        {...boxProps}
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
