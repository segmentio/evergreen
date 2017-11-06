import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Switch } from '../src/'

storiesOf('evergreen-switch', module)
  .add('Switch', () =>
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Switch>Switch</Switch>
    </Box>,
  )