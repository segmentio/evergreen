import { storiesOf } from '@storybook/react'
import React from 'react'
import ColorExamples from './ColorExamples'

storiesOf('colors', module).add('overview', () => (
  <div style={{ margin: 40 }}>
    <ColorExamples />
  </div>
))
