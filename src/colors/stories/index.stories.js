import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorExamples from './ColorExamples'

storiesOf('colors', module).add('overview', () => (
  <div style={{ margin: 40 }}>
    <ColorExamples />
  </div>
))
