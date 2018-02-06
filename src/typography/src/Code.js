import React, { PureComponent } from 'react'
import Text from './Text'

export default class Code extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'code',
    fontFamily: 'mono'
  }

  render() {
    return <Text {...this.props} />
  }
}
