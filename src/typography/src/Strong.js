import React, { memo, forwardRef } from 'react'
import Text from './Text'

const Strong = memo(
  forwardRef((props, ref) => {
    return <Text is="strong" fontWeight={600} {...props} ref={ref} />
  })
)

Strong.propTypes = {
  ...Text.propTypes
}

export default Strong
