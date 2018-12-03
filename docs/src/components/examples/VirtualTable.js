import React, { Fragment } from 'react'
import faker from 'faker'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Table,
  Pane,
  Paragraph,
  TextInputField,
  SelectField,
  minorScale
  // eslint-disable-next-line import/no-unresolved
} from 'evergreen-ui'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

const randomLengthContent = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
]

// Generate a bunch of users.
const users = range(1000)
  .map((user, index) => ({
    id: index,
    name: faker.name.findName(),
    email: faker.internet.email(),
    height: faker.random.arrayElement([32, 40, 56, 'auto'])
  }))
  .map(item => {
    // When height is auto, use a variable length piece of content to render.
    if (item.height === 'auto') {
      return {
        ...item,
        content: faker.random.arrayElement(randomLengthContent)
      }
    }
    return item
  })

export default class VirtualTable extends React.PureComponent {
  state = {
    scrollToIndex: null,
    scrollOffset: null,
    scrollToAlignment: null
  }

  setValue = property => {
    return e => {
      const value = e.target.value ? parseInt(e.target.value, 10) : null
      this.setState({
        [property]: value
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Pane display="flex">
          <TextInputField
            label="scrollOffset"
            marginRight={minorScale(4)}
            onChange={this.setValue('scrollOffset')}
          />
          <TextInputField
            type="number"
            label="scrollToIndex"
            marginRight={minorScale(4)}
            onChange={this.setValue('scrollToIndex')}
          />
          <SelectField
            label="scrollToAlignment"
            onChange={event =>
              this.setState({ scrollToAlignment: event.target.value })
            }
          >
            <option value="" checked>
              scrollToAlignment
            </option>
            <option value="auto">Auto</option>
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
          </SelectField>
        </Pane>
        <Pane border height="60vh" display="flex" flexGrow={0}>
          <Table flex={1} display="flex" flexDirection="column">
            <Table.Head>
              <Table.TextHeaderCell>Index</Table.TextHeaderCell>
              <Table.TextHeaderCell>Height</Table.TextHeaderCell>
              <Table.TextHeaderCell>Name</Table.TextHeaderCell>
              <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            </Table.Head>
            <Table.VirtualBody
              flex={1}
              allowAutoHeight
              scrollOffset={this.state.scrollOffset}
              scrollToIndex={this.state.scrollToIndex}
              scrollToAlignment={this.state.scrollToAlignment}
            >
              {users.map((user, index) => {
                return (
                  <Table.Row key={user.id} height={user.height}>
                    <Table.TextCell>{index}</Table.TextCell>
                    <Table.TextCell>{user.height}</Table.TextCell>
                    <Table.TextCell>{user.name}</Table.TextCell>
                    {user.height === 'auto' ? (
                      <Table.Cell>
                        <Paragraph marginY={24}>{user.content}</Paragraph>
                      </Table.Cell>
                    ) : (
                      <Table.TextCell>
                        This is a static height row
                      </Table.TextCell>
                    )}
                  </Table.Row>
                )
              })}
            </Table.VirtualBody>
          </Table>
        </Pane>
      </Fragment>
    )
  }
}
