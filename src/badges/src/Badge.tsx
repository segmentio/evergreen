import cx from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { withTheme, PropsWithTheme } from '../../theme'
import { Strong } from '../../typography'
import { TextProps } from '../../typography/src/Text'

export interface BadgeProps extends TextProps {
  // The color used for the badge.
  color?: string

  // Whether or not to apply hover/focus/active styles
  isInteractive?: boolean

  isSolid?: boolean
}

class Badge extends React.PureComponent<PropsWithTheme<BadgeProps>> {
  static propTypes = {
    ...Strong.propTypes,
    color: PropTypes.string.isRequired,
    isInteractive: PropTypes.bool,
    theme: PropTypes.object.isRequired
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
