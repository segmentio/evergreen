import { storiesOf } from '@storybook/react'
import React from 'react'
import { Portal } from '..'

storiesOf('Components|Utilies & Helpers/portal', module).add('Portal', () => (
  <div>
    <Portal>
      <div>Portal</div>
    </Portal>
  </div>
))
