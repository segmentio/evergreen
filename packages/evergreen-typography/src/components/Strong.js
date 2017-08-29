import React, { PureComponent } from 'react'
import Text from './Text'

export default class Strong extends PureComponent {
  static defaultProps = {
    is: 'strong',
    fontWeight: 600,
  }

  render() {
    return <Text {...this.props} />
  }
}
