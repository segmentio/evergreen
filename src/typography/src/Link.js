import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LinkAppearances from './styles/LinkAppearances'
import Text from './Text'

export default class Link extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    rel: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    appearance: PropTypes.oneOf(Object.keys(LinkAppearances))
  }

  static defaultProps = {
    appearance: 'blue'
  }

  render() {
    const { appearance, ...props } = this.props
    const appearanceStyle = LinkAppearances[appearance]

    // Manage the color through the appearance
    return <Text is="a" color={null} css={appearanceStyle} {...props} />
  }
}
