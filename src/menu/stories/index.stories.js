import { storiesOf } from '@storybook/react'
import React from 'react'
import Component from '@reactions/component'
import Box from 'ui-box'
import Menu from '../src/Menu'
import { Button } from '../../buttons'
import { Popover } from '../../popover'
import { Position } from '../../positioner'

storiesOf('menu', module)
  .add('dropdown', () => (
    <Box padding={40}>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
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
        }
      >
        <Button marginRight={16}>Without Icons</Button>
      </Popover>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item icon="people">Share...</Menu.Item>
              <Menu.Item icon="circle-arrow-right">Move...</Menu.Item>
              <Menu.Item icon="edit" secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon="trash" intent="danger">
                Delete...
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginRight={16}>With Icons</Button>
      </Popover>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Group title="Actions">
              <Menu.Item icon="people">Share...</Menu.Item>
              <Menu.Item icon="circle-arrow-right">Move...</Menu.Item>
              <Menu.Item icon="edit" secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group title="destructive">
              <Menu.Item icon="trash" intent="danger">
                Delete...
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginRight={16}>With Group Titles</Button>
      </Popover>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Component
              initialState={{
                selected: 'asc'
              }}
            >
              {({ state, setState }) => {
                return (
                  <Menu.OptionsGroup
                    title="Order"
                    options={[
                      { label: 'Ascending', value: 'asc' },
                      { label: 'Descending', value: 'desc' }
                    ]}
                    selected={state.selected}
                    onChange={selected => setState({ selected })}
                  />
                )
              }}
            </Component>

            <Menu.Divider />

            <Component
              initialState={{
                selected: 'email'
              }}
            >
              {({ state, setState }) => {
                return (
                  <Menu.OptionsGroup
                    title="Show"
                    options={[
                      { label: 'Email', value: 'email' },
                      { label: 'Phone', value: 'phone' },
                      { label: 'State', value: 'state' },
                      { label: 'Country', value: 'country' },
                      { label: 'Type', value: 'type' }
                    ]}
                    selected={state.selected}
                    onChange={selected => setState({ selected })}
                  />
                )
              }}
            </Component>
          </Menu>
        }
      >
        <Button>Option Group</Button>
      </Popover>
    </Box>
  ))
  .add('Menu', () => (
    <div>
      <Menu>
        <Menu.Group>
          <Menu.Item>Share...</Menu.Item>
          <Menu.Item>Move...</Menu.Item>
          <Menu.Item>Rename...</Menu.Item>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Item intent="danger">Delete...</Menu.Item>
        </Menu.Group>
      </Menu>
    </div>
  ))
