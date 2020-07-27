import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import TableHeaderCell from './TableHeaderCell'

const TextTableHeaderCell = memo(function TextTableHeaderCell(props) {
  const { children, textProps, isSortable, sortOrder, ...rest } = props

  return (
    <TableHeaderCell {...rest}>
      <Text fontWeight={500} size={300} flex="1" {...textProps}>
        {children}{' '}
      </Text>
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
