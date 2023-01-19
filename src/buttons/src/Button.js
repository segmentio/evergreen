import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import { Spinner } from '../../spinner'

/* eslint-disable react/prop-types */
const ButtonIcon = memo(function ButtonIcon({ edge, icon, size, spacing }) {
  if (!icon) return null

  const relativeSpace = typeof spacing === 'number' ? spacing : size
  const edgeMargin = -Math.round(relativeSpace * 0.25)
  const innerMargin = Math.round(size * 0.7)
  const marginLeft = edge === 'start' ? edgeMargin : innerMargin
  const marginRight = edge === 'end' ? edgeMargin : innerMargin

  return <IconWrapper icon={icon} size={size} marginLeft={marginLeft} marginRight={marginRight} />
})
/* eslint-enable react/prop-types */

export const internalStyles = {
  position: 'relative',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  border: 'none',
  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none'
}

export const pseudoSelectors = {
  _active: '&:not([disabled]):active,&:not([disabled])[aria-expanded="true"],&:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive:
    '&:not([disabled]):focus:active,&:not([disabled])[aria-expanded="true"]:focus,&:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover'
}

export const getIconSizeForButton = height => {
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
      color,
      disabled,
      iconAfter,
      iconBefore,
      intent = 'none',
      is = 'button',
      isActive = false,
      isLoading,
      ...restProps
    } = props

    const themedProps = useStyleConfig(
      'Button',
      { appearance, color, intent, size: restProps.size || 'medium' },
      pseudoSelectors,
      internalStyles
    )

    const height = restProps.height || themedProps.height
    // Keep backwards compat font sizing if an explicit height was passed in.
    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}
    const iconSize = getIconSizeForButton(height)

    return (
      <Box
        is={is}
        ref={ref}
        className={className}
        data-active={isActive || undefined}
        {...themedProps}
        {...restProps}
        {...textProps}
        disabled={disabled || isLoading}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        <ButtonIcon icon={iconBefore} size={iconSize} spacing={restProps.paddingLeft} edge="start" />
        {children}
        <ButtonIcon icon={iconAfter} size={iconSize} spacing={restProps.paddingRight} edge="end" />
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
   * The intent of the button.
   */
  intent: PropTypes.string,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.string,

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
   * Useful in conjunction with a Popover.
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
