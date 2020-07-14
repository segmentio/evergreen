import { storiesOf } from '@storybook/react'
import Component from '@reactions/component'
import React from 'react'
import Box from 'ui-box'
import { Button } from '../../buttons'
import { Text } from '../../typography'
import { Pane } from '../../layers'
import { TextInput } from '../../text-input'
import { PeopleIcon } from '../../icons'
import options, { optionsWithIcons } from './starwars-options'
import Manager from './Manager'
import { SelectMenu } from '..'

storiesOf('select-menu', module).add('SelectMenu', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box marginBottom={24}>
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
    <Box marginBottom={24}>
      <Manager>
        {({ setState, state }) => (
          <SelectMenu
            title="Select name"
            options={options}
            selected={state.selected}
            onSelect={item => setState({ selected: item.value })}
            closeOnSelect
          >
            <Button>Menu will close on select</Button>
          </SelectMenu>
        )}
      </Manager>
    </Box>
    <Box marginBottom={24}>
      <Manager>
        {({ setState, state }) => (
          <SelectMenu
            title="Select name"
            options={optionsWithIcons}
            selected={state.selected}
            onSelect={item => setState({ selected: item.value })}
          >
            <Button>Options with icons</Button>
          </SelectMenu>
        )}
      </Manager>
    </Box>
    <Box marginBottom={24}>
      <Manager>
        {({ setState, state }) => (
          <Pane display="inline-block">
            <Text display="block">Filter Text: {state.filterText}</Text>
            <SelectMenu
              title="Select name"
              options={options}
              selected={state.selected}
              onFilterChange={filterText => setState({ filterText })}
              onSelect={item => setState({ selected: item.value })}
            >
              <Button>Select w/ onFilterChange</Button>
            </SelectMenu>
          </Pane>
        )}
      </Manager>
    </Box>
    <Box marginBottom={24}>
      <Manager>
        {({ setState, state }) => (
          <Pane display="block">
            <Box
              width={250}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box marginBottom={12}>
                <Text display="block">
                  Filter Placeholder: {state.filterPlaceholder}
                </Text>
                <TextInput
                  onChange={event =>
                    setState({ placeholderText: event.target.value })
                  }
                  width={100}
                  height={20}
                  display="inline-block"
                />
              </Box>
            </Box>
            <SelectMenu
              title="Select w/ custom filter placeholder and icon"
              options={options}
              selected={state.selected}
              filterPlaceholder={state.placeholderText}
              filterIcon={<PeopleIcon />}
              onFilterChange={filterText => setState({ filterText })}
              onSelect={item => setState({ selected: item.value })}
            >
              <Button width={300}>
                Select w/ custom filter placeholder and icon
              </Button>
            </SelectMenu>
          </Pane>
        )}
      </Manager>
    </Box>
    <Box marginBottom={24}>
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
    </Box>
    <Box marginBottom={24}>
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
  </Box>
))
