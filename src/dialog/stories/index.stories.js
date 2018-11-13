import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import starWarsNames from 'starwars-names'
import { Strong, Paragraph } from '../../typography'
import { Dialog } from '..'
import { Button } from '../../buttons'
import { Combobox } from '../../combobox'
import { SideSheet } from '../../side-sheet'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import DialogManager from './DialogManager'

// Generate a big list of items
const comboboxItems = starWarsNames.all.sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
})

storiesOf('dialog', module)
  .add('Dialog', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog Title"
              onCloseComplete={hide}
              confirmLabel="Custom Label"
            >
              Passing a string as the content will wrap the string in a
              “Paragraph”
            </Dialog>
            <Button onClick={show}>Show Dialog with Custom Button Label</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog with Danger Intent"
              onCloseComplete={hide}
              intent="danger"
              confirmLabel="Dangerous Action"
            >
              Passing a string as the content will wrap the string in a
              “Paragraph”
            </Dialog>
            <Button onClick={show}>Show Dialog with Danger Intent</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, isLoading, confirmLoading, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog with Loading Confirmation"
              onConfirm={confirmLoading}
              confirmLabel={isLoading ? 'Loading...' : 'Confirm Loading'}
              isConfirmLoading={isLoading}
              onCloseComplete={hide}
            >
              This is useful when you need to process something before closing
              the dialog.
            </Dialog>
            <Button onClick={show}>
              Show Dialog with Loading Confirmation
            </Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog with Confirmation Button Only"
              onCloseComplete={hide}
              hasCancel={false}
              confirmLabel="Got It"
            >
              This is useful for product updates and onboarding content.
            </Dialog>
            <Button onClick={show}>Show Dialog with Primary Button Only</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog without Buttons"
              onCloseComplete={hide}
              hasFooter={false}
            >
              <Box>
                <Paragraph>Manage your own buttons and interactions.</Paragraph>
              </Box>
            </Dialog>
            <Button onClick={show}>Show Dialog without Buttons</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog with Self Managed Close"
              onCloseComplete={hide}
              hasFooter={false}
            >
              {({ close }) => (
                <Box>
                  <Paragraph>
                    Manage Your Own Buttons and Interactions.
                  </Paragraph>
                  <Button marginTop={16} onClick={close}>
                    Self Managed Close
                  </Button>
                </Box>
              )}
            </Dialog>
            <Button onClick={show}>Show Dialog with Self Managed Close</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              hasHeader={false}
              hasFooter={false}
              onCloseComplete={hide}
            >
              {({ close }) => (
                <Box>
                  <Paragraph>
                    Manage your own header, buttons and interactions.
                  </Paragraph>
                  <Button marginTop={16} onClick={close}>
                    Self Managed Close
                  </Button>
                </Box>
              )}
            </Dialog>
            <Button onClick={show}>Show Dialog without Header</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              title="Dialog with Internal Scrolling"
              onCloseComplete={hide}
            >
              <Box height={1200} width="100%" backgroundColor="#ddd" />
            </Dialog>
            <Button onClick={show}>Show Dialog with Internal Scrolling</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEscapePress={false}
              title="Dialog with Internal Scrolling"
              onCloseComplete={hide}
              onCancel={close => {
                console.log('You canceled')
                close()
              }}
            >
              <Paragraph>
                Resistance is futile, you shall not <Strong>esc</Strong>.
              </Paragraph>
            </Dialog>
            <Button onClick={show}>
              Show Dialog with overlay and escape key disabled
            </Button>
          </Box>
        )}
      </DialogManager>
    </Box>
  ))
  .add('Dialog with nested Combobox', () => (
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with Combobox"
            onCloseComplete={hide}
          >
            <Combobox openOnFocus items={comboboxItems} />
          </Dialog>
          <Button onClick={show}>Show Dialog with Combobox</Button>
        </Box>
      )}
    </DialogManager>
  ))
  .add('Dialog with customized content container', () => (
    <React.Fragment>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              onCloseComplete={hide}
              hasHeader={false}
              hasFooter={false}
              contentContainerProps={{ padding: 0 }}
            >
              <Pane
                height={160}
                background="yellowTint"
                borderTopLeftRadius="8px"
                borderTopRightRadius="8px"
              />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                odio modi enim voluptas quaerat sapiente eius, veritatis, minus
                odit molestiae necessitatibus quae fuga excepturi obcaecati,
                sunt mollitia aut similique. Consequuntur?
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt sit accusantium unde dolore dolorum aliquid nihil
                maxime! Harum error unde quidem dolore! Aperiam tenetur minus ad
                officia, dignissimos rerum facere.
              </Paragraph>
            </Dialog>
            <Button onClick={show}>Dialog with no content paddings</Button>
          </Box>
        )}
      </DialogManager>
      <DialogManager>
        {({ isShown, show, hide }) => (
          <Box marginBottom={16}>
            <Dialog
              isShown={isShown}
              onCloseComplete={hide}
              hasHeader={false}
              hasFooter={false}
              contentContainerProps={{
                padding: '4px',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <Pane width="25%" height={160} backgroundColor="#F9F9FB" />
              <Pane width="25%" height={160} backgroundColor="#E4E7EB" />
              <Pane width="25%" height={160} backgroundColor="#425A70" />
              <Pane width="25%" height={160} backgroundColor="#234361" />
              <Pane width="25%" height={160} backgroundColor="#F7F9FD" />
              <Pane width="25%" height={160} backgroundColor="#DDEBF7" />
              <Pane width="25%" height={160} backgroundColor="#1070CA" />
              <Pane width="25%" height={160} backgroundColor="#084B8A" />
            </Dialog>
            <Button onClick={show}>
              Dialog with overridden default flexbox configs
            </Button>
          </Box>
        )}
      </DialogManager>
    </React.Fragment>
  ))
  .add('Dialog with endless stacking', () => (
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with nested Side Sheet"
            onCloseComplete={hide}
          >
            <Component
              initialState={{
                isShown: false
              }}
            >
              {({ state, setState }) => (
                <React.Fragment>
                  <Button onClick={() => setState({ isShown: true })}>
                    Show Inner Side Sheet
                  </Button>
                  <SideSheet
                    isShown={state.isShown}
                    onCloseComplete={() => setState({ isShown: false })}
                  >
                    <Component
                      initialState={{
                        isShown: false
                      }}
                    >
                      {({ state: innerState, setState: innerSetState }) => {
                        return (
                          <React.Fragment>
                            <Popover
                              isShown={innerState.isShown}
                              onCloseComplete={() =>
                                innerSetState({ isShown: false })
                              }
                              content={
                                <Box
                                  height={240}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  padding={12}
                                >
                                  <Combobox openOnFocus items={comboboxItems} />
                                </Box>
                              }
                            >
                              <Button
                                margin={16}
                                onClick={() => innerSetState({ isShown: true })}
                              >
                                Show Inner Popover
                              </Button>
                            </Popover>
                          </React.Fragment>
                        )
                      }}
                    </Component>
                    <Component
                      initialState={{
                        isShown: false
                      }}
                    >
                      {({ state: innerState, setState: innerSetState }) => {
                        return (
                          <React.Fragment>
                            <Button
                              margin={16}
                              onClick={() => innerSetState({ isShown: true })}
                            >
                              Show Inner Dialog
                            </Button>
                            <Combobox
                              margin={16}
                              openOnFocus
                              items={comboboxItems}
                            />
                            <Dialog
                              isShown={innerState.isShown}
                              onCloseComplete={() =>
                                innerSetState({ isShown: false })
                              }
                              title="Stackity Hackity"
                            >
                              <img src="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                              <Combobox openOnFocus items={comboboxItems} />
                            </Dialog>
                          </React.Fragment>
                        )
                      }}
                    </Component>
                  </SideSheet>
                </React.Fragment>
              )}
            </Component>
          </Dialog>
          <Button margin={16} onClick={show}>
            Show Dialog with Side Sheet
          </Button>
        </Box>
      )}
    </DialogManager>
  ))
