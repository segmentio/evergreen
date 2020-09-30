import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Option } from '../../select-menu'

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, onClick, ...restProps } = props

    return (
      <Option
        ref={ref}
        isHighlighted={isHighlighted}
        isSelected={isSelected}
        onSelect={onClick}
        label={children}
        {...restProps}
      />
    )
  })
)

AutocompleteItem.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  onClick: PropTypes.func
}

export default AutocompleteItem
