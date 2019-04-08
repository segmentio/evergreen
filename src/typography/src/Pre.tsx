import * as React from 'react'

import Text, { ITextProps } from './Text'

export default class Pre extends React.PureComponent<ITextProps> {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="pre" marginTop={0} marginBottom={0} {...this.props} />
  }
}
