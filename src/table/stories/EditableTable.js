import React from 'react'
import faker from 'faker'
import { Table } from '../'
import { Pane } from '../../layers'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

// Generate a bunch of users.
const users = range(1000).map(index => {
  const options = range(20).map(i => {
    const item = faker.commerce.productName()
    return {
      isSelected: i === 1,
      label: item,
      value: item
    }
  })

  return {
    id: index,
    name: faker.name.findName(),
    email: faker.internet.email(),
    options,
    selected: options[0].value
  }
})

export default class EditableTable extends React.PureComponent {
  state = {
    users
  }

  handleChange = (id, key, value) => {
    // Do some update to the users.
    this.setState(state => {
      return {
        users: state.users.map(user => {
          if (user.id === id) {
            return {
              ...user,
              [key]: value
            }
          }

          return user
        })
      }
    })
  }

  handleSelect = (id, item) => {
    // Select a different product.
    this.setState(state => {
      return {
        users: state.users.map(user => {
          if (user.id === id) {
            return {
              ...user,
              selected: item.value
            }
          }

          return user
        })
      }
    })
  }

  render() {
    return (
      <Pane border height="80vh" display="flex" flexGrow={0}>
        <Table flex={1} display="flex" flexDirection="column">
          <Table.Head>
            <Table.TextHeaderCell borderRight="default">
              Name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell borderRight="default">
              Email
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>Product</Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody flex={1} overscanCount={15}>
            {this.state.users.map(user => {
              return (
                <Table.Row key={user.email}>
                  <Table.EditableCell
                    borderRight="muted"
                    onChange={this.handleChange.bind(null, user.id, 'name')}
                  >
                    {user.name}
                  </Table.EditableCell>
                  <Table.EditableCell
                    borderRight="muted"
                    onChange={this.handleChange.bind(null, user.id, 'email')}
                  >
                    {user.email}
                  </Table.EditableCell>
                  <Table.SelectMenuCell
                    selectMenuProps={{
                      title: 'Product',
                      options: user.options,
                      onSelect: this.handleSelect.bind(null, user.id),
                      selected: user.selected
                    }}
                  >
                    {user.selected}
                  </Table.SelectMenuCell>
                </Table.Row>
              )
            })}
          </Table.VirtualBody>
        </Table>
      </Pane>
    )
  }
}
