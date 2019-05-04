import React, { PureComponent } from 'react'
import Box, { BoxProps } from 'ui-box'

export default class TabNavigation extends PureComponent<BoxProps> {
  render() {
    return <Box is="nav" role="navigation" {...this.props} />
  }
}
