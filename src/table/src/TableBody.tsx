import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'

export interface TableBodyOwnProps extends PaneOwnProps {}

export type TableBodyProps = PolymorphicBoxProps<'div', TableBodyOwnProps>

const TableBody: React.FC<TableBodyProps> = memo(
  forwardRef(function TableBody(props, ref) {
    const { children, ...rest } = props

    return (
      <Pane ref={ref} data-evergreen-table-body flex="1" overflowY="auto" {...rest}>
        {children}
      </Pane>
    )
  })
)

export default TableBody
