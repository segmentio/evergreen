import React, { memo, forwardRef } from 'react'
import { IconComponent } from "../../types";
import Icon from '../src/Icon'

const svgPaths16 = [
  'M14 2h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V4h-1a1 1 0 010-2h1V1a1 1 0 012 0v1zM9.136.65a3.001 3.001 0 00.992 5.222c.018.058.038.115.059.172L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l.64.365zM15 7.235v4.184a1 1 0 01-.504.868L8.5 15.714V8.277l2.187-1.367A2.994 2.994 0 0013 8c.768 0 1.47-.289 2-.764zM1.056 4.25L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z'
]
const svgPaths20 = [
  'M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-3.969 4.435L10 9.22 1.953 4.48l7.41-4.02c.394-.215.88-.215 1.275 0l1.33.721A3.001 3.001 0 0013 7c0 .148.01.293.031.435zm.319.972A3 3 0 0019 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l2.85-1.679zM1.136 5.16L9.5 10.086v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547z'
]

export const CubeAddIcon: IconComponent = memo(
  forwardRef(function CubeAddIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="cube-add" {...props} />
  })
)
