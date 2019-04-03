import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

interface IProps extends BoxProps {
  src?: string
}

export default class Image extends React.PureComponent<IProps> {
  render() {
    return <Box is="img" {...this.props} />
  }
}
