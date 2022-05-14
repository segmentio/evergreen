import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { DialogFooter } from '../../dialog-footer'

storiesOf('dialog-footer', module)
  .add('DialogFooter', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <DialogFooter>DialogFooter</DialogFooter>
    </Box>
  ))