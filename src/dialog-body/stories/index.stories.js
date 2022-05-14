import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { DialogBody } from '../../dialog-body'

storiesOf('dialog-body', module).add('DialogBody', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <DialogBody state="dialog body" onCancel={close}>
      Its a example of DialogBody
    </DialogBody>
  </Box>
))
