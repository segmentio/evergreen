import React, { PureComponent } from 'react'
import Box from 'ui-box'

export interface SmallProps extends React.ComponentProps<typeof Box> {}

/**
 * Small can only be used inside of Text or Paragraph.
 */
export default class Small extends PureComponent<SmallProps> {
  static propTypes = Box.propTypes

  render() {
    return <Box is="small" fontSize="85%" {...this.props} />
  }
}
