import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M9.29 9.3c.3.62.8 1.12 1.42 1.41l-1 1c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l.29-.29zM15.48 1c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V4.71L8.17 1.98A.566.566 0 018 1.57c0-.31.26-.57.57-.57h6.91z'
]
const svgPaths20 = [
  'M12.14 10.45c.21.67.65 1.23 1.22 1.61l-1.65 1.65c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 1.14-1.14zM19.35 1a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V5.13L11.19 2.1a.642.642 0 01.45-1.1h7.71z'
]

export const SeriesFilteredIcon: IconComponent = memo(
  forwardRef(function SeriesFilteredIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="series-filtered" {...props} />
  })
)