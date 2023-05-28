import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

const emptyObject = {}

const Paragraph = memo(
  forwardRef(function Paragraph(props, ref) {
    const { color = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()

    const { colors, fontFamilies } = theme

    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    const themedProps = useStyleConfig('Paragraph', { size }, emptyObject, emptyObject)

    return <Box is="p" ref={ref} {...themedProps} fontFamily={themedFontFamily} color={themedColor} {...restProps} />
  })
)

Paragraph.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500, `small`, `medium`, `large`.
   */
  size: PropTypes.oneOf([300, 400, 500, 'small', 'medium', 'large']),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Paragraph
