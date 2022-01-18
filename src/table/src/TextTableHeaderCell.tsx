import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import TableHeaderCell from './TableHeaderCell'

const TextTableHeaderCell = memo(function TextTableHeaderCell(props) {
  const { children, isSortable, sortOrder, textProps, ...rest } = props

  return (
    <TableHeaderCell {...rest}>
      <Box flex="1" {...textProps}>
        {children}{' '}
      </Box>
    </TableHeaderCell>
  )
})

TextTableHeaderCell.propTypes = {
  /**
   * Composes the TableHeaderCell component as the base.
   */
  ...TableHeaderCell.propTypes,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
}

export default TextTableHeaderCell
