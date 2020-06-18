import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import TableCell from './TableCell'

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const TextTableCell = memo(props => {
  const { children, textProps, isNumber, placeholder, ...rest } = props

  return (
    <TableCell {...rest}>
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

TextTableCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes,

  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
}

TextTableCell.defaultProps = {
  isNumber: false
}

export default TextTableCell
