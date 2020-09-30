import React, { memo, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useListBehavior , useStyleConfig, useMergedRef } from '../../hooks'
import { Image } from '../../image'
import { Pane } from '../../layers'

export const pseudoSelectors = {
  _active: '&[aria-current="true"]:active, &[data-isselectable="true"]:active',
  _before: '&:before',
  _disabled: '&[disabled]',
  _focus: ':focus, &[aria-selected="true"]',
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
      isMultiSelect = false,
      isSelectable,
      isSelected,
      label,
      onDeselect,
      onSelect,
      ...rest
    } = props
    const ref = useRef(null)

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Option',
      emptyObject,
      pseudoSelectors,
      internalStyles
    )

    const listBehaviorProps = useListBehavior({
      disabled,
      isHighlighted,
      isMultiSelect,
      isSelectable,
      isSelected,
      onSelect,
      ref
    })

    const callbackRef = useMergedRef(ref, forwardedRef)

    return (
      <Pane
        className={themedClassName}
        {...boxProps}
        {...rest}
        {...listBehaviorProps}
        ref={callbackRef}
      >
        <Box
          is="span"
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
        </Box>
      </Pane>
    )
  })
)

Option.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Option
