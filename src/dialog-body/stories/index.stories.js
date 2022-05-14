import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { DialogBody } from '../../dialog-body'

storiesOf('dialog-body', module)
  .add('DialogBody', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <DialogBody>DialogBody</DialogBody>
    </Box>
  ))