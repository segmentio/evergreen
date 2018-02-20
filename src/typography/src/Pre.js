import React, { PureComponent } from 'react'
import Text from './Text'

export default class Pre extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return (
      <Text
        is="pre"
        fontFamily="mono"
        marginTop={0}
        marginBottom={0}
        {...this.props}
      />
    )
  }
}
