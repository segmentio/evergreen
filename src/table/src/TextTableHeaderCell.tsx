import React, { memo } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { TextOwnProps } from "../../typography/src/Text";
import { TableCellOwnProps } from "./TableCell";
import TableHeaderCell from './TableHeaderCell'

export type TextTableHeaderCellProps = PolymorphicBoxProps<'div', TextTableHeaderCellOwnProps>;
export type TextTableHeaderCellOwnProps = TableCellOwnProps & {
      textProps?: PolymorphicBoxProps<'span', TextOwnProps>
    };

const TextTableHeaderCell: React.FC<TextTableHeaderCellProps> = memo(function TextTableHeaderCell(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isSortable' does not exist on type 'Prop... Remove this comment to see the full error message
  const { children, isSortable, sortOrder, textProps, ...rest } = props

  return (
    <TableHeaderCell {...rest}>
      <Box flex="1" {...textProps}>
        {children}{' '}
      </Box>
    </TableHeaderCell>
  )
})

export default TextTableHeaderCell
