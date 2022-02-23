import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const FileUploader = memo(
  forwardRef((props, ref) => {
    const { ...restProps } = props

    return (
      <Box ref={ref} {...restProps}>
        FileUploader
      </Box>
    )
  })
)

FileUploader.propTypes = {
  _: PropTypes.any
}

export default FileUploader
