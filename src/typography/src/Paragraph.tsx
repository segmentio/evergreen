import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

const emptyObject = {}

const Paragraph = memo(
  forwardRef(function Paragraph(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { color = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()

    const { colors, fontFamilies } = theme

    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    const textStyle = useStyleConfig('Paragraph', { size }, emptyObject, emptyObject)

    return <Box is="p" ref={ref} {...textStyle} fontFamily={themedFontFamily} color={themedColor} {...restProps} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Paragraph.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Paragraph
