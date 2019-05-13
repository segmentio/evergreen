import React, { PureComponent } from 'react'
import Text from './Text'

export interface StrongProps extends React.ComponentProps<typeof Text> {}

export default class Strong extends PureComponent<StrongProps> {
  static propTypes = Text.propTypes

  render() {
    return <Text is="strong" fontWeight={600} {...this.props} />
  }
}
