import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import MenuItem from './MenuItem'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
import MenuOption from './MenuOption'
import MenuOptionsGroup from './MenuOptionsGroup'

const Menu = memo(function Menu(props) {

  const menuRef = useRef(null)
  const firstItem = useRef()
  const lastItem = useRef()

  const menuItems = useRef()

  useEffect(() => {

    const currentMenuRef = menuRef.current

    menuItems.current = currentMenuRef ? [
      ...currentMenuRef.querySelectorAll(
        '[role="menuitemradio"]:not([disabled]), [role="menuitem"]:not([disabled])'
     )]
    : []

    if (menuItems.current.length === 0) {
      throw new Error('The menu has no menu items')
    }

    firstItem.current = menuItems.current[0]
    lastItem.current = menuItems.current[menuItems.current.length - 1]

    // Go to next/previous item if it exists
    // or loop around
    const focusNext = (currentItem, startItem) => {

      // Determine which item is the startItem (first or last)
      const goingDown = startItem === firstItem.current

      // Helper function for getting next legitimate element
      const move = elem => {
        const indexOfItem = menuItems.current.indexOf(elem)

        if (goingDown) {
          if (indexOfItem < menuItems.current.length - 1) {
            return menuItems.current[indexOfItem + 1]
          }

          return startItem
        }

        if (indexOfItem - 1 > -1) {
          return menuItems.current[indexOfItem - 1]
        }

        return startItem
      }

      // Make first move
      const nextItem = move(currentItem)

      // Focus the first one that's not disabled
      nextItem.focus()
    }

    function onKeyPressListener(e) {

      const { target } = e
      const menuItem = menuItems.current && menuItems.current.find((item) => item === target)

      if(!menuItem) {
        return
      }

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
        firstItem.current.focus()
      }

      if (e.key === 'End') {
        e.preventDefault()
        lastItem.current.focus()
      }
    }

    currentMenuRef.addEventListener('keydown', onKeyPressListener)

    return () => {
      currentMenuRef.removeEventListener('keydown', onKeyPressListener)
    }
  }, [menuRef])

  const { children } = props
  return (
    <Pane is="nav" ref={menuRef} role="menu" outline="none">
      {children}
    </Pane>
  )
})

Menu.Item = MenuItem
Menu.Divider = MenuDivider
Menu.Group = MenuGroup
Menu.Divider = MenuDivider
Menu.Group = MenuGroup
Menu.Option = MenuOption
Menu.OptionsGroup = MenuOptionsGroup

Menu.propTypes = {
  /**
   * The children of the component.
   */
  children: PropTypes.node
}

export default Menu
