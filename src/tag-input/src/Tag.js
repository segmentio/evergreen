/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from '../../badges'
import { Icon } from '../../icon'
import { minorScale } from '../../scales'

class Tag extends React.PureComponent {
  static propTypes = {
    /**
     * Callback invoked when the removal icon is clicked.
     * (event) => void
     */
    onRemove: PropTypes.func,
    /** Whether or not the tag can be removed. */
    isRemovable: PropTypes.bool
  }

  render() {
    const { children, onRemove, isRemovable, ...props } = this.props

    const badgeStyles = {
      alignItems: 'center',
      display: 'inline-flex',
      fontWeight: 400,
      textTransform: 'none'
    }

    if (isRemovable) {
      badgeStyles.paddingRight = minorScale(1)
    }

    return (
      <Badge isInteractive {...badgeStyles} {...props}>
        {children}
        {isRemovable && (
          <Icon
            icon="cross"
            marginLeft={minorScale(1)}
            onClick={onRemove}
            size={minorScale(3)}
          />
        )}
      </Badge>
    )
  }
}

export default Tag
