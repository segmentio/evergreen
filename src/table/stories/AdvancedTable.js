import React from 'react'
import { filter } from 'fuzzaldrin-plus'
import { Table } from '../../table'
import { Popover } from '../../popover'
import { Position } from '../../positioner'
import { Menu } from '../../menu'
import { Avatar } from '../../avatar'
import { Text } from '../../typography'
import { IconButton, TextDropdownButton } from '../../buttons'
import profiles from './profiles'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const Order = {
  NONE: 'NONE',
  ASC: 'ASC',
  DESC: 'DESC'
}

export default class AdvancedTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: '',
      orderedColumn: 1,
      ordering: Order.NONE,
      column2Show: 'email'
    }
  }

  sort = profiles => {
    const { ordering, orderedColumn } = this.state
    if (ordering === Order.NONE) return profiles

    let propKey = 'name'
    if (orderedColumn === 2) propKey = this.state.column2Show
    if (orderedColumn === 3) propKey = 'ltv'

    return profiles.sort((a, b) => {
      let aValue = a[propKey]
      let bValue = b[propKey]

      const isMoney = aValue.indexOf('$') === 0

      if (isMoney) {
        aValue = Number(aValue.substr(1))
        bValue = Number(bValue.substr(1))
      }

      if (this.state.ordering === Order.ASC) {
        return aValue - bValue
      }

      // Order.DESC
      return bValue - aValue
    })
  }

  filter = profiles => {
    const searchQuery = this.state.searchQuery.trim()

    if (searchQuery.length < 1) return profiles

    return profiles.filter(profile => {
      const result = filter([profile.name], searchQuery)
      return result.length === 1
    })
  }

  setColumnOrdering = ({ column, order }) => {
    this.setState({
      orderedColumn: column,
      ordering: order
    })
  }

  renderValueTableHeaderCell = () => {
    return (
      <Table.HeaderCell>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={({ close }) => (
            <Menu>
              <Menu.OptionsGroup
                title="Order"
                options={[
                  { label: 'Ascending', value: Order.ASC },
                  { label: 'Descending', value: Order.DESC }
                ]}
                selected={
                  this.state.orderedColumn === 2 ? this.state.ordering : null
                }
                onChange={value => {
                  this.setState({
                    orderedColumn: 2,
                    ordering: value
                  })
                  close()
                }}
              />

              <Menu.Divider />

              <Menu.OptionsGroup
                title="Show"
                options={[
                  { label: 'Email', value: 'email' },
                  { label: 'Phone', value: 'phone' },
                  { label: 'Address', value: 'address' },
                  { label: 'Country', value: 'country' },
                  { label: 'Company', value: 'company' },
                  { label: 'Id', value: 'id' }
                ]}
                selected={this.state.column2Show}
                onChange={value => {
                  this.setState({
                    column2Show: value
                  })
                  close()
                }}
              />
            </Menu>
          )}
        >
          <TextDropdownButton
            icon={
              this.state.orderedColumn === 2
                ? this.getIconForOrder(this.state.ordering)
                : 'caret-down'
            }
          >
            {capitalize(this.state.column2Show)}
          </TextDropdownButton>
        </Popover>
      </Table.HeaderCell>
    )
  }

  getIconForOrder = order => {
    switch (order) {
      case Order.ASC:
        return 'arrow-up'
      case Order.DESC:
        return 'arrow-down'
      default:
        return 'caret-down'
    }
  }

  renderLTVTableHeaderCell = () => {
    return (
      <Table.TextHeaderCell>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={({ close }) => (
            <Menu>
              <Menu.OptionsGroup
                title="Order"
                options={[
                  { label: 'Ascending', value: Order.ASC },
                  { label: 'Descending', value: Order.DESC }
                ]}
                selected={
                  this.state.orderedColumn === 3 ? this.state.ordering : null
                }
                onChange={value => {
                  this.setState({ orderedColumn: 3, ordering: value })
                  close()
                }}
              />
            </Menu>
          )}
        >
          <TextDropdownButton
            icon={
              this.state.orderedColumn === 3
                ? this.getIconForOrder(this.state.ordering)
                : 'caret-down'
            }
          >
            LTV
          </TextDropdownButton>
        </Popover>
      </Table.TextHeaderCell>
    )
  }

  renderRowMenu = () => {
    return (
      <Menu>
        <Menu.Group>
          <Menu.Item>Share...</Menu.Item>
          <Menu.Item>Move...</Menu.Item>
          <Menu.Item secondaryText="⌘R">Rename...</Menu.Item>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Item intent="danger">Delete...</Menu.Item>
        </Menu.Group>
      </Menu>
    )
  }

  render() {
    return (
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell
            onChange={value => {
              this.setState({ searchQuery: value })
            }}
            value={this.state.searchQuery}
          />
          {this.renderValueTableHeaderCell()}
          {this.renderLTVTableHeaderCell()}
          <Table.HeaderCell width={48} flex="none" />
        </Table.Head>
        <Table.Body height={640}>
          {this.filter(this.sort(profiles)).map(profile => (
            <Table.Row key={profile.id}>
              <Table.Cell display="flex" alignItems="center">
                <Avatar name={profile.name} flexShrink={0} />
                <Text marginLeft={8} size={300} fontWeight={500}>
                  {profile.name}
                </Text>
              </Table.Cell>
              <Table.TextCell>{profile[this.state.column2Show]}</Table.TextCell>
              <Table.TextCell isNumber>{profile.ltv}</Table.TextCell>
              <Table.Cell width={48} flex="none">
                <Popover
                  content={this.renderRowMenu}
                  position={Position.BOTTOM_RIGHT}
                >
                  <IconButton icon="more" height={24} appearance="minimal" />
                </Popover>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
