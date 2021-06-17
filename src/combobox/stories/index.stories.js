import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import starWarsNames from 'starwars-names'
import Box from 'ui-box'
import { Combobox } from '..'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

// Generate a big list of items
const items = starWarsNames.all.sort((a, b) => {
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

const customItems = items.map(i => ({ label: i }))

const handleChange = selectedItem => {
  // eslint-disable-next-line no-console
  console.log(selectedItem)
}

storiesOf('combobox', module).add('Combobox', () => {
  const [value, setValue] = useState('')
  return (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Box marginBottom={16}>
        <Heading>Default usage</Heading>
        <Combobox
          autocompleteProps={{
            title: 'Hello World'
          }}
          items={items}
          onChange={handleChange}
        />
      </Box>
      <Box marginBottom={16}>
        <Heading>Custom width</Heading>
        <Combobox width={120} items={items} onChange={handleChange} />
      </Box>
      <Box marginBottom={16} marginLeft={400}>
        <Heading>Custom width + offset</Heading>
        <Combobox width={120} items={items} onChange={handleChange} />
      </Box>
      <Box marginBottom={16}>
        <Heading>Open on focus</Heading>
        <Combobox openOnFocus items={items} onChange={handleChange} />
      </Box>
      <Box marginBottom={16}>
        <Heading>Default value</Heading>
        <Combobox initialSelectedItem="Yoda" items={items} onChange={handleChange} />
      </Box>
      <Box marginBottom={16}>
        <Heading>Any value</Heading>
        <Combobox
          items={items}
          selectedItem={value}
          autocompleteProps={{
            onStateChange: changes => {
              if (changes.selectedItem) {
                setValue(changes.selectedItem)
              } else if (changes.inputValue) {
                setValue(changes.inputValue)
              }
            }
          }}
        />
      </Box>
      <Box marginBottom={16}>
        <Heading>Custom item objects</Heading>
        <Combobox
          initialSelectedItem={customItems[0]}
          items={customItems}
          itemToString={i => (i ? i.label : '')}
          onChange={handleChange}
        />
      </Box>
      <Box marginBottom={16}>
        <Heading>Disabled usage</Heading>
        <Combobox items={items} onChange={handleChange} disabled />
      </Box>
      <Box marginBottom={16}>
        <Heading>Loading usage</Heading>
        <Combobox items={items} onChange={handleChange} isLoading />
      </Box>

      <Box marginBottom={16}>
        <Heading>Full width combobox</Heading>
        <Pane display="flex" background="tint1" padding={16}>
          <Combobox
            width="100%"
            initialSelectedItem={customItems[0]}
            items={customItems}
            itemToString={i => (i ? i.label : '')}
            onChange={handleChange}
          />
        </Pane>

        <Heading>Pane has 75% width</Heading>
        <Pane display="flex" background="tint2" width="75%" padding={16}>
          <Combobox
            width="100%"
            initialSelectedItem={customItems[0]}
            items={customItems}
            itemToString={i => (i ? i.label : '')}
            onChange={handleChange}
          />
        </Pane>

        <Heading>Pane is a column flexbox and Combobox is set to 100% width</Heading>
        <Pane flexDirection="column" display="flex" background="greenTint" padding={16}>
          <Combobox
            width="100%"
            initialSelectedItem={customItems[0]}
            items={customItems}
            itemToString={i => (i ? i.label : '')}
            onChange={handleChange}
          />
        </Pane>
      </Box>
    </Box>
  )
})
