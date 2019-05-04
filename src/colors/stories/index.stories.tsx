import { storiesOf } from '@storybook/react'
import React from 'react'
import ColorExamples from './ColorExamples'
import ColorMapping from './ColorMapping'

storiesOf('colors', module)
  .add('overview', () => (
    <div style={{ margin: 40 }}>
      <ColorExamples />
    </div>
  ))
  .add('mapping v3 to v4 colors', () => <ColorMapping />)
