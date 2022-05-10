import React from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { Spinner } from '../../spinner'
import { ForwardedRef } from '../../types/forwarded-ref'
import { IntentTypes } from '../../types/theme/intent-types'

export interface ButtonOwnProps {
  intent?: IntentTypes
  appearance?: string
  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading?: boolean
  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive?: boolean
  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom icon library.
   */
  iconBefore?: React.ElementType | JSX.Element | null | false
  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom icon library.
   */
  iconAfter?: React.ElementType | JSX.Element | null | false
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large'
}

export type ButtonProps<T extends React.ElementType<any> = 'button'> = PolymorphicBoxProps<T, ButtonOwnProps>

interface ButtonIconProps {
  edge: 'start' | 'end'
  icon?: React.ElementType | JSX.Element | null | false
  size: number
  spacing: string | number
}

const ButtonIcon = (props: ButtonIconProps) => {
  const { edge, icon, size, spacing } = props
  if (!icon) {
    return null
  }

  const relativeSpace = typeof spacing === 'number' ? spacing : size
  const edgeMargin = -Math.round(relativeSpace * 0.25)
  const innerMargin = Math.round(size * 0.7)
  const marginLeft = edge === 'start' ? edgeMargin : innerMargin
  const marginRight = edge === 'end' ? edgeMargin : innerMargin

  return <IconWrapper icon={icon} size={size} marginLeft={marginLeft} marginRight={marginRight} />
}

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
    border: 0,
  },
}

export const pseudoSelectors = {
  _active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
  _disabled: '&[disabled]',
  _focus: '&:not([disabled]):focus',
  _focusAndActive:
    '&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
  _hover: '&:not([disabled]):hover',
}

export const getIconSizeForButton = (height: any) => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const _Button = <T extends React.ElementType<any> = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<T>) => {
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

  const { className: themedClassName, ...boxProps } = useStyleConfig(
    'Button',
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number | false | Color | null | undefined' i... Remove this comment to see the full error message
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
      is={is as React.ElementType<any>}
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
          // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          marginLeft={-Math.round(height / 8)}
          // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          marginRight={Math.round(height / 4)}
          // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          size={Math.round(height / 2)}
        />
      )}
      <ButtonIcon icon={iconBefore} size={iconSize} spacing={restProps.paddingLeft} edge="start" />
      {children}
      <ButtonIcon icon={iconAfter} size={iconSize} spacing={restProps.paddingRight} edge="end" />
    </Box>
  )
}

const Button = memoizeWithForwardedRef(_Button)

export default Button
