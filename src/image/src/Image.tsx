import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

interface IProps extends Partial<BoxProps> {
  src?: string
}

export default class Image extends React.PureComponent<IProps> {
  static propTypes = {
    ...Box.propTypes,
    src: PropTypes.string
  }

  render() {
    return <Box is="img" {...this.props} />
  }
}
