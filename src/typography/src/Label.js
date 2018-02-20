import React, { PureComponent } from 'react'
import Text from './Text'

export default class Label extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="label" {...this.props} />
  }
}
