import { storiesOf } from '@storybook/react'
import Component from '@reactions/component'
import React from 'react'
import Box from 'ui-box'
import { SideSheet } from '..'
import { Heading, Paragraph } from '../../typography'
import { Card, Pane } from '../../layers'
import { Button } from '../../buttons'
import { Tab } from '../../tabs'
import { Dialog } from '../../dialog'
import { TextInput } from '../../text-input'
import Menu from '../../menu/src/Menu'

storiesOf('side-sheet', module)
  .add('title + sub title + tabs', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false }}>
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
                  <Component initialState={{ selectedIndex: 0 }}>
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
                  </Component>
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
      </Component>
    </Box>
  ))
  .add('title + sub title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false }}>
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
      </Component>
    </Box>
  ))
  .add('title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false }}>
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
      </Component>
    </Box>
  ))
  .add('close from within', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false }}>
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
      </Component>
    </Box>
  ))
  .add('positions', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false, position: 'left' }}>
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
      </Component>
    </Box>
  ))
  .add('escape + overlay click disabled', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component initialState={{ isShown: false }}>
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
      </Component>
    </Box>
  ))
  .add('onBeforeClose', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Component
        initialState={{
          value: 'Change me',
          newValue: 'Change me',
          isShown: false,
          hasChanges: false,
          isLoading: false,
          isConfirmationShown: false
        }}
      >
        {({ state, setState }) => (
          <Box>
            <SideSheet
              isShown={state.isShown}
              onBeforeClose={() => {
                if (state.hasChanges) {
                  setState({ isConfirmationShown: true })
                  return false
                }
              }}
              onCloseComplete={() => setState({ isShown: false })}
            >
              {({ close }) => {
                return (
                  <Box padding={40}>
                    <Dialog
                      intent="danger"
                      isShown={state.isConfirmationShown}
                      title="You have unsaved changes"
                      onConfirm={closeDialog => {
                        setState(
                          {
                            newValue: state.value,
                            hasChanges: false
                          },
                          () => {
                            closeDialog()
                          }
                        )
                      }}
                      onCloseComplete={() => {
                        setState({
                          isConfirmationShown: false
                        })
                        if (!state.hasChanges) {
                          close()
                        }
                      }}
                      confirmLabel="Discard Changes"
                    >
                      Are you sure you want to discard your unsaved changes?
                    </Dialog>
                    <Pane>
                      <TextInput
                        value={state.newValue}
                        onChange={e => {
                          setState({
                            newValue: e.target.value,
                            hasChanges: state.value !== e.target.value
                          })
                        }}
                        marginRight={16}
                      />
                      <Button
                        appearance="primary"
                        isLoading={state.isLoading}
                        disabled={!state.hasChanges}
                        onClick={() => {
                          setState({ isLoading: true })
                          setTimeout(() => {
                            setState(
                              {
                                value: state.newValue,
                                hasChanges: false,
                                isLoading: false
                              },
                              close
                            )
                          }, 2000)
                        }}
                      >
                        Save
                      </Button>
                    </Pane>
                    <Paragraph marginTop={16}>
                      Current value: {state.value}
                    </Paragraph>
                  </Box>
                )
              }}
            </SideSheet>
            <Button onClick={() => setState({ isShown: true })}>
              Show Side Sheet
            </Button>
          </Box>
        )}
      </Component>
    </Box>
  ))
