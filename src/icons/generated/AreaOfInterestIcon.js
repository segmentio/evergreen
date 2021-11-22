import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M4 3.664C4 1.644 5.793 0 8 0s3.993 1.643 4 3.664C12 5.692 8 11 8 11S4 5.692 4 3.664zM6 4a2 2 0 104.001-.001A2 2 0 006 4zm7.504 6.269l-2.68-1.609.021-.033c.34-.538.688-1.115 1-1.687l3.67 2.202a1 1 0 01.266 1.482l-4 5A1 1 0 0111 16H5a1 1 0 01-.78-.376l-4-5a1 1 0 01.266-1.482l3.67-2.202a30.46 30.46 0 00.999 1.687l.021.033-2.68 1.609 2.985 3.73h5.038l2.985-3.73z'
]
const svgPaths20 = [
  'M5 4.664C5 2.09 7.241 0 10 0s4.99 2.091 5 4.664C15 7.245 10 14 10 14S5 7.245 5 4.664zM8 5a2 2 0 104.001-.001A2 2 0 008 5zM.504 12.132l4.302-2.458c.322.576.662 1.145.995 1.681l.025.04-3.294 1.881L6.468 18h7.064l3.936-4.724-3.293-1.882.024-.039c.333-.536.673-1.105.995-1.681l4.302 2.458a1 1 0 01.272 1.508l-5 6A1 1 0 0114 20H6a1 1 0 01-.768-.36l-5-6a1 1 0 01.272-1.508z'
]

export const AreaOfInterestIcon = memo(
  forwardRef(function AreaOfInterestIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="area-of-interest" {...props} />
  })
)
