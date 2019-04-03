import * as React from 'react'
import Text, { ITextProps } from './Text'

export default class Label extends React.PureComponent<ITextProps> {
  render() {
    return <Text is="label" fontWeight={500} {...this.props} />
  }
}
