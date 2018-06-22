import { storiesOf } from '@storybook/react'
import React from 'react'
import ColorExamples from '../docs/ColorExamples'

storiesOf('colors', module).add('overview', () => (
  <div style={{ margin: 40 }}>
    <ColorExamples />
  </div>
))
