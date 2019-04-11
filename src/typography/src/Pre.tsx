import * as React from 'react'

import Text, { TextProps } from './Text'

export default class Pre extends React.PureComponent<TextProps> {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="pre" marginTop={0} marginBottom={0} {...this.props} />
  }
}
