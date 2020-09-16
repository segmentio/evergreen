import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useListBehavior, useStyleConfig } from '../../hooks'
import { Image } from '../../image'
import { Pane } from '../../layers'
import TextTableCell from '../../table/src/TextTableCell'

const disableProps = { color: 'muted' }
const selectedProps = { color: 'selected' }
const emptyProps = {}

const pseudoSelectors = {
  _focus: ':focus',
  _hover: ':hover',
  _active: '&[aria-current="true"]:active, &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"]',
  _isSelectable: '&[data-isselectable="true"]'
}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

/* eslint-disable react/prop-types */
const Option = memo(
  forwardRef(function Option(
    {
      disabled,
      height,
      icon,
      isHighlighted,
      isSelectable,
      isSelected,
      label,
      onDeselect,
      onSelect,
      style,
      ...rest
    },
    ref
  ) {
    let textProps = emptyProps
    if (disabled) {
      textProps = disableProps
    }

    if (isSelected) {
      textProps = selectedProps
    }

    const { getRef, ...listBehaviorProps } = useListBehavior({
      isSelectable,
      isSelected,
      disabled,
      onSelect,
      ref
    })

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Option',
      emptyProps,
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane
        style={style}
        ref={ref}
        className={themedClassName}
        {...listBehaviorProps}
        {...boxProps}
        {...rest}
      >
        <TextTableCell
          height={height}
          borderBottom="muted"
          textProps={textProps}
          paddingX={16}
          borderRight={null}
          flex={1}
          alignSelf="stretch"
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {icon && <Image src={icon} width={24} marginRight={8} />}
            {label}
          </Pane>
        </TextTableCell>
      </Pane>
    )
  })
)
/* eslint-enable react/prop-types */

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      <Option
        ref={ref}
        isHighlighted={isHighlighted}
        isSelected={isSelected}
        label={children}
        style={style}
        {...restProps}
      />
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
