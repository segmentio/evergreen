import React from 'react'
import { storiesOf } from '@storybook/react'
import starWarsNames from 'starwars-names'
import Box from 'ui-box'
import { Autocomplete } from '..'
import { Button } from '../../buttons'
import { TextInput } from '../../text-input'
import { Label, Code } from '../../typography'

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

storiesOf('autocomplete', module).add('Autocomplete', () => {
  const [selectedItem, setSelectedItem] = React.useState('')

  const handleChange = React.useCallback(selection => {
    // eslint-disable-next-line no-console
    console.log(selection)
    setSelectedItem(selection)
  }, [])

  return (
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
          selectedItem={selectedItem}
          allowOtherValues
        >
          {({ getInputProps, getRef, inputValue }) => (
            <TextInput placeholder="Starwars names" value={inputValue} ref={ref => getRef(ref)} {...getInputProps()} />
          )}
        </Autocomplete>
      </Box>
      <Box padding={40}>
        <Autocomplete title="Starwars names" onChange={handleChange} items={items}>
          {({ getInputProps, getRef, inputValue, openMenu }) => (
            <TextInput
              width={160}
              placeholder="Min width in effect"
              value={inputValue}
              ref={ref => getRef(ref)}
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
          {({ getInputProps, getRef, inputValue, openMenu }) => (
            <TextInput
              placeholder="Open on focus"
              value={inputValue}
              ref={ref => getRef(ref)}
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
        <Autocomplete isFilterDisabled title="Disable filter" onChange={handleChange} items={items}>
          {({ getInputProps, getRef, inputValue, openMenu }) => (
            <TextInput
              placeholder="Disable filter and open on focus"
              value={inputValue}
              ref={ref => getRef(ref)}
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
          {({ getInputProps, getRef, inputValue, openMenu }) => (
            <TextInput
              placeholder="Open on focus with title"
              value={inputValue}
              ref={ref => getRef(ref)}
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
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="flex">
              <TextInput placeholder="Trigger with button" value={inputValue} {...getInputProps()} />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      </Box>
      <Box padding={40}>
        <Box marginBottom={16}>
          <Label>
            Uncontrolled Example w/ <Code size="small">allowOtherValues</Code>
          </Label>
        </Box>
        <Autocomplete
          allowOtherValues={true}
          items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
          title="Fruits"
        >
          {props => {
            const { getInputProps, getRef, inputValue } = props
            return <TextInput placeholder="Fruits" value={inputValue} ref={getRef} {...getInputProps()} />
          }}
        </Autocomplete>
      </Box>
    </Box>
  )
})
