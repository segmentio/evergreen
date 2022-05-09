import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import Text, { TextOwnProps } from './Text'

export type PreProps = PolymorphicBoxProps<'pre', PreOwnProps>
export type PreOwnProps = TextOwnProps

const Pre: React.FC<PreProps> = memo(
  forwardRef(function Pre(props, ref) {
    return <Text is="pre" marginTop={0} marginBottom={0} {...props} ref={ref} />
  })
)

export default Pre
