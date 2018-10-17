import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { Autocomplete } from '..'
import { TextInput } from '../../text-input'
import { Button } from '../../buttons'

// Generate a big list of items
const items = [
  ...starWarsNames.all,
  ...starWarsNames.all.map(x => `${x} 2`),
  ...starWarsNames.all.map(x => `${x} 3`)
].sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
})

const handleChange = selectedItem => {
  console.log(selectedItem)
}

storiesOf('autocomplete', module).add('Autocomplete', () => (
  <Box>
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Autocomplete
        title="Starwars names"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, getRef, inputValue }) => (
          <TextInput
            placeholder="Starwars names"
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps()}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete
        title="Starwars names"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, getRef, inputValue, openMenu }) => (
          <TextInput
            width={160}
            placeholder="Min width in effect"
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete onChange={handleChange} items={items}>
        {({ getInputProps, getRef, openMenu, inputValue }) => (
          <TextInput
            placeholder="Open on focus"
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete
        isFilterDisabled
        title="Disable filter"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, openMenu, getRef, inputValue }) => (
          <TextInput
            placeholder="Disable filter and open on focus"
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete title="Suggestions" onChange={handleChange} items={items}>
        {({ getInputProps, getRef, openMenu, inputValue }) => (
          <TextInput
            placeholder="Open on focus with title"
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete onChange={handleChange} items={items}>
        {({
          getInputProps,
          getToggleButtonProps,
          getRef,
          inputValue,
          toggleMenu
        }) => (
          <Box innerRef={ref => getRef(ref)} display="inline-block">
            <TextInput
              placeholder="Trigger with button"
              value={inputValue}
              {...getInputProps()}
            />
            <Button onClick={toggleMenu} {...getToggleButtonProps()}>
              Trigger
            </Button>
          </Box>
        )}
      </Autocomplete>
    </Box>
  </Box>
))
