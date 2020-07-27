import React, { memo, forwardRef } from 'react'
import Box from 'ui-box'

const Small = memo(
  forwardRef(function Small(props, ref) {
    return <Box ref={ref} is="small" fontSize="85%" {...props} />
  })
)

export default Small
