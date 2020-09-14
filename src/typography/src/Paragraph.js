import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import useStyleConfig from '../../hooks/use-style-config'

const emptyObject = {}

const Paragraph = memo(
  forwardRef(function Paragraph(props, ref) {
    const { marginTop, size = 400, ...restProps } = props

    const textStyle = useStyleConfig(
      'Paragraph',
      { size },
      emptyObject,
      emptyObject
    )

    return <Box is="p" ref={ref} {...textStyle} {...restProps} />
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
  size: PropTypes.oneOf([300, 400, 500]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Paragraph
