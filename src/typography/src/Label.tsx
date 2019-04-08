import * as React from 'react'

import Text, { ITextProps } from './Text'

export default class Label extends React.PureComponent<ITextProps> {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="label" fontWeight={500} {...this.props} />
  }
}
