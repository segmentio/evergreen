import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import MenuOption from './MenuOption'

const MenuOptionsGroup = memo(
  forwardRef(function MenuOptionsGroup(props, ref) {
    const { title, options, selected, onChange } = props

    return (
      <Pane ref={ref} paddingY={8}>
        {title && (
          <Heading size={100} marginLeft={44} marginRight={16} marginY={8}>
            {title}
          </Heading>
        )}
        <Pane>
          {options.map(option => {
            return (
              <MenuOption
                key={option.value}
                isSelected={option.value === selected}
                onSelect={() => onChange(option.value)}
              >
                {option.label}
              </MenuOption>
            )
          })}
        </Pane>
      </Pane>
    )
  })
)

MenuOptionsGroup.propTypes = {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The current value of the option group.
   */
  selected: PropTypes.any,

  /**
   * Function called when selection changes.
   */
  onChange: PropTypes.func,

  /**
   * List of options rendered in the group.
   */
  options: PropTypes.array
}

export default MenuOptionsGroup
