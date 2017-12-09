import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from 'evergreen-typography'
import { Radio, RadioGroup } from '../src/'

const items = [
  { name: 'fruit', value: 'apple', label: 'Red' },
  { name: 'fruit', value: 'banana', label: 'Blue', isDefaultSelected: true },
  { name: 'fruit', value: 'pear', label: 'Yellow' },
  {
    name: 'fruit',
    value: 'custom',
    label: <strong>Custom Label</strong>
  },
  {
    name: 'fruit',
    value: 'disabled',
    label: 'Disabled Option',
    isDisabled: true
  }
]

storiesOf('radio', module)
  .add('RadioGroup', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <RadioGroup
        label="Fruit Radio Group"
        items={items}
        onChange={value => console.log('radio change', value)}
      />
    </Box>
  ))
  .add('Radio', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Heading>Default usage, size 12</Heading>
      <Box aria-label="Radio Group Label" role="group">
        <Radio name="group" label="Radio default" />
        <Radio name="group" checked label="Radio checked" />
        <Radio name="group" disabled label="Radio disabled" />
        <Radio name="group" disabled checked label="Radio checked disabled" />
      </Box>
      <Heading marginTop={40}>Bigger usage, size 16</Heading>
      <Box aria-label="Radio Group Label" role="group">
        <Radio size={16} name="group" label="Radio default" />
        <Radio size={16} name="group" checked label="Radio checked" />
        <Radio size={16} name="group" disabled label="Radio disabled" />
        <Radio
          size={16}
          name="group"
          disabled
          checked
          label="Radio checked disabled"
        />
      </Box>
    </Box>
  ))
