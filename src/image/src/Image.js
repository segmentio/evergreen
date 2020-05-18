import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const Image = memo(
  forwardRef((props, ref) => {
    return <Box is="img" {...props} innerRef={ref} />
  })
)

Image.propTypes = {
  ...Box.propTypes,
  src: PropTypes.string
}

export default Image
