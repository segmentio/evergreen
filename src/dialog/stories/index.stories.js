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
            onCloseComplete={hide}
            confirmLabel="Custom Label"
          >
            <Paragraph>Dialog content</Paragraph>
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
            type="danger"
            confirmLabel="Dangerous Action"
          >
            <Paragraph>Dialog content</Paragraph>
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
            title="Dialog with Confirmation Button Only"
            onCloseComplete={hide}
            hasCancel={false}
            confirmLabel="Got It"
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
  </Box>
))
