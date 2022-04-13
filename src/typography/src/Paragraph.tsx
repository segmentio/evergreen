import React, { forwardRef, memo } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Size, FontFamily } from '../../types'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

export type ParagraphProps = PolymorphicBoxProps<'p', ParagraphOwnProps>
export type ParagraphOwnProps = {
  size?: Size
  fontFamily?: FontFamily
}

const emptyObject = {}

const Paragraph: React.FC<ParagraphProps> = memo(
  forwardRef(function Paragraph(props, ref) {
    const { color = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()

    const { colors, fontFamilies } = theme

    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    // @ts-expect-error ts-migrate(2538) FIXME: Type 'false' cannot be used as an index type.
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    const textStyle = useStyleConfig('Paragraph', { size }, emptyObject, emptyObject)

    return <Box is="p" ref={ref} {...textStyle} fontFamily={themedFontFamily} color={themedColor} {...restProps} />
  })
)

export default Paragraph
