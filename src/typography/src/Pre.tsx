import React from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import Text, { TextOwnProps } from './Text'

export type PreOwnProps = TextOwnProps

export type PreProps<T extends React.ElementType<any> = 'pre'> = PolymorphicBoxProps<T, PreOwnProps>

const _Pre = <T extends React.ElementType<any> = 'pre'>(props: PreProps<T>, ref: ForwardedRef<T>) => {
  return <Text is="pre" marginTop={0} marginBottom={0} {...props} ref={ref} />
}

const Pre = memoizeWithForwardedRef(_Pre)

export default Pre
