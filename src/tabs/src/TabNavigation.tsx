import React, { PureComponent } from 'react'
import Box from 'ui-box'

export default class TabNavigation extends PureComponent<
  React.ComponentProps<typeof Box>
> {
  render() {
    return <Box is="nav" role="navigation" {...this.props} />
  }
}
