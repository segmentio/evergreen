import React, { PureComponent } from 'react'
import Text from './Text'

export default class Code extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="code" fontFamily="mono" {...this.props} />
  }
}
