import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const DialogFooter = memo(forwardRef((props, ref) => {
  const { ...restProps } = props

  return (
    <Box ref={ref} {...restProps}>
      DialogFooter
    </Box>
  )
}))

DialogFooter.propTypes = {

}

export default DialogFooter