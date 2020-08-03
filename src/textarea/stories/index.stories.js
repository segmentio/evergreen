import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Label, Text, Heading } from '../../typography'
import { Textarea, TextareaField } from '..'

class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  state = {}

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state
    })
  }
}

const Description = props => (
  <Text is="p" marginTop={0} size={300} color="muted" {...props} />
)

storiesOf('textarea', module)
  .add('overview', () => (
    <Box padding={48}>
      <Box marginBottom={24} width={360}>
        <Label htmlFor="32" size={400} display="block">
          Default
        </Label>
        <Description marginBottom={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
        </Description>
        <Textarea name="32" id="32" placeholder="With placeholder" />
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
  .add('TextareaField', () => (
    <Box padding={40}>
      <Heading size={700} marginBottom={40}>
        TextareaField component
      </Heading>
      <TextareaField
        label="Default textarea field"
        description="This is a description."
        placeholder="Placeholder text"
      />
      <TextareaField
        id="ids-are-optional"
        label="A required textarea field"
        required
        description="This is a description."
        placeholder="Placeholder text"
      />
      <TextareaField
        isInvalid
        required
        label="A required textarea field"
        description="This is a description."
        validationMessage="This field is required"
      />
      <Manager>
        {({ state, setState }) => {
          return (
            <TextareaField
              label="A controlled textarea field"
              required
              description="This is a description."
              value={state.value}
              onChange={e => setState({ value: e.target.value })}
            />
          )
        }}
      </Manager>
    </Box>
  ))
