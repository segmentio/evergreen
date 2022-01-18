/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Badge } from '../../badges'
import { CrossIcon } from '../../icons'
import { minorScale } from '../../scales'

const Tag = memo(
  forwardRef(function Tag(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
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
      <Badge ref={ref} isInteractive {...badgeStyles} {...restProps}>
        {children}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        {isRemovable && <CrossIcon marginLeft={minorScale(1)} onClick={onRemove} size={minorScale(3)} />}
      </Badge>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Tag.propTypes = {
  /** The tag content */
  children: PropTypes.node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: PropTypes.func,
  /** Whether or not the tag can be removed. */
  isRemovable: PropTypes.bool
}

export default Tag
