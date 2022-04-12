import React, { memo, forwardRef } from 'react'
import { IconComponent } from "../../types";
import Icon from '../src/Icon'

const svgPaths16 = [
  'M13.928.629A1 1 0 0012.89.006l-9 1a1 1 0 00-.747.48L.431 6.005A.5.5 0 000 6.5v3a.5.5 0 00.5.5h2.798c.341 0 .672.116.938.329l1.952 1.561A.5.5 0 006.5 12H10a.5.5 0 00.4-.2l.9-1.2a1.5 1.5 0 011.2-.6h3a.5.5 0 00.5-.5v-4a.5.5 0 00-.308-.462L13.928.628zM12.36 2.094l-.006-.016-3.166.352 1.121 3.083 2.052-3.419zm.467 1.166l-1.649 2.748 2.51-.594-.861-2.154zM9.603 6.496L8.166 2.543l-3.563.396L2.766 6H3.5a.5.5 0 01.367.16L6.218 8.7h1.914l1.452-2.177a.5.5 0 01.019-.027zM2.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm11 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
]
const svgPaths20 = [
  'M15.836 1.014a1 1 0 011.058.539l2.482 4.962.02-.004a.5.5 0 01.604.49v4.5a.5.5 0 01-.5.5h-3.93a1.5 1.5 0 00-1.248.667l-1.406 2.11A.5.5 0 0112.5 15H8a.5.5 0 01-.354-.146l-2.414-2.415A1.5 1.5 0 004.172 12H.5a.5.5 0 01-.5-.5v-3A.5.5 0 01.5 8h.823L3.072 3.63a1 1 0 01.764-.615l12-2zm.289 3.472l1.231 2.462-2.758.591 1.527-3.053zM14.5 3.264l-1.56 3.12-.252-.638-.825-2.043 2.637-.44zm-9.78 1.63l5.122-.854.988 2.445.899 2.27L10.232 11H7.707L4.854 8.147A.5.5 0 004.5 8H3.477l1.242-3.106zM3 19a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6z'
]

export const BuggyIcon: IconComponent = memo(
  forwardRef(function BuggyIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="buggy" {...props} />
  })
)
