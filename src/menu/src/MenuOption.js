import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { TickIcon } from '../../icons'
import { useTheme } from '../../theme'

const noop = () => {}

const MenuOption = memo(function MenuOption(props) {
  const {
    id,
    children,
    appearance = 'default',
    onSelect = noop,
    secondaryText,
    isSelected = false
  } = props

  const handleClick = useCallback(e => onSelect(e), [onSelect])

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'Enter' || e.key === ' ') {
        onSelect(e)
        e.preventDefault()
      }
    },
    [onSelect]
  )

  const theme = useTheme()
  const themedClassName = theme.getMenuItemClassName(appearance, 'none')

  const textProps = isSelected
    ? {
        color: 'selected',
        fontWeight: 500,
        marginLeft: 16
      }
    : { marginLeft: 44 }

  return (
    <Pane
      id={id}
      role="menuitemradio"
      tabIndex={0}
      className={themedClassName}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      data-isselectable="true"
      aria-checked={isSelected}
      height={40}
      display="flex"
      alignItems="center"
    >
      {isSelected && (
        <TickIcon
          aria-hidden
          color="selected"
          marginLeft={16}
          marginRight={-4}
          size={16}
          flexShrink={0}
        />
      )}
      <Text {...textProps} marginRight={16} flex={1}>
        {children}
      </Text>
      {secondaryText && (
        <Text marginRight={16} color="muted">
          {secondaryText}
        </Text>
      )}
    </Pane>
  )
})

MenuOption.propTypes = {
  /**
   * The id attribute of the menu option.
   */
  id: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The icon before the label.
   */
  isSelected: PropTypes.bool,

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string
}

export default MenuOption
