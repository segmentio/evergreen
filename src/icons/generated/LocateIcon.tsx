import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 7h-.09A6.98 6.98 0 009 1.1V1c0-.55-.45-1-1-1S7 .45 7 1v.09A6.98 6.98 0 001.1 7H1c-.55 0-1 .45-1 1s.45 1 1 1h.1A6.969 6.969 0 007 14.91V15c0 .55.45 1 1 1s1-.45 1-1v-.09A6.98 6.98 0 0014.9 9h.1c.55 0 1-.45 1-1s-.45-1-1-1zm-6.02 5.9c-.05-.5-.46-.9-.98-.9s-.93.4-.98.9A5.017 5.017 0 013.1 8.98c.5-.05.9-.46.9-.98s-.4-.93-.9-.98A5.017 5.017 0 017.02 3.1c.05.5.46.9.98.9s.93-.4.98-.9c1.97.39 3.52 1.95 3.92 3.92-.5.05-.9.46-.9.98s.4.93.9.98a5.017 5.017 0 01-3.92 3.92zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
]
const svgPaths20 = [
  'M10 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 1h-1.07c-.45-3.61-3.32-6.45-6.93-6.91V1c0-.55-.45-1-1-1S9 .45 9 1v1.09C5.39 2.55 2.52 5.39 2.07 9H1c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.45 3.61 3.32 6.45 6.93 6.91V19c0 .55.45 1 1 1s1-.45 1-1v-1.09c3.61-.46 6.48-3.29 6.93-6.91H19c.55 0 1-.45 1-1s-.45-1-1-1zm-4 2h.9a5.98 5.98 0 01-4.9 4.91V15c0-.55-.45-1-1-1s-1 .45-1 1v.91A5.98 5.98 0 014.1 11H5c.55 0 1-.45 1-1s-.45-1-1-1h-.9A5.98 5.98 0 019 4.09V5c0 .55.45 1 1 1s1-.45 1-1v-.91A5.98 5.98 0 0115.9 9H15c-.55 0-1 .45-1 1s.45 1 1 1z'
]

export const LocateIcon: IconComponent = memo(
  forwardRef(function LocateIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="locate" {...props} />
  })
)
