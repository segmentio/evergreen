import React, { PureComponent } from 'react'
import Box from 'ui-box'

/**
 * Small can only be used inside of Text or Paragraph.
 */
export default class Small extends PureComponent<any> {
  render() {
    return <Box is="small" fontSize="85%" {...this.props} />
  }
}
