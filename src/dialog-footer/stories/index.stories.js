import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { DialogFooter } from '../../dialog-footer'

storiesOf('dialog-footer', module).add('DialogFooter', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <DialogFooter
      isConfirmDisabled={true}
      isConfirmLoading={true}
      hasCancel={true}
      intent="none"
      cancelLabel="Cancel"
      confirmLabel="Confirm"
      onCancel={close}
      onConfirm={close}
    />
    <DialogFooter
      isConfirmDisabled={true}
      isConfirmLoading={false}
      hasCancel={true}
      intent="none"
      cancelLabel="Cancel"
      confirmLabel="Confirm"
      onCancel={close}
      onConfirm={close}
    />
    <DialogFooter
      isConfirmDisabled={false}
      isConfirmLoading={false}
      hasCancel={true}
      intent="none"
      cancelLabel="Cancel"
      confirmLabel="Confirm"
      onCancel={close}
      onConfirm={close}
    />
    <DialogFooter
      isConfirmDisabled={false}
      isConfirmLoading={false}
      hasCancel={false}
      intent="none"
      cancelLabel="Cancel"
      confirmLabel="Confirm"
      onConfirm={close}
    />
  </Box>
))
