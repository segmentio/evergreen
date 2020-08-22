import { storiesOf } from '@storybook/react'
import React from 'react'
import Component from '@reactions/component'
import Box from 'ui-box'
import Menu from '../src/Menu'
import { Button } from '../../buttons'
import { UnorderedList, ListItem } from '../../typography'
import { Popover } from '../../popover'
import { Position } from '../../constants'
import {
  PeopleIcon,
  CircleArrowRightIcon,
  EditIcon,
  TrashIcon
} from '../../icons'

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
              <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
              <Menu.Item icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={TrashIcon} intent="danger">
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
              <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
              <Menu.Item icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group title="destructive">
              <Menu.Item icon={TrashIcon} intent="danger">
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
            <Menu.Group title="Actions">
              <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
              <Menu.Item disabled icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group title="destructive">
              <Menu.Item disabled icon={TrashIcon} intent="danger">
                Delete...
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginRight={16}>With Disabled Items</Button>
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
        <Button marginRight={16}>Option Group</Button>
      </Popover>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <ul>
              <li>
                <a href="..." role="menuitem">
                  Hey Evergreen,
                </a>
              </li>
              <li>
                <a href="..." role="menuitem">
                  I want custom items
                </a>
              </li>
              <hr />
              <li>
                <a href="..." role="menuitem">
                  Oh sweet
                </a>
              </li>
            </ul>
          </Menu>
        }
      >
        <Button marginRight={16}>Custom Menu Items</Button>
      </Popover>
      <Popover
        position={Position.BOTTOM_LEFT}
        trigger="hover"
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
        <Button>Hover menus</Button>
      </Popover>

      <UnorderedList marginTop={24}>
        <ListItem>
          Arrow down on a button will bring focus inside the popover.
        </ListItem>
        <ListItem>
          Arrow keys within the menu will cycle through all of the menu items
          and skip disabled items.
        </ListItem>
        <ListItem>
          The Home key (fn + arrow left) will go to the first item.
        </ListItem>
        <ListItem>
          The End key (fn + arrow right) will go to the last item.
        </ListItem>
      </UnorderedList>
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
