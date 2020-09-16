import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig, useListBehavior, useMergedRef } from '../../hooks/'
import { Image } from '../../image'
import { Pane } from '../../layers'
import { Text } from '../../typography'

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
  forwardRef(function Option(props, forwardedRef) {
    const {
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
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Option',
      emptyObject,
      pseudoSelectors,
      internalStyles
    )

    const { getRef, ...listBehaviorProps } = useListBehavior({
      isSelectable,
      isSelected,
      disabled,
      onSelect
    })

    const callbackRef = useMergedRef(getRef, forwardedRef)

    return (
      <Pane
        style={style}
        className={themedClassName}
        {...boxProps}
        {...rest}
        {...listBehaviorProps}
        ref={callbackRef}
      >
        <Text
          height={height}
          display="flex"
          alignItems="center"
          paddingX={16}
          borderRight={null}
          flex={1}
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {icon && <Image src={icon} width={24} marginRight={8} />}
            {label}
          </Pane>
        </Text>
      </Pane>
    )
  })
)

Option.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Option
