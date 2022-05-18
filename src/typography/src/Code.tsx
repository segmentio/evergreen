import React from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { DefaultAppearance } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'
import { MinimalAppearance } from '../../types/minimal-appearance'
import Text, { TextOwnProps } from './Text'

export type CodeOwnProps = TextOwnProps & { appearance?: DefaultAppearance | MinimalAppearance }
export type CodeProps<T extends React.ElementType<any> = 'pre'> = PolymorphicBoxProps<T, CodeOwnProps>

const pseudoSelectors = {}
const internalStyles = {}

const _Code = <T extends React.ElementType<any> = 'code'>(props: CodeProps<T>, ref: ForwardedRef<T>) => {
  const { appearance = 'default', className, ...restProps } = props

  const styleProps = useStyleConfig('Code', { appearance }, pseudoSelectors, internalStyles)

  return <Text is="code" ref={ref} {...styleProps} fontFamily="mono" className={className} {...restProps} />
}

const Code = memoizeWithForwardedRef(_Code)

export default Code
