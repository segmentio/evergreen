import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M6 6V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2zM3.5 6c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1c0 .28-.22.5-.5.5zM13 8h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1zM12 3a1.003 1.003 0 00-1.87-.5l-5.99 9.98c-.09.15-.14.33-.14.52a1.003 1.003 0 001.87.5l5.99-9.98c.09-.15.14-.33.14-.52z'
]
const svgPaths20 = [
  'M15 10c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm1 5c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zM8 7V5c0-1.66-1.34-3-3-3S2 3.34 2 5v2c0 1.66 1.34 3 3 3s3-1.34 3-3zM4 7V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm11-4a1.003 1.003 0 00-1.88-.48L5.14 16.49a1.003 1.003 0 101.74.99l7.99-13.97c.08-.15.13-.32.13-.51z'
]

export const PercentageIcon = memo(
  forwardRef(function PercentageIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="percentage"
        {...props}
      />
    )
  })
)
