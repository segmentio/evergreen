import React, { memo, forwardRef } from 'react'
import Text from './Text'

const Pre = memo(
  forwardRef((props, ref) => {
    return <Text is="pre" marginTop={0} marginBottom={0} {...props} ref={ref} />
  })
)

Pre.propTypes = {
  ...Text.propTypes
}

export default Pre
