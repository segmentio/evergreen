import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const Image = memo(
  forwardRef(function Image(props, ref) {
    return <Box is="img" {...props} ref={ref} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Image.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,
  src: PropTypes.string
}

export default Image
