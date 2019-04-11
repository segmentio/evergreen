import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { PropsWithTheme, withTheme } from '../../theme'

import MenuOption from './MenuOption'

type Option = {
  value: string
  label: string
}

interface MenuOptionsGroupProps {
  // Title of the menu group.
  title?: React.ReactNode

  // The current value of the option group.
  selected?: number | string

  // Function called when selection changes.
  onChange?: (...args: any[]) => any

  // List of options rendered in the group.
  options?: Option[]
}

class MenuOptionsGroup extends React.PureComponent<
  PropsWithTheme<MenuOptionsGroupProps>
> {
  static propTypes = {
    title: PropTypes.node,
    selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
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
