import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = ['']
const svgPaths20 = ['']

function BlankIcon({ ...props }, ref) {
  return (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  )
}

export default memo(forwardRef(BlankIcon))
