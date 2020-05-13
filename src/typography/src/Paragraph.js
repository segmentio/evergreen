import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

const Paragraph = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const { size, color, fontFamily, marginTop, ...restProps } = props

    const {
      marginTop: defaultMarginTop,
      ...textStyle
    } = theme.getParagraphStyle(size)

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="p"
        innerRef={ref}
        color={theme.getTextColor(color)}
        fontFamily={theme.getFontFamily(fontFamily)}
        marginTop={finalMarginTop || 0}
        marginBottom={0}
        {...textStyle}
        {...restProps}
      />
    )
  })
)

Paragraph.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired
}

Paragraph.defaultProps = {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
}

export default Paragraph
