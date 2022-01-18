import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import TableHeaderCell from './TableHeaderCell'

const TextTableHeaderCell = memo(function TextTableHeaderCell(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isSortable' does not exist on type '{ ch... Remove this comment to see the full error message
  const { children, isSortable, sortOrder, textProps, ...rest } = props

  return (
    <TableHeaderCell {...rest}>
      <Box flex="1" {...textProps}>
        {children}{' '}
      </Box>
    </TableHeaderCell>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
TextTableHeaderCell.propTypes = {
  /**
   * Composes the TableHeaderCell component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
  ...TableHeaderCell.propTypes,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
}

export default TextTableHeaderCell
