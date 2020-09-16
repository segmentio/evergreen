import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig, useListBehavior, useMergedRef } from '../../hooks/'
import { Image } from '../../image'
import { Pane } from '../../layers'
import { useTheme } from '../../theme'
import { Text } from '../../typography'

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

    const { tokens } = useTheme()

    const disableProps = { color: 'muted' }
    const selectedProps = { color: tokens.selectedOptionColor }
    const emptyProps = {}

    let textProps = emptyProps
    if (disabled) {
      textProps = disableProps
    }

    if (isSelected) {
      textProps = selectedProps
    }

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
        {...listBehaviorProps}
        {...rest}
        ref={callbackRef}
      >
        <Text
          height={height}
          display="flex"
          alignItems="center"
          {...textProps}
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
