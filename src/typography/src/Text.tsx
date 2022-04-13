import React, { forwardRef, memo } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'
import { Size, FontFamily } from '../../types'

export type TextProps = PolymorphicBoxProps<'span', TextOwnProps>
export type TextOwnProps = {
  size?: Size
  fontFamily?: FontFamily | string
}

const emptyObject = {}

const Text: React.FC<TextProps> = memo(
  forwardRef(function Text(props, ref) {
    const { className, color: colorProp = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()
    const { colors, fontFamilies } = theme

    const color = colorProp === 'none' || colorProp === 'default' ? 'default' : colorProp

    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    // @ts-expect-error ts-migrate(2538) FIXME: Type 'false' cannot be used as an index type.
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    const textStyle = useStyleConfig('Text', { size }, emptyObject, emptyObject)

    return (
      <Box
        is="span"
        ref={ref}
        {...textStyle}
        fontFamily={themedFontFamily}
        color={themedColor}
        className={className}
        {...restProps}
      />
    )
  })
)

export default Text
