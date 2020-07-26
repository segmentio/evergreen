import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Text, Label } from '../../typography'
import { Select } from '..'

const Description = props => (
  <Text is="p" marginTop={0} size={300} color="muted" {...props} />
)

const appearance = 'default'

storiesOf('select', module).add('Select', () => (
  <Box padding={48}>
    <Box marginBottom={24} width={360}>
      <Label htmlFor="32" size={400} display="block">
        Height 32 (default)
      </Label>
      <Description marginBottom={8}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
      </Description>
      <Select appearance={appearance} name="32" id="32">
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24} width={360}>
      <Label htmlFor="disabled" size={400} display="block">
        Disabled
      </Label>
      <Select
        appearance={appearance}
        value="This is disabled"
        name="disabled"
        id="disabled"
        disabled
      >
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24} width={360}>
      <Label htmlFor="isInvalid" size={400} display="block">
        Is Invalid
      </Label>
      <Select appearance={appearance} name="isInvalid" id="isInvalid" isInvalid>
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24}>
      <Label htmlFor="24" size={300} display="block" marginBottom={4}>
        Height 24
      </Label>
      <Select appearance={appearance} height={24} name="24" id="24">
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24}>
      <Label htmlFor="28" size={300} display="block" marginBottom={4}>
        Height 28
      </Label>
      <Select appearance={appearance} height={28} name="28" id="28">
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24}>
      <Label htmlFor="36" size={400} display="block" marginBottom={4}>
        Height 36
      </Label>
      <Select appearance={appearance} height={36} name="36" id="36">
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
    <Box marginBottom={24}>
      <Label htmlFor="40" size={500} display="block" marginBottom={4}>
        Height 40
      </Label>
      <Select appearance={appearance} height={40} name="40" id="40">
        <option>Apple</option>
        <option>Pear</option>
        <option>Banana</option>
        <option>Kiwi</option>
      </Select>
    </Box>
  </Box>
))
