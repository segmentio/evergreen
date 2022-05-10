import React, { memo, useCallback } from 'react'
import { useClickable, useStyleConfig } from '../../hooks'
import { TickIcon } from '../../icons'
import { Pane } from '../../layers'
import { pseudoSelectors } from '../../table/src/TableRow'
import { DefaultAppearance } from '../../types'
import { Text } from '../../typography'

export interface MenuOptionProps {
  id?: string
  onSelect?: () => void
  isSelected?: boolean
  children?: JSX.Element
  secondaryText?: JSX.Element
  appearance?: DefaultAppearance
}

const noop = () => {}

const internalStyles = {
  display: 'flex',
  alignItems: 'center',
}

const MenuOption: React.FC<MenuOptionProps> = memo(function MenuOption(props) {
  const { id, children, appearance = 'default', onSelect = noop, secondaryText, isSelected = false } = props

  // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
  const handleClick = useCallback((e) => onSelect(e), [onSelect])

  const { onKeyDown, tabIndex } = useClickable()

  const { className: themedClassName, ...boxProps } = useStyleConfig(
    'MenuItem',
    { appearance },
    pseudoSelectors,
    internalStyles
  )

  const textProps = isSelected
    ? {
        color: 'selected',
        fontWeight: 500,
        marginLeft: 16,
      }
    : { marginLeft: 44 }

  return (
    <Pane
      id={id}
      role="menuitemradio"
      tabIndex={tabIndex}
      className={themedClassName}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      data-isselectable="true"
      aria-checked={isSelected}
      height={40}
      {...boxProps}
    >
      {isSelected && (
        <TickIcon aria-hidden color="selected" marginLeft={16} marginRight={-4} size={16} flexShrink={0} />
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

export default MenuOption
