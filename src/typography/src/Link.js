import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../../theme'
import Text from './Text'

class Link extends PureComponent {
  static propTypes = {
    ...Text.propTypes,

    /**
     * This attribute names a relationship of the linked document to the current document.
     * Common use case is: rel="noopener noreferrer".
     */
    rel: PropTypes.string,

    /**
     * Specifies the URL of the linked resource. A URL might be absolute or relative.
     */
    href: PropTypes.string,

    /**
     * Target atrribute, common use case is target="_blank."
     */
    target: PropTypes.string,

    /**
     * The appearance of the Link. Can be blue, green or neutral.
     */
    appearance: PropTypes.string.isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    appearance: 'default'
  }

  getLinkAppearance = appearance => {
    const { theme } = this.props

    return theme.appearances.link[appearance]
  }

  render() {
    const { appearance, theme, ...props } = this.props
    const css = this.getLinkAppearance(appearance)

    return (
      <Text
        is="a"
        textDecoration="underline"
        color={null}
        css={css}
        {...props}
      />
    )
  }
}

export default withTheme(Link)
