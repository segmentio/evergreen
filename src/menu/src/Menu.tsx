import React, { memo, useEffect, useRef } from 'react'
import { Pane } from '../../layers'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import MenuOption from './MenuOption'
import MenuOptionsGroup from './MenuOptionsGroup'

export interface MenuProps {
  children: React.ReactNode[] | React.ReactNode
}
type MenuComponent = React.FC<MenuProps> & {
  Item: typeof MenuItem
  Divider: typeof MenuDivider
  Group: typeof MenuGroup
  Option: typeof MenuOption
  OptionsGroup: typeof MenuOptionsGroup
}

const Menu: MenuComponent = (memo(function Menu(props) {
  const menuRef = useRef(null)

  const firstItem = useRef()
  const lastItem = useRef()

  const menuItems = useRef()

  useEffect(() => {
    const currentMenuRef = menuRef.current
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any[]' is not assignable to type 'undefined'... Remove this comment to see the full error message
    menuItems.current = [
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      ...currentMenuRef.querySelectorAll('[role="menuitemradio"]:not([disabled]), [role="menuitem"]:not([disabled])')
    ]

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    firstItem.current = menuItems.current[0]
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    lastItem.current = menuItems.current[menuItems.current.length - 1]

    // Go to next/previous item if it exists
    // or loop around
    const focusNext = (currentItem: any, startItem: any) => {
      // Determine which item is the startItem (first or last)
      const goingDown = startItem === firstItem.current

      // Helper function for getting next legitimate element
      const move = (elem: any) => {
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        const indexOfItem = menuItems.current.indexOf(elem)

        if (goingDown) {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          if (indexOfItem < menuItems.current.length - 1) {
            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            return menuItems.current[indexOfItem + 1]
          }

          return startItem
        }

        if (indexOfItem - 1 > -1) {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          return menuItems.current[indexOfItem - 1]
        }

        return startItem
      }

      // Make first move
      const nextItem = move(currentItem)

      // Focus the first one that's not disabled
      nextItem.focus()
    }

    function onKeyPressListener(e: any) {
      const { target } = e
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      const menuItem = menuItems.current && menuItems.current.find((item: any) => item === target)

      if (!menuItem) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        focusNext(menuItem, firstItem.current)
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        focusNext(menuItem, lastItem.current)
      }

      if (e.key === 'Home') {
        e.preventDefault()
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        firstItem.current.focus()
      }

      if (e.key === 'End') {
        e.preventDefault()
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        lastItem.current.focus()
      }
    }

    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    currentMenuRef.addEventListener('keydown', onKeyPressListener)

    return () => {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      currentMenuRef.removeEventListener('keydown', onKeyPressListener)
    }
  }, [menuRef])

  const { children } = props

  const renderEmptyChildren = () => {
    return (
      <MenuGroup>
        <MenuItem disabled>No items...</MenuItem>
      </MenuGroup>
    )
  }
  return (
    <Pane is="nav" ref={menuRef} role="menu" outline="none">
      {children || renderEmptyChildren()}
    </Pane>
  )
}) as any) as MenuComponent

Menu.Item = MenuItem
Menu.Divider = MenuDivider
Menu.Group = MenuGroup
Menu.Option = MenuOption
Menu.OptionsGroup = MenuOptionsGroup

export default Menu
