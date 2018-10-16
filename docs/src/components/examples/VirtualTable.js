import React from 'react'
import faker from 'faker'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Table,
  Pane,
  Paragraph
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
  render() {
    return (
      <Pane border height="60vh" display="flex" flexGrow={0}>
        <Table flex={1} display="flex" flexDirection="column">
          <Table.Head>
            <Table.TextHeaderCell>Index</Table.TextHeaderCell>
            <Table.TextHeaderCell>Height</Table.TextHeaderCell>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody flex={1} allowAutoHeight>
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
                    <Table.TextCell>This is a static height row</Table.TextCell>
                  )}
                </Table.Row>
              )
            })}
          </Table.VirtualBody>
        </Table>
      </Pane>
    )
  }
}
