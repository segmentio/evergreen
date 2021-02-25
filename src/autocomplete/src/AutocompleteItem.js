import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Image from '../../image'
import Option from '../../select-menu/src/Option'

const renderItemContent = props => {
  return (
    <>
      {props.icon && <Image src={props.icon} width={24} marginRight={8} />}
      {props.label}
    </>
  )
}

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      <Option
        ref={ref}
        isHighlighted={isHighlighted}
        isSelected={isSelected}
        style={style}
        {...restProps}
      >
        {renderItemContent({
          label: children,
          icon: restProps.icon
        })}
      </Option>
    )
  })
)

AutocompleteItem.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool
}

export default AutocompleteItem
