import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { Heading } from 'evergreen-typography'
import { Combobox } from '../src/'

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

storiesOf('combobox', module).add('Combobox', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box marginBottom={16}>
      <Heading>Default usage</Heading>
      <Combobox items={items} onChange={handleChange} />
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
      <Heading>With input props</Heading>
      <Combobox
        openOnFocus
        items={items}
        onChange={handleChange}
        inputProps={{
          placeholder: 'Filter names...',
        }}
      />
    </Box>
    <Box marginBottom={16}>
      <Heading>Default value</Heading>
      <Combobox
        defaultSelectedItem="Yoda"
        items={items}
        onChange={handleChange}
      />
    </Box>
    <Box marginBottom={16}>
      <Heading>Custom item objects</Heading>
      <Combobox
        defaultSelectedItem={customItems[0]}
        items={customItems}
        itemToString={i => i.label}
        onChange={handleChange}
      />
    </Box>
  </Box>
))
