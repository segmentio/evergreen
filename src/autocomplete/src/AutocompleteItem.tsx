import React, { memo, forwardRef } from 'react'
import { Image } from '../../image'
import Option, { OptionProps } from '../../select-menu/src/Option'

export interface AutocompleteItemProps extends OptionProps {}

const AutocompleteItem: React.FC<AutocompleteItemProps> = memo(
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

export default AutocompleteItem
