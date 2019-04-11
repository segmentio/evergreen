import * as React from 'react'

import Text, { TextProps } from './Text'

export default class Label extends React.PureComponent<TextProps> {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="label" fontWeight={500} {...this.props} />
  }
}
