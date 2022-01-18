import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

const emptyObject = {}

const Text = memo(
  forwardRef(function Text(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { className, color: colorProp = 'default', fontFamily = 'ui', size = 400, ...restProps } = props

    const theme = useTheme()
    const { colors, fontFamilies } = theme

    // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
    const color = colorProp === 'none' || colorProp === 'default' ? 'default' : colorProp

    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Text.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Text
