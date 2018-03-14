import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import options from '../docs/starwars-options'
import Manager from '../docs/Manager'
import { SelectMenu } from '../../select-menu'
import { Button } from '../../buttons'

storiesOf('select-menu', module).add('SelectMenu', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Manager>
      {({ setState, state }) => (
        <SelectMenu
          title="Select name"
          options={options}
          selected={state.selected}
          onSelect={item => setState({ selected: item.value })}
        >
          <Button>{state.selected || 'Select name...'}</Button>
        </SelectMenu>
      )}
    </Manager>
  </Box>
))
