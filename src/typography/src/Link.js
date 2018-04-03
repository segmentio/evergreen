import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LinkAppearances from './styles/LinkAppearances'
import Text from './Text'

export default class Link extends PureComponent {
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
    appearance: PropTypes.oneOf(Object.keys(LinkAppearances))
  }

  static defaultProps = {
    appearance: 'green'
  }

  render() {
    const { appearance, ...props } = this.props
    const appearanceStyle = LinkAppearances[appearance]

    // Manage the color through the appearance
    return (
      <Text
        is="a"
        textDecoration="underline"
        color={null}
        css={appearanceStyle}
        {...props}
      />
    )
  }
}
