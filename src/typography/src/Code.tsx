import React, { forwardRef, memo } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import Text, { TextOwnProps } from './Text'

export type CodeProps = PolymorphicBoxProps<'code', CodeOwnProps>
export type CodeOwnProps = TextOwnProps & { appearance?: 'default' | 'minimal' }

const pseudoSelectors = {}
const internalStyles = {}

const Code: React.FC<CodeProps> = memo(
  forwardRef(function Code(props, ref) {
    const { appearance = 'default', className, ...restProps } = props

    const styleProps = useStyleConfig('Code', { appearance }, pseudoSelectors, internalStyles)

    // @ts-expect-error ts-migrate(2322) FIXME: Type '"code"' is not assignable to type '"span" | ... Remove this comment to see the full error message
    return <Text is="code" ref={ref} {...styleProps} fontFamily="mono" className={className} {...restProps} />
  })
)

export default Code
