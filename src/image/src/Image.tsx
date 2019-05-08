import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { BoxProps } from 'ui-box'

export default class Image extends PureComponent<any & BoxProps> {
  static propTypes = {
    src: PropTypes.string
  }

  render() {
    return <Box is="img" {...this.props} />
  }
}
