import React from 'react'
import Component from '@reactions/component'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { SideMenu } from '..'
import { Button } from '../../buttons'
// import { Dialog } from '../../dialog'
import { PeopleIcon, CircleArrowRightIcon, TrashIcon, EditIcon } from '../../icons'
import { Pane } from '../../layers'
import Menu from '../../menu/src/Menu'
// import { Tab } from '../../tabs'
// import { TextInput } from '../../text-input'
import { Heading, Paragraph } from '../../typography'

storiesOf('side-menu', module)

  .add('positions', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false, position: 'left' }}>
        {({ setState, state }) => (
          <Box>
            <SideMenu
              position={state.position}
              width={250}
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
            >
              {() => {
                return (
                  <Box>
                    <Pane padding={16} borderBottom="muted">
                    </Pane>
                    <Menu>
                      <Menu.Group >
                        <Menu.Item icon={PeopleIcon}>Menu item 1</Menu.Item>
                        <Menu.Item icon={CircleArrowRightIcon}>Menu item 2</Menu.Item>
                        <Menu.Item icon={CircleArrowRightIcon}>Menu item 3</Menu.Item>
                        <Menu.Item icon={CircleArrowRightIcon}>Menu item 4</Menu.Item>
                        <Menu.Item icon={CircleArrowRightIcon}>Menu item 5</Menu.Item>
                        <Menu.Item icon={EditIcon} >
                          Menu item 6
                        </Menu.Item>
                      </Menu.Group>
                      <Menu.Divider />
                    </Menu>
                  </Box>
                )
              }}
            </SideMenu>
            {['left'].map(position => (
              <Button key={position} margin="10px" onClick={() => setState({ position, isShown: true })} icon={EditIcon}>
                ☰
              </Button>
            ))}
          </Box>
        )}
      </Component>
    </Box>
  ))
