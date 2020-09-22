import React, { memo, forwardRef, useRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useListBehavior , useStyleConfig, useMergedRef } from '../../hooks'
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
      className,
      disabled,
      height,
      icon,
      isHighlighted,
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
      isSelectable,
      isSelected,
      onSelect,
      ref
    })

    const callbackRef = useMergedRef(ref, forwardedRef)

    return (
      <Pane
        className={cx(themedClassName, className)}
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
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Option
