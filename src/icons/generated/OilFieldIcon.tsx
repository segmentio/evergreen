import React, { memo, forwardRef } from 'react'
import { IconComponent } from "../../types";
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 14h-1.35l-3.34-7.51 2.46-.95 1.45 3.21c.09.2.36.3.6.23.1-.03.18-.08.24-.15.05-.08 1.23-1.56.87-4.2-.11-.79-.52-4.62-3.26-4.62-.93 0-1.68.62-1.67 1.37 0 .14.03.28.09.42l.87 1.92L.64 8.07v.01A.98.98 0 000 9c0 .55.45 1 1 1 .13 0 .25-.03.36-.07v.01l1.04-.4L3.67 14H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM4.27 8.81L7.14 7.7 5.2 12.08l-.93-3.27zM6.54 14L9 8.46 11.46 14H6.54z'
]
const svgPaths20 = [
  'M19 17.99h-1.36l-4.35-9.57 2.91-.86 1.66 4.1c.11.27.43.4.72.31.12-.04.22-.11.28-.2.06-.11 1.47-2.08 1.05-5.6C19.79 5.12 19.3 0 16.01 0 14.89.01 13.99.83 14 1.84c0 .19.04.38.1.56l1.34 3.31L.72 10.03v.02c-.41.12-.72.49-.72.94 0 .55.45 1 1 1 .1 0 .19-.03.28-.06v.02l2-.59 1.47 6.63H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM5.2 10.8l3.95-1.16-2.83 6.22L5.2 10.8zm2.35 7.19l3.95-8.68 3.95 8.68h-7.9z'
]

export const OilFieldIcon: IconComponent = memo(
  forwardRef(function OilFieldIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="oil-field" {...props} />
  })
)
