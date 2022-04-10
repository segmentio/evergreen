import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import MenuOption from './MenuOption'
import MenuOptionsGroup from './MenuOptionsGroup'

const Menu = memo(function Menu(props) {
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
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <MenuItem disabled>No items...</MenuItem>
      </MenuGroup>
    )
  }
  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane is="nav" ref={menuRef} role="menu" outline="none">
      {children || renderEmptyChildren()}
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'Item' does not exist on type 'NamedExoti... Remove this comment to see the full error message
Menu.Item = MenuItem
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Divider' does not exist on type 'NamedEx... Remove this comment to see the full error message
Menu.Divider = MenuDivider
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Group' does not exist on type 'NamedExot... Remove this comment to see the full error message
Menu.Group = MenuGroup
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Divider' does not exist on type 'NamedEx... Remove this comment to see the full error message
Menu.Divider = MenuDivider
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Group' does not exist on type 'NamedExot... Remove this comment to see the full error message
Menu.Group = MenuGroup
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type 'NamedExo... Remove this comment to see the full error message
Menu.Option = MenuOption
// @ts-expect-error ts-migrate(2339) FIXME: Property 'OptionsGroup' does not exist on type 'Na... Remove this comment to see the full error message
Menu.OptionsGroup = MenuOptionsGroup

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
Menu.propTypes = {
  /**
   * The children of the component.
   */
  children: PropTypes.node
}

export default Menu
