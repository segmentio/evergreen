import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M16 6.41c0-1.01-.49-1.94-1.29-2.49-.43-1.92-2.07-3.28-4-3.28-.46 0-.92.08-1.35.24C8.83.31 8.11 0 7.34 0c-.9 0-1.74.44-2.28 1.16-.12-.01-.24-.02-.36-.02-1.31 0-2.42.89-2.77 2.17C.78 3.72 0 4.84 0 6.13c0 .38.07.76.21 1.12C.07 7.6 0 7.98 0 8.36c0 1.11.58 2.11 1.51 2.63.54.56 1.27.87 2.03.87.49 0 .95-.12 1.37-.36a2.85 2.85 0 002.18 1.04c.52 0 1.03-.14 1.47-.42.49.39 1.07.65 1.69.73 1.04 1.15 1.84 2.63 1.84 2.64 0 0 .28.49.26.49.77 0 1.41-.16 1.32-1.04 0 .02-.73-2.31-.73-2.31.41-.21.75-.55.97-.98.9-.52 1.47-1.53 1.47-2.61 0-.24-.03-.48-.08-.71.45-.52.7-1.21.7-1.92zm-1.23 1.02l-.15-.16-.61-.67c-.27-.29-.54-.94-.58-1.39l-.1-1.01c-.05-.59-.94-.58-.91.11 0 .02.1 1.01.1 1.01.03.29.12.62.24.93-.06-.01-.12-.02-.18-.02 0 0-2.06-.1-2.05-.11-.58-.02-.71.97-.04 1l2.05.11c.42.02 1.04.3 1.29.58l.49.54.02.05c.08.21.12.44.12.66 0 .74-.41 1.41-1.07 1.75l-.16.08-.07.18c-.15.38-.48.66-.88.74l-.54.11.7 2.2c-.38-.61-.95-1.43-1.62-2.14l-.12-.13-.17-.01c-.41-.03-.8-.17-1.14-.38l1.36-1.18c.35-.31.83-.44.99-.39 0 0 .63.17.62.18.63.16.83-.74.23-.97l-.62-.18c-.55-.16-1.33.18-1.79.58l-1.53 1.33-.31.26c-.35.29-.75.44-1.2.44-.64 0-1.23-.33-1.58-.86V9.15c0-.4.17-.79.27-.85 0 0 .52-.34.51-.35.71-.53.18-1.23-.49-.89 0-.01-.52.35-.52.35-.26.15-.45.44-.58.77-.11-.11-.22-.2-.34-.28 0 0-1.53-1.01-1.53-1.02-.65-.45-1.2.51-.49.89 0-.01 1.51 1.02 1.51 1.02.37.24.62.78.62 1.09v.67c-.34.19-.63.29-.99.29-.54 0-1.05-.23-1.41-.63l-.05-.06-.07-.04c-.65-.34-1.05-1-1.05-1.73 0-.3.07-.6.2-.87l.12-.25L1.15 7c-.13-.27-.2-.56-.2-.87 0-.9.61-1.68 1.48-1.89l.31-.08.05-.34a1.926 1.926 0 012.38-1.58l.32.08.18-.31c.35-.6.99-.97 1.67-.97.44 0 .86.15 1.2.42l-.36.36v-.01l-.25.26c-.33.27-.74.42-.89.4 0 0-.67-.1-.67-.11-.67-.13-.87.86-.14 1.02.01 0 .67.11.67.11.02 0 .05 0 .07.01-.11.37-.15.77-.1 1.12 0 0 .17.99.15.99.11.52 1.06.36.93-.18 0-.01-.15-.99-.15-.99-.05-.37.12-.94.36-1.19l.39-.4c.05-.05.1-.09.15-.14l.74-.76c.4-.18.83-.27 1.27-.27 1.55 0 2.86 1.12 3.11 2.67l.04.25.21.12c.61.35.98 1 .98 1.7 0 .36-.1.7-.28 1.01z'
]
const svgPaths20 = [
  'M20 8.01c0-1.26-.61-2.43-1.61-3.12C17.86 2.5 15.8.79 13.4.79c-.58 0-1.14.1-1.69.29A3.533 3.533 0 009.17 0C8.05 0 7 .55 6.32 1.45c-.15-.02-.3-.03-.45-.03-1.63 0-3.03 1.12-3.46 2.71C.97 4.65 0 6.05 0 7.66c0 .48.09.95.26 1.4-.17.44-.26.91-.26 1.39 0 1.38.72 2.64 1.89 3.29.67.7 1.59 1.09 2.54 1.09.61 0 1.19-.15 1.71-.45.68.82 1.68 1.3 2.73 1.3.66 0 1.28-.18 1.83-.52.61.49 1.34.81 2.11.91 1.3 1.43 2.3 3.28 2.31 3.3 0 0 .35.61.33.61.96-.01 1.77-.2 1.64-1.3.01.02-.92-2.89-.92-2.89.52-.26.94-.69 1.21-1.23 1.12-.66 1.84-1.91 1.84-3.26 0-.3-.03-.6-.1-.89.57-.64.88-1.51.88-2.4zm-1.54 1.28l-.18-.2-.77-.84c-.33-.37-.67-1.17-.73-1.73 0 0-.13-1.25-.13-1.26-.06-.74-1.17-.73-1.13.14 0 .02.13 1.26.13 1.26.04.36.15.77.3 1.17-.08-.01-.15-.02-.22-.02 0 0-2.57-.12-2.57-.13-.73-.03-.89 1.22-.05 1.25l2.57.13c.53.03 1.29.37 1.61.72l.61.67.02.06c.1.27.14.55.14.83 0 .93-.51 1.77-1.34 2.18l-.2.1-.09.23c-.19.48-.6.82-1.1.93l-.67.14.87 2.75c-.48-.76-1.19-1.79-2.02-2.67l-.15-.16-.21-.02c-.51-.04-.99-.21-1.42-.48l1.7-1.48c.44-.39 1.04-.55 1.24-.49 0 0 .78.22.78.23.78.2 1.03-.92.29-1.21l-.78-.23c-.69-.2-1.67.22-2.24.72l-1.91 1.66-.39.32c-.44.36-.93.55-1.5.55-.8 0-1.54-.41-1.97-1.07v-1.88c0-.5.21-.98.34-1.07 0 0 .65-.43.64-.43.87-.69.21-1.57-.64-1.14 0-.01-.65.43-.65.43-.31.2-.54.56-.7.97-.13-.13-.28-.25-.43-.35 0 0-1.91-1.26-1.91-1.28-.81-.56-1.5.63-.61 1.11 0-.02 1.89 1.28 1.89 1.28.46.31.77.97.77 1.36v.84c-.43.24-.78.36-1.24.36-.67 0-1.31-.29-1.77-.79l-.07-.08-.09-.05a2.425 2.425 0 01-1.31-2.16c0-.38.09-.74.25-1.08l.15-.31-.14-.33c-.17-.34-.25-.7-.25-1.08 0-1.13.76-2.1 1.85-2.37l.39-.09.07-.43a2.41 2.41 0 012.39-2.05c.19 0 .39.02.58.07l.4.1.22-.38A2.41 2.41 0 019.17 1.3c.55 0 1.08.19 1.5.53l-.44.45-.01-.01-.31.31c-.41.35-.92.53-1.11.5 0 0-.84-.13-.84-.14-.83-.15-1.09 1.08-.18 1.29.01 0 .84.14.84.14.03 0 .06 0 .09.01-.14.46-.18.96-.12 1.4 0 0 .21 1.24.19 1.23.13.65 1.32.44 1.16-.22 0-.01-.19-1.23-.19-1.23-.07-.48.15-1.19.45-1.5l.48-.5c.07-.06.13-.12.19-.18l.93-.95c.5-.23 1.04-.34 1.59-.34 1.93 0 3.57 1.4 3.89 3.34l.05.31.26.15a2.445 2.445 0 01.87 3.4z'
]

export const PredictiveAnalysisIcon: IconComponent = memo(
  forwardRef(function PredictiveAnalysisIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="predictive-analysis" {...props} />
  })
)
