import React, { Fragment } from 'react'
import faker from 'faker'
import { Table } from '..'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'
import { TextInputField } from '../../text-input'
import { SelectField } from '../../select'
import { minorScale } from '../../scales'

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
    scrollToIndex: '',
    scrollOffset: '',
    scrollToAlignment: ''
  }

  render() {
    const scrollOffset =
      this.state.scrollOffset.length > 0
        ? parseInt(this.state.scrollOffset, 10)
        : null
    const scrollToIndex =
      this.state.scrollToIndex.length > 0
        ? parseInt(this.state.scrollToIndex, 10)
        : null
    return (
      <Fragment>
        <Pane display="flex">
          <TextInputField
            value={this.state.scrollOffset}
            label="scrollOffset"
            marginRight={minorScale(4)}
            onChange={event =>
              this.setState({ scrollOffset: event.target.value })
            }
          />
          <TextInputField
            value={this.state.scrollToIndex}
            label="scrollToIndex"
            marginRight={minorScale(4)}
            onChange={event =>
              this.setState({ scrollToIndex: event.target.value })
            }
          />
          <SelectField
            label="scrollToAlignment"
            value={this.state.scrollToAlignment}
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
        <Pane border height="80vh" display="flex" flexGrow={0}>
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
              scrollOffset={scrollOffset}
              scrollToIndex={scrollToIndex}
              scrollToAlignment={this.state.scrollToAlignment}
              background="tint"
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
