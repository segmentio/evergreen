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
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, isNumber = false, placeholder, textProps, ...rest } = props

    return (
      <TableCell ref={ref} {...rest}>
        <Text
          size={300}
          flex="1"
          title={typeof children === 'string' ? children : undefined}
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
TextTableCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
