import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { withTheme } from '../../theme'
import MenuOption from './MenuOption'

class MenuOptionsGroup extends React.PureComponent {
  static propTypes = {
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
    options: PropTypes.array,

    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: PropTypes.bool
  }

  isSelected = option => {
    const { value } = option
    const { isMultiSelect, selected } = this.props

    if (isMultiSelect) {
      return Boolean(selected.find(itemValue => itemValue === value))
    }

    return Boolean(value === selected)
  }

  render() {
    const { title, options, onChange } = this.props

    return (
      <Pane paddingY={8}>
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
                isSelected={this.isSelected(option)}
                onSelect={() => onChange(option.value)}
              >
                {option.label}
              </MenuOption>
            )
          })}
        </Pane>
      </Pane>
    )
  }
}

export default withTheme(MenuOptionsGroup)
