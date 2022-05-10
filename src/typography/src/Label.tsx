import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { TextOwnProps } from './Text'

export type LabelProps = PolymorphicBoxProps<'label', LabelOwnProps>
export type LabelOwnProps = TextOwnProps

const pseudoSelectors = {}
const internalStyles = {}

const Label: React.FC<LabelProps> = memo(
  forwardRef(function Label(props, ref) {
    const { className, size = 400, ...restProps } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Label',
      { size },
      pseudoSelectors,
      internalStyles
    )

    return <Box is="label" ref={ref} className={cx(themedClassName, className)} {...boxProps} {...restProps} />
  })
)

export default Label
