import React, { PureComponent } from 'react'
import Text from './Text'

export default class Strong extends PureComponent<
  React.ComponentProps<typeof Text>
> {
  render() {
    return <Text is="strong" fontWeight={600} {...this.props} />
  }
}
