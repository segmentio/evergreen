import React from 'react'
import { storiesOf } from '@storybook/react'
import BasicExample from '../fixtures/BasicExample'
import BasicWithLinkExample from '../fixtures/BasicWithLinkExample'
import SmallExample from '../fixtures/SmallExample'
import SmallMinimalExample from '../fixtures/SmallMinimalExample'
import TableWithActionExample from '../fixtures/TableWithActionExample'
import TableWithLinkExample from '../fixtures/TableWithLinkExample'

storiesOf('empty-states', module)
  .add('Basic Example', () => {
    return <BasicExample />
  })
  .add('Basic with Link Example', () => {
    return <BasicWithLinkExample />
  })
  .add('Table with Action Example', () => {
    return <TableWithActionExample />
  })
  .add('Table with Link Example', () => {
    return <TableWithLinkExample />
  })
  .add('Small Example', () => {
    return <SmallExample />
  })
  .add('Small Minimal Example', () => {
    return <SmallMinimalExample />
  })
