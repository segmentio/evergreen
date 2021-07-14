import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.398 9.01l-13.87 6.865c-.536.267-1.176.081-1.422-.427A.953.953 0 010 15v-4.838l8.67-2.168L0 5.923V1.001C0 .47.407 0 1.004 0c.169 0 .416.04.567.116L15.403 7.07a1.084 1.084 0 01-.005 1.939z'
]
const svgPaths20 = [
  'M1.754.135L19.393 9.06c.57.288.775.943.458 1.462-.107.176-.266.32-.458.418l-17.64 8.924c-.57.289-1.288.102-1.604-.417A1.001 1.001 0 010 18.925v-6.851L11.021 10 0 7.938V1.075C0 .481.529 0 1.18 0c.201 0 .399.047.574.135z'
]

export const SendMessageIcon = memo(
  forwardRef(function SendMessageIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="send-message" {...props} />
  })
)
