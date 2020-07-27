import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M14.194 3.54L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l5.698 3.255zm.75.71a1 1 0 01.056.33v6.84a1 1 0 01-.504.868L8.5 15.714V8.277l6.444-4.027zm-13.888 0L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z'
]
const svgPaths20 = [
  'M1.953 4.481l7.41-4.02c.394-.215.88-.215 1.275 0l7.409 4.02L10 9.22 1.953 4.48zm-.817.68L9.5 10.085v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547zm17.728 0c.088.166.136.353.136.546v8.35c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l8.364-4.926z'
]

export const CubeIcon = memo(
  forwardRef(function CubeIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="cube"
        {...props}
      />
    )
  })
)
