/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React, { memo, forwardRef } from 'react'
import { Badge } from '../../badges'
import { BadgeProps } from '../../badges/src/Badge'
import { CrossIcon } from '../../icons'
import { minorScale } from '../../scales'

export interface TagProps extends BadgeProps {
  isRemovable?: boolean
  onRemove?: () => void
}

const Tag: React.FC<TagProps> = memo(
  forwardRef(function Tag(props, ref) {
    const { children, isRemovable, onRemove, ...restProps } = props

    const badgeStyles = {
      alignItems: 'center',
      display: 'inline-flex',
      fontWeight: 400,
      borderRadius: 4,
      paddingX: 8,
      paddingY: 6,
      marginTop: 0,
      marginBottom: 0,
      textTransform: 'none'
    }

    if (isRemovable) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'paddingRight' does not exist on type '{ ... Remove this comment to see the full error message
      badgeStyles.paddingRight = minorScale(1)
    }

    return (
      // @ts-expect-error
      <Badge ref={ref} isInteractive {...badgeStyles} {...restProps}>
        {children}
        {isRemovable && <CrossIcon marginLeft={minorScale(1)} onClick={onRemove} size={minorScale(3)} />}
      </Badge>
    )
  })
)

export default Tag
