import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from '../../typography'
import { withTheme } from '../../theme'

class Badge extends PureComponent {
  static propTypes = {
    ...Strong.propTypes,

    /**
     * The color used for the badge.
     * When the value is `automatic`, use the hash function to determine the color.
     */
    color: PropTypes.string.isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = { color: 'neutral', isSolid: false }

  static styles = {
    display: 'inline-block',
    boxSizing: 'border-box',
    height: 16,
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 0,
    paddingLeft: 6,
    borderRadius: 2,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }

  render() {
    const { theme, color: propsColor, isSolid, ...props } = this.props

    const { color, backgroundColor } = theme.getBadgeProps({
      isSolid,
      color: propsColor
    })

    return (
      <Strong
        size={300}
        {...Badge.styles}
        color={color}
        backgroundColor={backgroundColor}
        {...props}
      />
    )
  }
}

export default withTheme(Badge)
