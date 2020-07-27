import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M9 8c0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4C8.89 8.53 9 8.28 9 8zm4.71-.71l-4-4a1.003 1.003 0 00-1.42 1.42L11.59 8 8.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]
const svgPaths20 = [
  'M11 10c0-.28-.11-.53-.29-.71l-6-6a1.003 1.003 0 00-1.42 1.42L8.59 10 3.3 15.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71zm5.71-.71l-6-6a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]

export const DoubleChevronRightIcon = memo(
  forwardRef(function DoubleChevronRightIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="double-chevron-right"
        {...props}
      />
    )
  })
)
