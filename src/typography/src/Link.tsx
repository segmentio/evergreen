import cx from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { PropsWithTheme, withTheme } from '../../theme'
import Text, { TextProps } from './Text'

interface LinkProps extends TextProps {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel?: string

  // Specifies the URL of the linked resource. A URL might be absolute or relative.
  href?: string

  // Target atrribute, common use case is target="_blank."
  target?: string

  // The color (and styling) of the Link. Can be default, blue, green or neutral.
  color?: string

  // Class name passed to the link. Only use if you know what you are doing.
  className?: string
}

class Link extends React.PureComponent<PropsWithTheme<LinkProps>> {
  static propTypes = {
    ...Text.propTypes,
    rel: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    color: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  }

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
