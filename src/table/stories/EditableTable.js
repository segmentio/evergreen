import React from 'react'
import faker from 'faker'
import { Stack } from '../../stack'
import { Pane } from '../../layers'
import { SegmentedControl } from '../../segmented-control'
import { Table } from '..'

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
    name: faker.name.findName(),
    email: faker.internet.email(),
    options,
    notes: '',
    selected: options[0].value
  }
})

export default class EditableTable extends React.PureComponent {
  state = {
    users,
    isSelectable: true
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
      <Stack>
        {zIndex => {
          // Stack used for testing only. Not neccesary for functionality.
          return (
            <React.Fragment>
              <SegmentedControl
                marginBottom={16}
                name="selectable"
                width={280}
                options={[
                  { label: 'Selectable', value: true },
                  { label: 'Not Selectable', value: false }
                ]}
                value={this.state.isSelectable}
                onChange={value => this.setState({ isSelectable: value })}
              />
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
                    <Table.TextHeaderCell borderRight="default">
                      Product
                    </Table.TextHeaderCell>
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
                            isSelectable={this.state.isSelectable}
                            borderRight="muted"
                            autoFocus={user.id === 1} // Example condition
                            onChange={this.handleChange.bind(
                              null,
                              user.id,
                              'name'
                            )}
                          >
                            {user.name}
                          </Table.EditableCell>
                          <Table.EditableCell
                            isSelectable={this.state.isSelectable}
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
                            isSelectable={this.state.isSelectable}
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
                            isSelectable={this.state.isSelectable}
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
            </React.Fragment>
          )
        }}
      </Stack>
    )
  }
}
