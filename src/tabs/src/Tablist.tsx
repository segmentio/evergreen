import React, { PureComponent } from 'react'
import Box from 'ui-box'

export default class Tablist extends PureComponent<
  React.ComponentProps<typeof Box>
> {
  render() {
    return <Box role="tablist" {...this.props} />
  }
}
