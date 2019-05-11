import React, { PureComponent } from 'react'
import Box from 'ui-box'

/**
 * Small can only be used inside of Text or Paragraph.
 */
export default class Small extends PureComponent<
  React.ComponentProps<typeof Box>
> {
  render() {
    return <Box is="small" fontSize="85%" {...this.props} />
  }
}
