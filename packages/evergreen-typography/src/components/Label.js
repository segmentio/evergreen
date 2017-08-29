import React, { PureComponent } from 'react'
import Text from './Text'

export default class Label extends PureComponent {
  static defaultProps = {
    is: 'label',
  }

  render() {
    return <Text {...this.props} />
  }
}
