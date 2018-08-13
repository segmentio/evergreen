import React from 'react'
import faker from 'faker'
import { Table } from '../'
import { Stack } from '../../stack'
import { Pane } from '../../layers'
import { IconButton } from '../../buttons'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

// Generate a bunch of users.
const users = range(100).map(index => {
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
    isEditingName: false,
    name: faker.name.findName(),
    email: faker.internet.email(),
    options,
    notes: '',
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
              [key]: value,
              // Always disable this.
              isEditingName: false
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

  handleEditNameToggle = id => {
    // Select a different product.
    this.setState(state => {
      return {
        users: state.users.map(user => {
          if (user.id === id) {
            return {
              ...user,
              isEditingName: !user.isEditingName
            }
          }

          return user
        })
      }
    })
  }

  render() {
    return (
      <Stack>
        {zIndex => {
          // Stack used for testing only. Not neccesary for functionality.
          return (
            <Pane
              border
              height="80vh"
              display="flex"
              flexGrow={0}
              position="relative"
              zIndex={zIndex}
            >
              <Table flex={1} display="flex" flexDirection="column">
                <Table.Head>
                  <Table.TextHeaderCell
                    borderRight="default"
                    flex={0}
                    flexBasis={80}
                  >
                    Id
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell borderRight="default">
                    Name
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell borderRight="default">
                    Email
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell>Product</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Notes</Table.TextHeaderCell>
                </Table.Head>
                <Table.VirtualBody flex={1} overscanCount={15}>
                  {this.state.users.map(user => {
                    return (
                      <Table.Row key={user.id}>
                        <Table.EditableCell
                          borderRight="muted"
                          disabled
                          flex={0}
                          flexBasis={80}
                        >
                          {user.id}
                        </Table.EditableCell>
                        <Table.EditableCell
                          isSelectable={false}
                          isEditing={user.isEditingName}
                          onEditComplete={this.handleEditNameToggle.bind(
                            null,
                            user.id
                          )}
                          rightView={
                            <IconButton
                              icon="edit"
                              height={24}
                              onClick={this.handleEditNameToggle.bind(
                                null,
                                user.id
                              )}
                            />
                          }
                          borderRight="muted"
                          onChange={this.handleChange.bind(
                            null,
                            user.id,
                            'name'
                          )}
                        >
                          {user.name}
                        </Table.EditableCell>
                        <Table.EditableCell
                          borderRight="muted"
                          onChange={this.handleChange.bind(
                            null,
                            user.id,
                            'email'
                          )}
                        >
                          {user.email}
                        </Table.EditableCell>
                        <Table.SelectMenuCell
                          borderRight="muted"
                          selectMenuProps={{
                            title: 'Product',
                            options: user.options,
                            onSelect: this.handleSelect.bind(null, user.id),
                            selected: user.selected
                          }}
                        >
                          {user.selected}
                        </Table.SelectMenuCell>
                        <Table.EditableCell
                          borderRight="muted"
                          placeholder="Notes..."
                          onChange={this.handleChange.bind(
                            null,
                            user.id,
                            'notes'
                          )}
                        >
                          {user.notes}
                        </Table.EditableCell>
                      </Table.Row>
                    )
                  })}
                </Table.VirtualBody>
              </Table>
            </Pane>
          )
        }}
      </Stack>
    )
  }
}
