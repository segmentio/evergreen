import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Textarea } from '..'
import { Label, Text } from '../../typography'

const Description = props => (
  <Text is="p" marginTop={0} size={300} color="muted" {...props} />
)

storiesOf('textarea', module).add('overview', () => (
  <Box padding={48}>
    <Box marginBottom={24} width={360}>
      <Label htmlFor={32} size={400} display="block">
        Default
      </Label>
      <Description marginBottom={8}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
      </Description>
      <Textarea name={32} id={32} placeholder="With placeholder" />
    </Box>
    <Box marginBottom={24} width={360}>
      <Label htmlFor="disabled" size={400} display="block">
        Disabled
      </Label>
      <Textarea
        value="This is disabled"
        name="disabled"
        id="disabled"
        disabled
      />
    </Box>
    <Box marginBottom={24} width={360}>
      <Label htmlFor="isInvalid" size={400} display="block">
        Is Invalid
      </Label>
      <Textarea name="isInvalid" id="isInvalid" isInvalid />
    </Box>
  </Box>
))
