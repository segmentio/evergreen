import React from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { DefaultAppearance } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'
import { MinimalAppearance } from '../../types/minimal-appearance'
import { IntentTypes } from '../../types/theme/intent-types'
import Button, { ButtonOwnProps, getIconSizeForButton, internalStyles, pseudoSelectors } from './Button'

export interface IconButtonOwnProps extends ButtonOwnProps {
  /**
   * Blueprint UI icon, or an icon element, to render.
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Specifies an explicit icon size instead of the default value.
   */
  iconSize?: number
  /**
   * The intent of the button.
   */
  intent?: IntentTypes
  /**
   * The appearance of the button.
   */
  appearance?: DefaultAppearance | MinimalAppearance | 'primary'
  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive?: boolean
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * Class name passed to the button.
   */
  className?: string
}

export type IconButtonProps<T extends React.ElementType<any> = 'button'> = PolymorphicBoxProps<T, IconButtonOwnProps>

const _IconButton = <T extends React.ElementType<any> = 'button'>(props: IconButtonProps<T>, ref: ForwardedRef<T>) => {
  const { icon, iconSize, ...restProps } = props

  // modifiers
  const { appearance, intent = 'none', size = 'medium' } = props

  // Composes the exact same styles as button
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ position: string; fontWeight: ... Remove this comment to see the full error message
  const styleProps = useStyleConfig('Button', { appearance, intent, size }, pseudoSelectors, internalStyles)

  const height = restProps.height || styleProps.height
  const relativeIconSize = getIconSizeForButton(height)

  return (
    <Button
      ref={ref}
      paddingLeft={0}
      paddingRight={0}
      flex="none"
      height={height}
      width={height}
      minWidth={height}
      {...restProps}
    >
      <IconWrapper
        icon={icon}
        color={intent === 'none' ? 'default' : 'currentColor'}
        size={iconSize || relativeIconSize}
      />
    </Button>
  )
}

const IconButton = memoizeWithForwardedRef(_IconButton)

export default IconButton
