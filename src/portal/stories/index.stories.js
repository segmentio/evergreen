import React from 'react'
import { storiesOf } from '@storybook/react'
import { Portal } from '..'

storiesOf('portal', module).add('Portal', () => (
  <div>
    <Portal>
      <div>Portal</div>
    </Portal>
  </div>
))
