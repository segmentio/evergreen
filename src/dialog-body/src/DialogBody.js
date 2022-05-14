import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const DialogBody = memo(forwardRef((props, ref) => {
  const { ...restProps } = props

  return (
    <Box ref={ref} {...restProps}>
      DialogBody
    </Box>
  )
}))

DialogBody.propTypes = {

}

export default DialogBody