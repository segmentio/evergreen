import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

export default class Image extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    src: PropTypes.string,
  }

  render() {
    return <Box is="img" {...this.props} />
  }
}
