import React, { memo, forwardRef, useRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useStyleConfig, useMergedRef } from '../../hooks'
import { Pane } from '../../layers'
import { pseudoSelectors } from '../../select-menu/src/Option'
import { Text } from '../../typography'


const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const emptyObject = {}

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, forwardedRef) {
    const {
      children,
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

    const callbackRef = useMergedRef(ref, forwardedRef)

    return (
      <Pane
        className={cx(themedClassName, className)}
        {...boxProps}
        {...rest}
        aria-current={isSelected}
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
            {children}
          </Pane>
        </Text>
      </Pane>
    )
  })
)

AutocompleteItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
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

export default AutocompleteItem

