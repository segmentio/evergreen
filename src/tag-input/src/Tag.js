/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Badge } from '../../badges'
import { CrossIcon } from '../../icons'
import { minorScale } from '../../scales'

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

const Tag = memo(
  forwardRef(function Tag(props, ref) {
    const { children, isRemovable, onRemove, ...restProps } = props

    return (
      <Badge
        ref={ref}
        isInteractive={true}
        {...badgeStyles}
        paddingRight={isRemovable ? minorScale(1) : undefined}
        {...restProps}
      >
        {children}
        {isRemovable && <CrossIcon marginLeft={minorScale(1)} onClick={onRemove} size={minorScale(3)} />}
      </Badge>
    )
  })
)

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
