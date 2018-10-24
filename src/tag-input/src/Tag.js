/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from '../../badges'
import { Icon } from '../../icon'
import { withTheme } from '../../theme'
import { minorScale } from '../../scales'

class Tag extends React.PureComponent {
  static propTypes = {
    /**
     * Callback invoked when the removal icon is clicked.
     * (event) => void
     */
    onRemove: PropTypes.func,
    /** Whether or not the tag can be removed. */
    removable: PropTypes.bool
  }

  static defaultProps = {
    removable: true
  }

  handleRemove = event => {
    if (typeof this.props.onRemove === 'function') {
      this.props.onRemove(event)
    }
  }

  render() {
    const { children, onRemove, removable, theme, ...props } = this.props

    const badgeStyles = {
      alignItems: 'center',
      display: 'inline-flex',
      textTransform: 'none'
    }

    if (removable) {
      badgeStyles.paddingRight = minorScale(1)
    }

    return (
      <Badge isInteractive {...badgeStyles} {...props}>
        {children}
        {removable && (
          <Icon
            icon="cross"
            marginLeft={minorScale(1)}
            onClick={this.handleRemove}
            size={minorScale(3)}
          />
        )}
      </Badge>
    )
  }
}

export default withTheme(Tag)
