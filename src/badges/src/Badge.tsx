import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Strong } from '../../typography'
import { withTheme, Theme } from '../../theme'

interface BadgeProps extends React.ComponentProps<typeof Strong> {
  /**
   * The color used for the badge.
   */
  color: string

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: boolean

  /**
   * Whether or not a dark background with light text should be used
   */
  isSolid: boolean

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Badge extends PureComponent<BadgeProps> {
  static propTypes = {
    color: PropTypes.string.isRequired,
    isInteractive: PropTypes.bool.isRequired,
    isSolid: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>
  }

  static defaultProps = {
    color: 'neutral',
    isInteractive: false,
    isSolid: false
  }

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
    const {
      theme,
      className,
      color: propsColor,
      isInteractive,
      isSolid,
      ...props
    } = this.props

    const { color, backgroundColor } = theme.getBadgeProps({
      color: propsColor,
      isSolid
    })

    const appearance = isInteractive ? 'interactive' : 'default'
    const classNames = cx(className, theme.getBadgeClassName(appearance))

    return (
      <Strong
        size={300}
        {...Badge.styles}
        color={color}
        backgroundColor={backgroundColor}
        {...props}
        className={classNames}
      />
    )
  }
}

export default withTheme(Badge)
