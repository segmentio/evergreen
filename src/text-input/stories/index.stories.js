import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { ErrorIcon } from '../../icons'
import { Text, Label, Heading } from '../../typography'
import { Pane, Card } from '../../layers'
import { Button } from '../../buttons'
import { TextInputField, TextInput } from '..'

const Description = props => (
  <Text is="p" marginTop={0} size={300} color="muted" {...props} />
)

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

storiesOf('text-input', module)
  .add('TextInput', () => (
    <div>
      {['default', 'neutral'].map(appearance => (
        <Box key={appearance} padding={40} float="left">
          <Heading marginBottom={24}>Appearance: {appearance}</Heading>
          <Box marginBottom={24} width={360}>
            <Label htmlFor="32" size={400} display="block">
              Height 32 (default)
            </Label>
            <Description marginBottom={8}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
            </Description>
            <TextInput
              appearance={appearance}
              name="32"
              id="32"
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
            <Label htmlFor="24" size={300} display="block" marginBottom={4}>
              Height 24
            </Label>
            <TextInput appearance={appearance} height={24} name="24" id="24" />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor="28" size={300} display="block" marginBottom={4}>
              Height 28
            </Label>
            <TextInput appearance={appearance} height={28} name="28" id="28" />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor="36" size={400} display="block" marginBottom={4}>
              Height 36
            </Label>
            <TextInput appearance={appearance} height={36} name="36" id="36" />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor="40" size={500} display="block" marginBottom={4}>
              Height 40
            </Label>
            <TextInput appearance={appearance} height={40} name="40" id="40" />
          </Box>
        </Box>
      ))}
    </div>
  ))
  .add('TextInputField', () => (
    <Box padding={40}>
      <Heading size={700} marginBottom={40}>
        TextInputField component
      </Heading>
      <TextInputField
        label="Default text input field"
        description="This is a description."
        placeholder="Placeholder text"
      />
      <TextInputField
        id="ids-are-optional"
        label="A required text input field"
        required
        description="This is a description."
        placeholder="Placeholder text"
      />
      <TextInputField
        isInvalid
        required
        label="A required text input field"
        description="This is a description."
        validationMessage="This field is required"
      />
      <Manager>
        {({ state, setState }) => {
          return (
            <TextInputField
              label="A controlled text input field"
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
  .add('Settings example', () => {
    return (
      <Pane
        background="tint1"
        padding={40}
        height="100vh"
        boxSizing="border-box"
      >
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        <Card
          elevation={1}
          backgroundColor="white"
          width={640}
          boxSizing="border-box"
          marginX="auto"
          padding={48}
        >
          <Pane is="header" marginBottom={32}>
            <Heading id="general-settings" size={700} marginBottom={8}>
              General Settings
            </Heading>
            <Text color="muted" size={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Pane>
          <TextInputField
            value="Workspace Prod"
            required
            label="Workspace name"
          />
          <TextInputField
            required
            type="email"
            label="Billing email"
            description="We’ll send invoices and billing-related notifications to you here."
            value="some-billing@email.com"
          />
          <TextInputField
            id="ids-are-optional"
            label="Workspace ID"
            value="lgJ4AFjLN5"
            disabled
            description="This is your workspace's auto-generated unique identifier."
            hint="You are not able to change this."
          />
          <Button
            intent="success"
            appearance="primary"
            marginTop={32}
            display="flex"
          >
            Save Changes
          </Button>
          <Pane paddingTop={32} marginTop={32} marginBottom={-8} borderTop>
            <Button intent="danger" iconBefore={ErrorIcon}>
              Delete Your Workspace...
            </Button>
          </Pane>
        </Card>
      </Pane>
    )
  })
