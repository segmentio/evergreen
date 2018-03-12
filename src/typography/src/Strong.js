import React, { PureComponent } from 'react'
import Text from './Text'

export default class Strong extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="strong" fontWeight={600} {...this.props} />
  }
}
