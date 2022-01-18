import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import TableRow from '../../table/src/TableRow'
import TextTableCell from '../../table/src/TextTableCell'

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

const Option = memo(
  forwardRef(function Option(props, ref) {
    const {
      children,
      disabled,
      height,
      isHighlighted,
      isSelectable,
      isSelected,
      item,
      onDeselect,
      onSelect,
      style,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
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
        ref={ref}
      >
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <TextTableCell
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'never'.
          borderRight={null}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          flex={1}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          alignSelf="stretch"
          height={height}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          cursor={disabled ? 'default' : 'pointer'}
        >
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          <Pane alignItems="center" display="flex">
            {children}
          </Pane>
        </TextTableCell>
      </TableRow>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Option.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  height: PropTypes.number,
  isHighlighted: PropTypes.bool,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  item: PropTypes.any,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  style: PropTypes.any
}

export default Option
