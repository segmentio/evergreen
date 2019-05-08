import React, { PureComponent } from 'react'
import Box, { BoxProps } from 'ui-box'

export default class Tablist extends PureComponent<BoxProps> {
  render() {
    return <Box role="tablist" {...this.props} />
  }
}
