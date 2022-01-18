import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import { Spinner } from '../../spinner'

/* eslint-disable react/prop-types */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'edge' does not exist on type '{ children... Remove this comment to see the full error message
const ButtonIcon = memo(function ButtonIcon({ edge, icon, size, spacing }) {
  if (!icon) return null

  const relativeSpace = typeof spacing === 'number' ? spacing : size
  const edgeMargin = -Math.round(relativeSpace * 0.25)
  const innerMargin = Math.round(size * 0.7)
  const marginLeft = edge === 'start' ? edgeMargin : innerMargin
  const marginRight = edge === 'end' ? edgeMargin : innerMargin

  // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
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
  MozAppearance: 'none',
  '&::-moz-focus-inner ': {
    border: 0
  }
}

export const pseudoSelectors = {
  _active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive:
    '&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover'
}

export const getIconSizeForButton = (height: any) => {
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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Button',
      { appearance, color, intent, size: restProps.size || 'medium' },
      pseudoSelectors,
      internalStyles
    )

    const height = restProps.height || boxProps.height
    // Keep backwards compat font sizing if an explicit height was passed in.
    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}
    const iconSize = getIconSizeForButton(height)

    return (
      <Box
        is={is}
        ref={ref}
        className={cx(themedClassName, className)}
        data-active={isActive || undefined}
        {...boxProps}
        {...restProps}
        {...textProps}
        disabled={disabled || isLoading}
      >
        {isLoading && (
          <Spinner
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            marginLeft={-Math.round(height / 8)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            marginRight={Math.round(height / 4)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            size={Math.round(height / 2)}
          />
        )}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ icon: never; size: number; spacing: any; e... Remove this comment to see the full error message
        <ButtonIcon icon={iconBefore} size={iconSize} spacing={restProps.paddingLeft} edge="start" />
        {children}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ icon: never; size: number; spacing: any; e... Remove this comment to see the full error message
        <ButtonIcon icon={iconAfter} size={iconSize} spacing={restProps.paddingRight} edge="end" />
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
