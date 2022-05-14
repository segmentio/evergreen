import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { DialogHeader } from '../../dialog-header'

storiesOf('dialog-header', module)
  .add('DialogHeader', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <DialogHeader>DialogHeader</DialogHeader>
    </Box>
  ))