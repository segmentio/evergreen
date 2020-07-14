import React, { memo, forwardRef } from 'react'
import Box from 'ui-box'

const Small = memo(
  forwardRef((props, ref) => {
    return <Box ref={ref} is="small" fontSize="85%" {...props} />
  })
)

export default Small
