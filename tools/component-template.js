'use strict'

module.exports = ({ componentName }) => {
  return `
import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const ${componentName} = memo(forwardRef((props, ref) => {
  const { ...restProps } = props

  return (
    <Box ref={ref} {...restProps}>
      ${componentName}
    </Box>
  )
}))

${componentName}.propTypes = {

}

export default ${componentName}
`.trim()
}
