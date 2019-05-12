import React, { PureComponent } from 'react'
import Text from './Text'

export interface PreProps extends React.ComponentProps<typeof Text> {}

export default class Pre extends PureComponent<PreProps> {
  render() {
    return <Text is="pre" marginTop={0} marginBottom={0} {...this.props} />
  }
}
