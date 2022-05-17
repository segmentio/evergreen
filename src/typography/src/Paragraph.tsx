import React from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { useTheme } from '../../theme'
import { Size, FontFamily } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'

export type ParagraphOwnProps = {
  size?: Size
  fontFamily?: FontFamily
}

export type ParagraphProps<T extends React.ElementType<any> = 'p'> = PolymorphicBoxProps<T, ParagraphOwnProps>

const emptyObject = {}

const _Paragraph = <T extends React.ElementType<any> = 'p'>(props: ParagraphProps<T>, ref: ForwardedRef<T>) => {
  const { color = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

  const theme = useTheme()

  const { colors, fontFamilies } = theme

  const themedFontFamily = fontFamilies[fontFamily] || fontFamily
  // @ts-expect-error ts-migrate(2538) FIXME: Type 'false' cannot be used as an index type.
  const themedColor = colors[color] || (colors.text && colors.text[color]) || color

  const textStyle = useStyleConfig('Paragraph', { size }, emptyObject, emptyObject)

  return <Box is="p" ref={ref} {...textStyle} fontFamily={themedFontFamily} color={themedColor} {...restProps} />
}

const Paragraph = memoizeWithForwardedRef(_Paragraph)

export default Paragraph
