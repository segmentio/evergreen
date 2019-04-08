import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Portal } from '..'

storiesOf('portal', module).add('Portal', () => (
  <div>
    <Portal>
      <div>Portal</div>
    </Portal>
  </div>
))
