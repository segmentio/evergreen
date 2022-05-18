import React from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'

export interface SmallOwnProps {}

export type SmallProps<T extends React.ElementType<any> = 'small'> = PolymorphicBoxProps<T, SmallOwnProps>

const _Small = <T extends React.ElementType<any> = 'small'>(props: SmallProps<T>, ref: ForwardedRef<T>) => {
  return <Box ref={ref} is="small" fontSize="85%" {...props} />
}

const Small = memoizeWithForwardedRef(_Small)

export default Small
