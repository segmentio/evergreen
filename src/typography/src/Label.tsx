import React, { PureComponent } from 'react'
import Text from './Text'

export default class Label extends PureComponent<
  React.ComponentProps<typeof Text>
> {
  render() {
    return <Text is="label" fontWeight={500} {...this.props} />
  }
}
