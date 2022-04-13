import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { Text } from '../../typography'
import { TextOwnProps } from '../../typography/src/Text'
import TableCell, { TableCellOwnProps } from './TableCell'

export interface TextTableCellOwnProps extends TableCellOwnProps {
  /**
   * Adds textAlign: right and fontFamily: mono.
   */
  isNumber?: boolean
  /**
   * Pass additional props to the Text component.
   */
  textProps?: PolymorphicBoxProps<'span', TextOwnProps>
}

export type TextTableCellProps = PolymorphicBoxProps<'div', TextTableCellOwnProps>

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const TextTableCell: React.FC<TextTableCellProps> = memo(
  forwardRef(function TextTableCell(props, ref) {
    const { children, isNumber = false, textProps, ...rest } = props

    return (
      <TableCell ref={ref} {...rest}>
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: ReactNode; alignContent?: number... Remove this comment to see the full error message */}
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

export default TextTableCell
