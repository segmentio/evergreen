import React from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { useTheme } from '../../theme'
import { Size, FontFamily } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'

export type TextOwnProps = {
  size?: Size
  fontFamily?: FontFamily | string
}

export type TextProps<T extends React.ElementType<any> = 'span'> = PolymorphicBoxProps<T, TextOwnProps>

const emptyObject = {}

const _Text = <T extends React.ElementType<any> = 'span'>(props: TextProps<T>, ref: ForwardedRef<T>) => {
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
      ref={ref as React.ForwardedRef<any>}
      {...textStyle}
      fontFamily={themedFontFamily}
      color={themedColor}
      className={className}
      {...restProps}
    />
  )
}

const Text = memoizeWithForwardedRef(_Text)

export default Text
