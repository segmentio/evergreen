import React, { memo, forwardRef } from 'react'
import Text from './Text'

const Label = memo(
  forwardRef(function Label(props, ref) {
    return <Text is="label" fontWeight={500} {...props} ref={ref} />
  })
)

Label.propTypes = {
  ...Text.propTypes
}

export default Label
