import React, { PureComponent } from 'react'
import cx from 'classnames'
import { withTheme, Theme } from '../../theme'
import Text from './Text'

interface LinkProps extends React.ComponentProps<typeof Text> {
  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className?: string

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color?: string

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href?: string

  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel?: string

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target?: string

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Link extends PureComponent<LinkProps> {
  static defaultProps = {
    color: 'default'
  }

  render() {
    const { theme, className, color, ...props } = this.props

    const themedClassName = theme.getLinkClassName(color)

    return (
      <Text
        is="a"
        className={cx(className, themedClassName)}
        textDecoration="underline"
        color={null}
        {...props}
      />
    )
  }
}

export default withTheme(Link)
