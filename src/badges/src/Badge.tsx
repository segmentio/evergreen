import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
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

export type BadgeProps = PolymorphicBoxProps<'strong', BadgeOwnProps>

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

const Badge: React.FC<BadgeProps> = memo(
  forwardRef(function Badge(props, ref) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'appearance' does not exist on type 'With... Remove this comment to see the full error message
    const { appearance = 'subtle', className, color = 'neutral', isInteractive = false, ...restProps } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Badge',
      { appearance, color },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ display: string; boxSizing: st... Remove this comment to see the full error message
      internalStyles
    )

    return (
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ alignContent?: number | false | AlignConte... Remove this comment to see the full error message
      <Strong
        ref={ref}
        size={300}
        className={cx(className, themedClassName, isInteractive && hoverClassName)}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

export default Badge
