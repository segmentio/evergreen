import cx from 'classnames'
import * as React from 'react'

import { withTheme, PropsWithTheme } from '../../theme'
import { Strong } from '../../typography'
import { ITextProps } from '../../typography/src/Text'

export interface IBadgeProps extends ITextProps {
  // The color used for the badge.
  color: string

  // Whether or not to apply hover/focus/active styles
  isInteractive?: boolean
}

class Badge extends React.PureComponent<PropsWithTheme<IBadgeProps>> {
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
