import * as React from 'react'

import Text, { ITextProps } from './Text'

export default class Strong extends React.PureComponent<ITextProps> {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="strong" fontWeight={600} {...this.props} />
  }
}
