import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import options from '../docs/starwars-options'
import Manager from '../docs/Manager'
import { SelectMenu } from '../../select-menu'
import { Button } from '../../buttons'
import collapsibleGroupedOptions from '../docs/collapsible-grouped-options'
import groupedOptions from '../docs/grouped-options'

storiesOf('select-menu', module)
  .add('options', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager>
        {({ setState, state }) => (
          <SelectMenu
            title="Select Name"
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
  .add('grouped options', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager>
        {({ setState, state }) => (
          <SelectMenu
            title="Select Property"
            options={groupedOptions}
            selected={state.selected}
            onSelect={item => setState({ selected: item.value })}
            width={280}
            height={320}
          >
            <Button>{state.selected || 'Select name from  groups...'}</Button>
          </SelectMenu>
        )}
      </Manager>
    </Box>
  ))
  .add('collapsible grouped options', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Manager>
        {({ setState, state }) => (
          <SelectMenu
            title="Select Property"
            options={collapsibleGroupedOptions}
            selected={state.selected}
            onSelect={item => setState({ selected: item.value })}
            width={280}
            height={320}
          >
            <Button marginLeft={12}>
              {state.selected || 'Select name from collapsible groups...'}
            </Button>
          </SelectMenu>
        )}
      </Manager>
    </Box>
  ))
