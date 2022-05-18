import React from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import Text, { TextOwnProps } from './Text'

export type StrongOwnProps = TextOwnProps

export type StrongProps<T extends React.ElementType<any> = 'strong'> = PolymorphicBoxProps<T, StrongOwnProps>

const _Strong = <T extends React.ElementType<any> = 'strong'>(props: StrongProps<T>, ref: ForwardedRef<T>) => {
  return <Text is="strong" fontWeight={600} {...props} ref={ref} />
}

const Strong = memoizeWithForwardedRef(_Strong)

export default Strong
