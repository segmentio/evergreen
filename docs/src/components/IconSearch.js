import React from 'react'
import { filter } from 'fuzzaldrin-plus'
// eslint-disable-next-line import/no-unresolved
import { Pane, SearchInput, IconNames, Text, Icon } from 'evergreen-ui'

const iconKeys = Object.keys(IconNames)

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
                <Icon icon={IconNames[iconKey]} color="default" />
                <Text is="p" size={300} marginTop={9}>
                  {IconNames[iconKey]}
                </Text>
              </Pane>
            )
          })}
        </Pane>
      </Pane>
    )
  }
}
