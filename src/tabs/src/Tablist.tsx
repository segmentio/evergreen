import React, { PureComponent } from 'react'
import Box from 'ui-box'

export default class Tablist extends PureComponent {
  static propTypes = {
    ...Box.propTypes
  }

  render() {
    return <Box role="tablist" {...this.props} />
  }
}
