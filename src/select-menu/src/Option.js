import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Image } from '../../image'
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
      disabled,
      height,
      icon,
      isHighlighted,
      isSelectable,
      isSelected,
      item,
      itemRenderer,
      label,
      onDeselect,
      onSelect,
      style,
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
        <TextTableCell
          borderRight={null}
          flex={1}
          alignSelf="stretch"
          height={height}
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {typeof itemRenderer === 'function' ? (
              itemRenderer(item)
            ) : (
              <>
                {icon && <Image src={icon} width={24} marginRight={8} />}
                {label}
              </>
            )}
          </Pane>
        </TextTableCell>
      </TableRow>
    )
  })
)

Option.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.number,
  icon: PropTypes.string,
  isHighlighted: PropTypes.bool,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  item: PropTypes.any,
  itemRenderer: PropTypes.func,
  label: PropTypes.string,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  style: PropTypes.any
}

export default Option
