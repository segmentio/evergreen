import React from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import { Strong } from '../../typography'
import { StrongOwnProps } from '../../typography/src/Strong'

export interface BadgeOwnProps extends StrongOwnProps {
  /**
   * The color used for the badge. When the value is `automatic`, use the hash function to determine the color.
   */
  color?: 'automatic' | 'neutral' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'purple'
  /**
   * Whether or not to apply hover/focus/active styles.
   */
  isInteractive?: boolean
}

export type BadgeProps<T extends React.ElementType<any> = 'strong'> = PolymorphicBoxProps<T, BadgeOwnProps>

const pseudoSelectors = {}

const internalStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
}

const hoverClassName = css({
  '&:hover': {
    opacity: 0.8,
  },
  cursor: 'pointer',
})

const _Badge = <T extends React.ElementType<any> = 'button'>(props: BadgeProps<T>, ref: ForwardedRef<T>) => {
    const { appearance = 'subtle', className, color = 'neutral', isInteractive = false, ...restProps } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Badge',
      { appearance, color },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ display: string; boxSizing: st... Remove this comment to see the full error message
      internalStyles
    )

    return (
      <Strong
        ref={ref}
        size={300}
        className={cx(className, themedClassName, isInteractive && hoverClassName)}
        {...styleProps}
        {...restProps}
      />
    )
  }


const Badge = memoizeWithForwardedRef(_Badge)

export default Badge
