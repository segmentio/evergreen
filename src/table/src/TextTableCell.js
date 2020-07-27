import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import TableCell from './TableCell'

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const TextTableCell = memo(
  forwardRef(function TextTableCell(props, ref) {
    const {
      children,
      textProps,
      isNumber = false,
      placeholder,
      ...rest
    } = props

    return (
      <TableCell ref={ref} {...rest}>
        <Text
          size={300}
          flex="1"
          {...ellipsis}
          {...(isNumber ? { fontFamily: 'mono' } : {})}
          {...textProps}
        >
          {children}
        </Text>
      </TableCell>
    )
  })
)

TextTableCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes,

  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
}

export default TextTableCell
