import React, { memo, forwardRef } from 'react'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import TableRow, { TableRowOwnProps } from '../../table/src/TableRow'
import TextTableCell from '../../table/src/TextTableCell'

export interface OptionProps extends TableRowOwnProps {
  height?: number | string
  label?: string
  icon?: string
  item?: any
  disabled?: boolean
}

export const pseudoSelectors = {
  _active: '&[aria-current="true"]:active, &[data-isselectable="true"]:active',
  _before: '&:before',
  _disabled: '&[disabled]',
  _focus: ':focus',
  _hover: ':hover',
  _isSelectable: '&[data-isselectable="true"]',
  _selected: '&[aria-current="true"]'
}

const internalStyles = {
  alignItems: 'center',
  display: 'flex'
}

const emptyObject = {}

const Option: React.FC<OptionProps> = memo(
  forwardRef(function Option(props, ref) {
    const {
      children,
      disabled,
      height,
      isHighlighted,
      isSelectable,
      isSelected,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      item,
      onDeselect,
      onSelect,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'style' does not exist on type 'PropsWith... Remove this comment to see the full error message
      style,
      ...rest
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"Option"' is not assignable to p... Remove this comment to see the full error message
      'Option',
      emptyObject,
      pseudoSelectors,
      internalStyles
    )

    return (
      <TableRow
        className={themedClassName}
        isSelectable={isSelectable && !disabled}
        isHighlighted={isHighlighted}
        onSelect={onSelect}
        onDeselect={onDeselect}
        isSelected={isSelected}
        style={style}
        {...boxProps}
        {...rest}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '((instance: unknown) => void) | MutableRefOb... Remove this comment to see the full error message
        ref={ref}
      >
        <TextTableCell
          borderRight={null}
          flex={1}
          alignSelf="stretch"
          height={height}
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {children}
          </Pane>
        </TextTableCell>
      </TableRow>
    )
  })
)

export default Option
