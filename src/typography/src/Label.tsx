import React from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import { TextOwnProps } from './Text'

export type LabelOwnProps = TextOwnProps

export type LabelProps<T extends React.ElementType<any> = 'label'> = PolymorphicBoxProps<T, LabelOwnProps>

const pseudoSelectors = {}
const internalStyles = {}

const _Label = <T extends React.ElementType<any> = 'label'>(props: LabelProps<T>, ref: ForwardedRef<T>) => {
  const { className, size = 400, ...restProps } = props

  const { className: themedClassName, ...boxProps } = useStyleConfig('Label', { size }, pseudoSelectors, internalStyles)

  return <Box is="label" ref={ref} className={cx(themedClassName, className)} {...boxProps} {...restProps} />
}

const Label = memoizeWithForwardedRef(_Label)

export default Label
