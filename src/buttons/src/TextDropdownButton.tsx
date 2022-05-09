import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Spinner } from '../../spinner'
import { ForwardedRef } from '../../types/forwarded-ref'
import { internalStyles, pseudoSelectors } from './Button'

export interface TextDropdownButtonOwnProps {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive?: boolean
  /**
   * Whether or not the button is loading.
   * Automatically sets `disabled` when `isLoading={true}`
   */
  isLoading?: boolean
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large'
}

export type TextDropdownButtonProps<T extends React.ElementType<any> = 'button'> = PolymorphicBoxProps<
  T,
  TextDropdownButtonOwnProps
>

const TextDropdownButton = <T extends React.ElementType<any> = 'button'>(
  props: TextDropdownButtonProps<T>,
  ref: ForwardedRef<T>
) => {
  const {
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

  const { className: themedClassName, ...boxProps } = useStyleConfig(
    'TextDropdownButton',
    { size },
    pseudoSelectors,
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ position: string; fontWeight: ... Remove this comment to see the full error message
    internalStyles
  )

  return (
    <Box
      is={is as React.ElementType<any>}
      ref={ref}
      type={is === 'button' ? 'button' : undefined}
      className={cx(themedClassName, className)}
      data-active={isActive || undefined}
      {...boxProps}
      {...restProps}
      disabled={disabled || isLoading}
    >
      {isLoading && <Spinner marginLeft={-2} marginRight={4} size={12} />}
      {children}
      <IconWrapper icon={icon} marginLeft={2} color="default" size={12} />
    </Box>
  )
}

export default memo(forwardRef(TextDropdownButton))
