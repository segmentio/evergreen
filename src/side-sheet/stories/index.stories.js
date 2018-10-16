import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { SideSheet } from '..'
import { Heading, Paragraph } from '../../typography'
import { Card, Pane } from '../../layers'
import { Button } from '../../buttons'
import { Tab } from '../../tabs'
import { Manager } from '../../manager'
import Menu from '../../menu/src/Menu'

storiesOf('side-sheet', module)
  .add('title + sub title + tabs', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown>
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16} borderBottom="muted">
                  <Heading size={600}>Title</Heading>
                  <Paragraph size={400} color="muted">
                    Optional description or sub title
                  </Paragraph>
                </Pane>
                <Pane display="flex" padding={8}>
                  <Manager selectedIndex={0}>
                    {({ setState, state }) =>
                      ['Traits', 'Event History', 'Identities'].map(
                        (tab, index) => (
                          <Tab
                            key={tab}
                            isSelected={state.selectedIndex === index}
                            onSelect={() => setState({ selectedIndex: index })}
                          >
                            {tab}
                          </Tab>
                        )
                      )
                    }
                  </Manager>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Manager>
    </Box>
  ))
  .add('title + sub title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown>
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16}>
                  <Heading size={600}>Title</Heading>
                  <Paragraph size={400} color="muted">
                    Optional description or sub title
                  </Paragraph>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Manager>
    </Box>
  ))
  .add('title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown>
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16}>
                  <Heading size={600}>Title</Heading>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Manager>
    </Box>
  ))
  .add('close from within', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown>
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
            >
              {({ close }) => {
                return (
                  <Box padding={40}>
                    <Button onClick={close}>Close From Within</Button>
                  </Box>
                )
              }}
            </SideSheet>
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Manager>
    </Box>
  ))
  .add('positions', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown position="left">
        {({ state, setState }) => (
          <Box>
            <SideSheet
              position={state.position}
              width={250}
              isShown={state.isShown}
              onCloseComplete={() => setState({ isShown: false })}
            >
              {() => {
                return (
                  <Box>
                    <Pane padding={16} borderBottom="muted">
                      <Heading size={600}>Title</Heading>
                      <Paragraph size={400} color="muted">
                        Optional description or sub title
                      </Paragraph>
                    </Pane>
                    <Menu>
                      <Menu.Group title="Actions">
                        <Menu.Item icon="people">Collaborators</Menu.Item>
                        <Menu.Item icon="circle-arrow-right">
                          Discover
                        </Menu.Item>
                        <Menu.Item icon="edit" secondaryText="⌘N">
                          Compose
                        </Menu.Item>
                      </Menu.Group>
                      <Menu.Divider />
                      <Menu.Group title="destructive">
                        <Menu.Item icon="trash" intent="danger">
                          Delete
                        </Menu.Item>
                      </Menu.Group>
                    </Menu>
                  </Box>
                )
              }}
            </SideSheet>
            {['left', 'right', 'top', 'bottom'].map(position => (
              <Button
                key={position}
                margin="10px"
                onClick={() => setState({ position, isShown: true })}
              >
                Show {position}
              </Button>
            ))}
          </Box>
        )}
      </Manager>
    </Box>
  ))
  .add('escape + overlay click disabled', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager isShown>
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEscapePress={false}
              onCloseComplete={() => setState({ isShown: false })}
            />
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Manager>
    </Box>
  ))
