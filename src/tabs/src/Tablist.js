import React, { forwardRef } from 'react'
import Box from 'ui-box'

const Tablist = forwardRef((props, ref) => {
  return <Box role="tablist" {...props} ref={ref} />
})

Tablist.propTypes = Box.propTypes

export default Tablist
