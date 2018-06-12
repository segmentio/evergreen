import { storiesOf } from '@storybook/react'
import arrify from 'arrify'
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
    <Manager>
      {({ setState, state }) => (
        <SelectMenu
          title="Select multiple names"
          options={options}
          selected={state.selected}
          onSelect={item => {
            let selected
            if (Array.isArray(state.selected)) {
              selected = [...state.selected, item.value]
            } else {
              selected = arrify(item.value)
            }
            const selectedItems = selected
            const selectedItemsLength = selectedItems.length
            let selectedNames = ''
            // Switch (true) {
            //   case selectedItemsLength === 0:
            //     selectedNames = ''
            //     break
            //   case selectedItemsLength === 1:
            //     selectedNames = selectedItems.toString()
            //     break
            //   case selectedItemsLength > 1:
            //     selectedNames = selectedItems.toString().substr(0, 25) + '...'
            //     break
            //   default:
            //     break
            // }
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
            // Switch (true) {
            //   case selectedItemsLength === 0:
            //     selectedNames = ''
            //     break
            //   case selectedItemsLength === 1:
            //     selectedNames = selectedItems.toString()
            //     break
            //   case selectedItemsLength > 1:
            //     selectedNames = selectedItems.toString().substr(0, 25) + '...'
            //     break
            //   default:
            //     break
            // }
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
    </Manager>
  </Box>
))
