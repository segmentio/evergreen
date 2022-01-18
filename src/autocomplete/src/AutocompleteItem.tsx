import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../image'
import Option from '../../select-menu/src/Option'

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      <Option ref={ref} isHighlighted={isHighlighted} isSelected={isSelected} style={style} {...restProps}>
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        {restProps.icon && <Image src={restProps.icon} width={24} marginRight={8} />}
        {children}
      </Option>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
AutocompleteItem.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool
}

export default AutocompleteItem
