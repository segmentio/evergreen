import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.399 9.01L1.527 15.875c-.535.267-1.175.081-1.421-.427A.953.953 0 010 15V10l8-2-8-2V1c0-.528.407-1 1.004-1 .169 0 .416.04.567.116L15.403 7.07a1.084 1.084 0 01-.005 1.939z'
]
const svgPaths20 = [
  'M1.754.135L19.393 9.06c.57.288.775.943.458 1.462-.107.176-.266.32-.458.418l-17.64 8.925c-.57.288-1.288.1-1.604-.418C.05 19.287 0 19.183 0 19v-7l11-2L0 8V1.075C0 .481.529 0 1.18 0c.201 0 .399.047.574.135z'
]

export const SendMessageIcon = memo(
  forwardRef(function SendMessageIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="send-message" {...props} />
  })
)
