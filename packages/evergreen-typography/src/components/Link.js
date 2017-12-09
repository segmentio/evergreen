import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import LinkAppearances from '../styles/LinkAppearances'

export default class Link extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    rel: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    appearance: PropTypes.oneOf(Object.keys(LinkAppearances))
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'a',
    appearance: 'blue'
  }

  render() {
    const { appearance, ...props } = this.props
    const appearanceStyle = LinkAppearances[appearance]

    // Manage the color through the appearance
    return <Text color={null} css={appearanceStyle} {...props} />
  }
}
