import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M8 0a1 1 0 110 2 6 6 0 106 6 1 1 0 012 0 8 8 0 11-8-8zm0 5a3 3 0 110 6 3 3 0 010-6zm5-5a1 1 0 011 1v.999L15 2a1 1 0 010 2h-1v1a1 1 0 01-2 0V4h-1a1 1 0 010-2h1V1a1 1 0 011-1z'
]
const svgPaths20 = [
  'M10 0a1 1 0 010 2 8 8 0 108 8 1 1 0 012 0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 6a4 4 0 110 8 4 4 0 010-8zm6-6c.6 0 1 .4 1 1v2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1s-1-.4-1-1V5h-2c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V1c0-.6.4-1 1-1z'
]

export const AddLocationIcon = memo(
  forwardRef(function AddLocationIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="add-location" {...props} />
  })
)
