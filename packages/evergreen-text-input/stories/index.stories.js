import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Text, Label, Heading } from 'evergreen-typography'
import { TextInput, TextInputAppearances } from '../src/'

const Description = props => (
  <Text is="p" marginTop={0} size={300} color="extraMuted" {...props} />
)

storiesOf('text-input', module).add('TextInput', () => (
  <div>
    {Object.keys(TextInputAppearances).map(appearance => (
      <Box padding={40} float="left">
        <Heading marginBottom={24}>Appearance: {appearance}</Heading>
        <Box marginBottom={24} width={360}>
          <Label htmlFor={32} size={400} display="block">
            Height 32 (default)
          </Label>
          <Description marginBottom={8}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
          </Description>
          <TextInput
            appearance={appearance}
            name={32}
            id={32}
            placeholder="With placeholder"
          />
        </Box>
        <Box marginBottom={24} width={360}>
          <Label htmlFor="disabled" size={400} display="block">
            Disabled
          </Label>
          <TextInput
            appearance={appearance}
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
          <TextInput
            appearance={appearance}
            name="isInvalid"
            id="isInvalid"
            isInvalid
          />
        </Box>
        <Box marginBottom={24}>
          <Label htmlFor={24} size={300} display="block" marginBottom={4}>
            Height 24
          </Label>
          <TextInput appearance={appearance} height={24} name={24} id={24} />
        </Box>
        <Box marginBottom={24}>
          <Label htmlFor={28} size={300} display="block" marginBottom={4}>
            Height 28
          </Label>
          <TextInput appearance={appearance} height={28} name={28} id={28} />
        </Box>
        <Box marginBottom={24}>
          <Label htmlFor={36} size={400} display="block" marginBottom={4}>
            Height 36
          </Label>
          <TextInput appearance={appearance} height={36} name={36} id={36} />
        </Box>
        <Box marginBottom={24}>
          <Label htmlFor={40} size={500} display="block" marginBottom={4}>
            Height 40
          </Label>
          <TextInput appearance={appearance} height={40} name={40} id={40} />
        </Box>
      </Box>
    ))}
  </div>
))
