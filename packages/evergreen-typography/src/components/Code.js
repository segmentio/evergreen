import React, { PureComponent } from 'react'
import Text from './Text'

export default class Pre extends PureComponent {
  static defaultProps = {
    is: 'code',
    fontFamily: 'mono',
  }

  render() {
    return <Text {...this.props} />
  }
}
