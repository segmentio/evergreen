import React from 'react'
import { storiesOf } from '@storybook/react'
import starWarsNames from 'starwars-names'
import Box from 'ui-box'
import { Autocomplete } from '..'
import { Button } from '../../buttons'
import { Image } from '../../image'
import { Pane } from '../../layers'
import { TextInput } from '../../text-input'
import { Small, Text } from '../../typography'

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

const itemsWithdetails = items.map(x => ({
  name: x,
  unique_id: `${x}-${Math.floor(Math.random() * 100)}`,
  image_src: `http://lorempixel.com/100/50?x=${Math.floor(Math.random() * 100)}`,
  power_score: Math.floor(Math.random() * 100)
}))

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
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput placeholder="Trigger with button" value={inputValue} {...getInputProps()} />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      </Box>
      {/* Autocomplete with custom autocomplete item render */}
      <Box padding={40}>
        <Autocomplete
          itemSize={50}
          onChange={handleChange}
          itemToString={item => (item ? item.name : '')}
          items={itemsWithdetails}
          renderItem={({ isHighlighted, isSelected, item, ...props }) => (
            <Pane
              display="flex"
              alignItems="center"
              justifyContent="left"
              gap={10}
              key={item.unique_id}
              {...props}
              paddingX={12}
              cursor="pointer"
            >
              <Image src={item.image_src} width={50} />
              <Text color="grey">{item.name}</Text>
              <Small color="grey" size={300} flex={1}>
                (Power: {item.power_score})
              </Small>
            </Pane>
          )}
        >
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput placeholder="Custom item renderer" value={inputValue} {...getInputProps()} />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      </Box>
    </Box>
  )
})
