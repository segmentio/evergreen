import React, { PureComponent } from 'react'
import Text from './Text'

export interface LabelProps extends React.ComponentProps<typeof Text> {}

export default class Label extends PureComponent<LabelProps> {
  render() {
    return <Text is="label" fontWeight={500} {...this.props} />
  }
}
