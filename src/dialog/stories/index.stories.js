import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import DialogManager from '../docs/DialogManager'
import { Paragraph } from '../../typography'
import { Dialog } from '../../dialog'
import { Button } from '../../buttons'

storiesOf('dialog', module).add('Dialog', () => (
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
            onExited={hide}
            primaryButton={{
              onClick: close => {
                close()
              },
              children: 'Primary Button'
            }}
          >
            <Paragraph>Dialog content</Paragraph>
          </Dialog>
          <Button onClick={show}>Show Dialog with Primary Button</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with Red Primary Button"
            onExited={hide}
            primaryButton={{
              onClick: close => {
                close()
              },
              appearance: 'red',
              children: 'Primary Button'
            }}
          >
            <Paragraph>Dialog content</Paragraph>
          </Dialog>
          <Button onClick={show}>Show Dialog with Red Button</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, isLoading, confirmLoading, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with Primary Confirmation"
            onExited={hide}
            primaryButton={{
              children: isLoading ? 'Loading...' : 'Confirm Loading',
              onClick: confirmLoading,
              isLoading
            }}
            hideCancelButton
          >
            <Paragraph>
              This is useful when you need to process something before closing
              the dialog.
            </Paragraph>
          </Dialog>
          <Button onClick={show}>Show Dialog with Loading Confirmation</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with Primary Button Only"
            onExited={hide}
            primaryButton={{
              children: 'Got It'
            }}
            hideCancelButton
          >
            <Paragraph>
              This is useful for product updates and onboarding content.
            </Paragraph>
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
            onExited={hide}
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
            onExited={hide}
          >
            {({ close }) => (
              <Box>
                <Paragraph>Manage Your Own Buttons and Interactions.</Paragraph>
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
          <Dialog isShown={isShown} hideHeader onExited={hide}>
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
            onExited={hide}
            primaryButton={{
              onClick: close => {
                close()
              },
              children: 'Primary Button'
            }}
          >
            <Box height={1200} width="100%" backgroundColor="#ddd" />
          </Dialog>
          <Button onClick={show}>Show Dialog with Internal Scrolling</Button>
        </Box>
      )}
    </DialogManager>
  </Box>
))
