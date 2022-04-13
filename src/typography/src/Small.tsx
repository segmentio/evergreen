import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'

export interface SmallOwnProps {}

export type SmallProps = PolymorphicBoxProps<'small', SmallOwnProps>

const Small: React.FC<SmallProps> = memo(
  forwardRef(function Small(props, ref) {
    return <Box ref={ref} is="small" fontSize="85%" {...props} />
  })
)

export default Small
