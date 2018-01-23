import React, { PureComponent } from 'react'
import Text from './Text'

export default class Paragraph extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'li',
    marginY: '0.5em'
  }

  render() {
    return <Text {...this.props} />
  }
}
