import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

interface ImageProps extends Partial<BoxProps> {
  src?: string
}

export default class Image extends React.PureComponent<ImageProps> {
  static propTypes = {
    ...Box.propTypes,
    src: PropTypes.string
  }

  render() {
    return <Box is="img" {...this.props} />
  }
}
