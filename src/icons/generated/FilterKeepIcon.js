import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 10c-.28 0-.53.11-.71.29L12 12.59l-1.29-1.29A.965.965 0 0010 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0015 10zm-3-8c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7z'
]
const svgPaths20 = [
  'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm4 11c-.28 0-.53.11-.71.29L15 16.59l-1.29-1.29A.965.965 0 0013 15a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0019 13z'
]

export const FilterKeepIcon = memo(
  forwardRef(function FilterKeepIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="filter-keep"
        {...props}
      />
    )
  })
)
