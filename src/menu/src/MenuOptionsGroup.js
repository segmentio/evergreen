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
    selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Function called when selection changes.
     */
    onChange: PropTypes.func,

    /**
     * List of options rendered in the group.
     */
    options: PropTypes.array
  }

  render() {
    const { title, options, selected, onChange } = this.props

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
  }
}

export default withTheme(MenuOptionsGroup)
