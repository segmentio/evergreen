import React from 'react'
import { filter } from 'fuzzaldrin-plus'
import { Pane, SearchInput, Text } from 'evergreen-ui'
import * as Icons from '../../../src/icons'
import { IconNameMapper } from '../../../src/icons/generated/IconNameMapper'

const iconKeys = Object.keys(IconNameMapper)

export default class IconSearch extends React.PureComponent {
  state = {
    searchQuery: ''
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  search = () => {
    if (this.state.searchQuery.trim().length === 0) return iconKeys
    return iconKeys.filter(key => {
      return filter([key], this.state.searchQuery).length > 0
    })
  }

  render() {
    return (
      <Pane>
        <SearchInput
          onChange={this.handleChange}
          value={this.state.searchQuery}
          width="100%"
          height={40}
          marginBottom={16}
          placeholder="Search for icon name..."
        />
        <Pane clearfix background="tint1">
          {this.search().map(iconKey => {
            const iconName = IconNameMapper[iconKey]
            const Icon = Icons[iconName]
            return (
              <Pane
                key={iconKey}
                float="left"
                width="20%"
                height={140}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
              >
                <Icon color="default" />
                <Text is="p" size={300} marginTop={9}>
                  {iconName}
                </Text>
              </Pane>
            )
          })}
        </Pane>
      </Pane>
    )
  }
}
