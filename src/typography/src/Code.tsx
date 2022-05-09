import React, { forwardRef, memo } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { DefaultAppearance } from '../../types'
import { MinimalAppearance } from '../../types/minimal-appearance'
import Text, { TextOwnProps } from './Text'

export type CodeProps = PolymorphicBoxProps<'code', CodeOwnProps>
export type CodeOwnProps = TextOwnProps & { appearance?: DefaultAppearance | MinimalAppearance }

const pseudoSelectors = {}
const internalStyles = {}

const Code: React.FC<CodeProps> = memo(
  forwardRef(function Code(props, ref) {
    const { appearance = 'default', className, ...restProps } = props

    const styleProps = useStyleConfig('Code', { appearance }, pseudoSelectors, internalStyles)

    return <Text is="code" ref={ref} {...styleProps} fontFamily="mono" className={className} {...restProps} />
  })
)

export default Code
