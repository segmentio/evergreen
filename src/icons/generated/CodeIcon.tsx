import React, { memo, forwardRef } from 'react'
import { IconComponent } from "../../types";
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.71 7.29l-3-3a1.003 1.003 0 00-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M6 6a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71zm6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1zm7.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]

export const CodeIcon: IconComponent = memo(
  forwardRef(function CodeIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="code" {...props} />
  })
)
