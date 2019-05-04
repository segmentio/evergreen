import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import MenuItem from './MenuItem'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
import MenuOption from './MenuOption'
import MenuOptionsGroup from './MenuOptionsGroup'

const KeyCodes = {
  ArrowUp: 38,
  ArrowDown: 40,
  Home: 36,
  End: 35
}

export default class Menu extends React.PureComponent {
  static Item = MenuItem

  static Divider = MenuDivider

  static Group = MenuGroup

  static Option = MenuOption

  static OptionsGroup = MenuOptionsGroup

  static propTypes = {
    /**
     * The children of the component.
     */
    children: PropTypes.node
  }

  componentDidMount() {
    // Get the menu item buttons
    // eslint-disable-next-line unicorn/prefer-spread
    this.menuItems = Array.from(
      this.menuRef.querySelectorAll('[role="menuitemradio"], [role="menuitem"]')
    )

    if (this.menuItems.length === 0) {
      throw new Error('The menu has no menu items')
    }

    this.firstItem = this.menuItems[0]
    this.lastItem = this.menuItems[this.menuItems.length - 1]

    const focusNext = (currentItem, startItem) => {
      // Determine which item is the startItem (first or last)
      const goingDown = startItem === this.firstItem

      // Helper function for getting next legitimate element
      const move = elem => {
        const indexOfItem = this.menuItems.indexOf(elem)

        if (goingDown) {
          if (indexOfItem < this.menuItems.length - 1) {
            return this.menuItems[indexOfItem + 1]
          }

          return startItem
        }

        if (indexOfItem - 1 > -1) {
          return this.menuItems[indexOfItem - 1]
        }

        return startItem
      }

      // Make first move
      let nextItem = move(currentItem)

      // If the menuitem is disabled move on
      while (nextItem.disabled) {
        nextItem = move(nextItem)
      }

      // Focus the first one that's not disabled
      nextItem.focus()
    }

    this.menuItems.forEach(menuItem => {
      // Handle key presses for menuItem
      menuItem.addEventListener('keydown', e => {
        // Go to next/previous item if it exists
        // or loop around

        if (e.keyCode === KeyCodes.ArrowDown) {
          e.preventDefault()
          focusNext(menuItem, this.firstItem)
        }

        if (e.keyCode === KeyCodes.ArrowUp) {
          e.preventDefault()
          focusNext(menuItem, this.lastItem)
        }

        if (e.keyCode === KeyCodes.Home) {
          e.preventDefault()
          this.firstItem.focus()
        }

        if (e.keyCode === KeyCodes.End) {
          e.preventDefault()
          this.lastItem.focus()
        }
      })
    })
  }

  onMenuRef = ref => {
    this.menuRef = ref
  }

  render() {
    const { children } = this.props
    return (
      <Pane is="nav" innerRef={this.onMenuRef} role="menu" outline="none">
        {children}
      </Pane>
    )
  }
}
