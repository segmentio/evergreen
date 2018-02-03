import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import { Portal } from '../src/'

storiesOf('portal', module).add('Portal', () => (
  <div>
    <Portal>
      <div>Portal</div>
    </Portal>
  </div>
))
