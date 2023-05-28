import React, { memo, forwardRef } from 'react'
import merge from 'lodash.merge'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import TableRow from '../../table/src/TableRow'
import TextTableCell from '../../table/src/TextTableCell'

export const pseudoSelectors = {
  _active: '&[aria-current="true"]:active,&[data-isselectable="true"]:active',
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
      style: styleProp,
      ...rest
    } = props

    const { style: themedStyle, ...themedProps } = useStyleConfig(
      'Option',
      emptyObject,
      pseudoSelectors,
      internalStyles
    )

    const style = merge({}, styleProp, themedStyle)

    return (
      <TableRow
        isSelectable={isSelectable && !disabled}
        isHighlighted={isHighlighted}
        onSelect={onSelect}
        onDeselect={onDeselect}
        isSelected={isSelected}
        style={style}
        {...themedProps}
        {...rest}
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
