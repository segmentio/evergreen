import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M9.5 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 00.83-.37v-7c0-.28-.22-.5-.5-.5z'
]
const svgPaths20 = [
  'M13 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
]

export const CaretLeftIcon = memo(
  forwardRef(function CaretLeftIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="caret-left"
        {...props}
      />
    )
  })
)
