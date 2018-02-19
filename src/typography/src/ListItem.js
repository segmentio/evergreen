import React, { PureComponent } from 'react'
import Text from './Text'

export default class Paragraph extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="li" marginY="0.5em" {...this.props} />
  }
}
