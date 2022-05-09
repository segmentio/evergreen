import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import Text, { TextOwnProps } from './Text'

export type StrongProps = PolymorphicBoxProps<'strong', StrongOwnProps>
export type StrongOwnProps = TextOwnProps

const Strong: React.FC<StrongProps> = memo(
  forwardRef(function Strong(props, ref) {
    return <Text is="strong" fontWeight={600} {...props} ref={ref} />
  })
)

export default Strong
