import { storiesOf } from '@storybook/react'
import Component from '@reactions/component'
import React from 'react'
import Box from 'ui-box'
import { SelectMenu } from '..'
import { Button } from '../../buttons'
import { Text } from '../../typography'
import options from './starwars-options'
import Manager from './Manager'

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
    <Component
      initialState={{
        options,
        selected: []
      }}
    >
      {({ state, setState }) => (
        <SelectMenu
          isMultiSelect
          title="Select multiple names"
          options={state.options}
          selected={state.selected}
          onSelect={item => {
            const selected = [...state.selected, item.value]
            const selectedItems = selected
            const selectedItemsLength = selectedItems.length
            let selectedNames = ''
            if (selectedItemsLength === 0) {
              selectedNames = ''
            } else if (selectedItemsLength === 1) {
              selectedNames = selectedItems.toString()
            } else if (selectedItemsLength > 1) {
              selectedNames = selectedItemsLength.toString() + ' selected...'
            }
            setState({
              selected,
              selectedNames
            })
          }}
          onDeselect={item => {
            const deselectedItemIndex = state.selected.indexOf(item.value)
            const selectedItems = state.selected.filter(
              (_item, i) => i !== deselectedItemIndex
            )
            const selectedItemsLength = selectedItems.length
            let selectedNames = ''
            if (selectedItemsLength === 0) {
              selectedNames = ''
            } else if (selectedItemsLength === 1) {
              selectedNames = selectedItems.toString()
            } else if (selectedItemsLength > 1) {
              selectedNames = selectedItemsLength.toString() + ' selected...'
            }
            setState({ selected: selectedItems, selectedNames })
          }}
        >
          <Button>{state.selectedNames || 'Select multiple...'}</Button>
        </SelectMenu>
      )}
    </Component>
    <SelectMenu
      title="Empty state"
      emptyView={
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text size={300}>No options found</Text>
        </Box>
      }
    >
      <Button>Empty state</Button>
    </SelectMenu>
  </Box>
))
