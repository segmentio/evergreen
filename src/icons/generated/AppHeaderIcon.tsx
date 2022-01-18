import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zM6 4a1 1 0 00-1.993-.117L4 4v8a1 1 0 001.993.117L6 12V9h4v3a1 1 0 001.993.117L12 12V4a1 1 0 00-1.993-.117L10 4v3H6V4z'
]
const svgPaths20 = [
  'M19 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h18zM8 6a1 1 0 00-1.993-.117L6 6v8a1 1 0 001.993.117L8 14v-3h4v3a1 1 0 001.993.117L14 14V6a1 1 0 00-1.993-.117L12 6v3H8V6z'
]

export const AppHeaderIcon = memo(
  forwardRef(function AppHeaderIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="app-header" {...props} />
  })
)
