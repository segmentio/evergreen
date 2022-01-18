import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../image'
import Option from '../../select-menu/src/Option'

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      <Option ref={ref} isHighlighted={isHighlighted} isSelected={isSelected} style={style} {...restProps}>
        {restProps.icon && <Image src={restProps.icon} width={24} marginRight={8} />}
        {children}
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
