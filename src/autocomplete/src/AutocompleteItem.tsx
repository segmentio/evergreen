import React, { memo, forwardRef } from 'react'
import { Image } from '../../image'
import Option, { OptionProps } from '../../select-menu/src/Option'

export interface AutocompleteItemProps extends OptionProps {
  children?: JSX.Element | null
}

const AutocompleteItem: React.FC<AutocompleteItemProps> = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isHighlighted' does not exist on type 'A... Remove this comment to see the full error message
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: any[]; ref: ((instance: unknown)... Remove this comment to see the full error message
      <Option ref={ref} isHighlighted={isHighlighted} isSelected={isSelected} style={style} {...restProps}>
        {restProps.icon && <Image src={restProps.icon} width={24} marginRight={8} />}
        {children}
      </Option>
    )
  })
)

export default AutocompleteItem
