import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

const emptyObject = {}

const Text = memo(
  forwardRef(function Text(props, ref) {
    const { className, color: colorProp = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()
    const { colors, fontFamilies } = theme

    const color = colorProp === 'none' || colorProp === 'default' ? 'default' : colorProp

    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    const themedProps = useStyleConfig('Text', { size }, emptyObject, emptyObject)

    return (
      <Box
        is="span"
        ref={ref}
        {...themedProps}
        fontFamily={themedFontFamily}
        color={themedColor}
        className={className}
        {...restProps}
      />
    )
  })
)

Text.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600, `small`, `medium`, `large`.
   */
  size: PropTypes.oneOf([300, 400, 500, 600, 'small', 'medium', 'large']),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Text
