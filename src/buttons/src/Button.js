import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Spinner } from '../../spinner'
import useButtonAppearance from '../../theme/src/hooks/useButtonAppearance'

/* eslint-disable-next-line react/prop-types */
const ButtonIcon = memo(function ButtonIcon({ icon, size, spacing, edge }) {
  if (!icon) return null

  const relativeSpace = typeof spacing === 'number' ? spacing : size
  const edgeMargin = -Math.round(relativeSpace * 0.25)
  const innerMargin = Math.round(size * 0.7)
  const marginLeft = edge === 'start' ? edgeMargin : innerMargin
  const marginRight = edge === 'end' ? edgeMargin : innerMargin

  return (
    <IconWrapper
      icon={icon}
      size={size}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
})

export const internalStyles = {
  position: 'relative',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  outline: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap'
}

const getIconSizeForButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const Button = memo(
  forwardRef(function Button(props, ref) {
    const {
      appearance = 'default',
      children,
      className,
      disabled,
      iconAfter,
      iconBefore,
      intent, // Unused for now... tbd
      is = 'button',
      isActive = false,
      isLoading,
      size = 'medium',
      ...restProps
    } = props

    const { className: themedClassName, boxProps } = useButtonAppearance(
      { appearance, size },
      internalStyles
    )

    const height = restProps.height || boxProps.height
    const iconSize = getIconSizeForButton(height)

    return (
      <Box
        is={is}
        ref={ref}
        type={is === 'button' ? 'button' : undefined}
        className={cx(themedClassName, className)}
        data-active={isActive || undefined}
        {...boxProps}
        {...restProps}
        disabled={disabled || isLoading}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        <ButtonIcon
          icon={iconBefore}
          size={iconSize}
          spacing={restProps.paddingLeft}
          edge="start"
        />
        {children}
        <ButtonIcon
          icon={iconAfter}
          size={iconSize}
          spacing={restProps.paddingRight}
          edge="end"
        />
      </Box>
    )
  })
)

Button.propTypes = {
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
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

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

export default Button
