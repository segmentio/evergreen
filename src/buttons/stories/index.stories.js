import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { IconButton, Button, BackButton, TextDropdownButton } from '..'
import { Heading } from '../../typography'
import { Pane } from '../../layers'
import { SegmentedControl } from '../../segmented-control'

const buttonsStory = storiesOf(
  'Components|Buttons & Atomic Elements/Buttons',
  module
)
buttonsStory.addDecorator(withKnobs)

buttonsStory.add('Common', () => (
  <Box padding={40}>
    <Component
      initialState={{
        options: [
          { label: 'Height 24', value: 24 },
          { label: 'Height 32', value: 32 },
          { label: 'Height 40', value: 40 }
        ],
        value: 32
      }}
    >
      {({ state, setState }) => (
        <React.Fragment>
          <SegmentedControl
            width={280}
            options={state.options}
            value={state.value}
            onChange={value => setState({ value: Number(value) })}
          />
          <Pane marginTop={16}>
            <Button height={state.value} marginRight={16}>
              Close
            </Button>
            <Button height={state.value} marginRight={16}>
              Cancel
            </Button>
            <BackButton height={state.value} marginRight={16}>
              Back
            </BackButton>
            <Button
              height={state.value}
              marginRight={16}
              iconAfter="caret-down"
            >
              Select event...
            </Button>
            <Button height={state.value} marginRight={16} iconBefore="add">
              New Audience
            </Button>
            <Button height={state.value} marginRight={16} iconBefore="download">
              Download
            </Button>
            <Button height={state.value} marginRight={16} iconBefore="download">
              Download CSV...
            </Button>
            <Button height={state.value} marginRight={16} iconBefore="edit">
              Edit
            </Button>
            <Button height={state.value} marginRight={16} iconBefore="manual">
              Docs
            </Button>
            <Button height={state.value} iconBefore="import">
              Import
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button height={state.value} appearance="primary" marginRight={16}>
              Confirm
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              marginRight={16}
              iconAfter="arrow-right"
            >
              Next Step
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              marginRight={16}
              iconBefore="eye-open"
            >
              Preview
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
            >
              Got It
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore="add"
            >
              Add Source
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore="add"
            >
              Add Destination
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore="add"
            >
              New Audience
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore="add"
            >
              New Computed Trait
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              height={state.value}
              intent="warning"
              marginRight={16}
              iconBefore="refresh"
            >
              Retry
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="warning"
              marginRight={16}
              iconBefore="blocked-person"
            >
              Disable User
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              height={state.value}
              appearance="minimal"
              intent="danger"
              marginRight={16}
              iconBefore="trash"
            >
              Delete...
            </Button>
            <Button
              height={state.value}
              intent="danger"
              marginRight={16}
              iconBefore="trash"
            >
              Delete...
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="danger"
              marginRight={16}
              iconBefore="trash"
            >
              Permanently Delete Workspace...
            </Button>
          </Pane>
        </React.Fragment>
      )}
    </Component>
  </Box>
))

buttonsStory.add('Button types', () => (
  <Box padding={40}>
    <Component
      initialState={{
        options: [
          { label: 'Height 24', value: 24 },
          { label: 'Height 32', value: 32 },
          { label: 'Height 40', value: 40 }
        ],
        value: 32
      }}
    >
      {({ state, setState }) => (
        <React.Fragment>
          <SegmentedControl
            width={280}
            options={state.options}
            value={state.value}
            onChange={value => setState({ value: Number(value) })}
          />
          <Heading marginTop="default">Default Appearance</Heading>
          <Box marginTop={12}>
            {['default', 'success', 'warning', 'danger'].map(intent => (
              <Button
                key={intent}
                intent={intent}
                marginRight={16}
                disabled={boolean('Disabled', false)}
                isLoading={boolean('isLoading', false)}
                isActive={boolean('isActive', false)}
                height={select('Height', ['24', '32', '40'], state.value)}
                paddingBottom={number('Padding Bottom', '0')}
                paddingTop={number('Padding Top', '0')}
              >
                {intent.charAt(0).toUpperCase() + intent.slice(1)}
              </Button>
            ))}
          </Box>
          <Heading marginTop="default">Primary Appearance</Heading>
          <Box marginTop={12}>
            {['default', 'success', 'warning', 'danger'].map(intent => (
              <Button
                key={intent}
                intent={intent}
                appearance="primary"
                marginRight={16}
                disabled={boolean('Disabled', false)}
                isLoading={boolean('isLoading', false)}
                isActive={boolean('isActive', false)}
                height={select('Height', ['24', '32', '40'], state.value)}
                paddingBottom={number('Padding Bottom', '0')}
                paddingTop={number('Padding Top', '0')}
              >
                {intent.charAt(0).toUpperCase() + intent.slice(1)}
              </Button>
            ))}
          </Box>
          <Heading marginTop="default">Minimal Appearance</Heading>
          <Box marginTop={12}>
            {['default', 'success', 'warning', 'danger'].map(intent => (
              <Button
                key={intent}
                intent={intent}
                appearance="minimal"
                marginRight={16}
                disabled={boolean('Disabled', false)}
                isLoading={boolean('isLoading', false)}
                isActive={boolean('isActive', false)}
                height={select('Height', ['24', '32', '40'], state.value)}
                paddingBottom={number('Padding Bottom', '0')}
                paddingTop={number('Padding Top', '0')}
              >
                {intent.charAt(0).toUpperCase() + intent.slice(1)}
              </Button>
            ))}
          </Box>
        </React.Fragment>
      )}
    </Component>
  </Box>
))

buttonsStory.add('TextDropdownButton', () => (
  <Box padding={40}>
    <TextDropdownButton>Table Header</TextDropdownButton>
  </Box>
))

buttonsStory.add('IconButton', () => (
  <Box padding={40} clearfix>
    <Pane borderRight paddingRight={24} marginRight={24} float="left">
      <Heading marginBottom={16}>Height 32</Heading>
      <Box float="left" marginRight={16}>
        {['cog', 'plus', 'filter', 'edit', 'refresh'].map(icon => (
          <IconButton key={icon} marginBottom={16} icon={icon} />
        ))}
      </Box>
      <Box float="left">
        {['cross', 'more', 'plus', 'edit', 'search'].map(icon => (
          <IconButton
            key={icon}
            marginBottom={16}
            appearance="minimal"
            icon={icon}
          />
        ))}
      </Box>
    </Pane>
    <Pane float="left">
      <Heading marginBottom={16}>Height 24</Heading>
      <Box float="left" marginRight={16}>
        {['cog', 'plus', 'filter', 'edit', 'chevron-left', 'chevron-right'].map(
          icon => (
            <IconButton key={icon} marginBottom={16} height={24} icon={icon} />
          )
        )}
      </Box>
      <Box float="left" marginRight={16}>
        {['cross', 'more', 'plus', 'trash', 'filter', 'edit'].map(icon => (
          <IconButton
            key={icon}
            marginBottom={16}
            appearance="minimal"
            height={24}
            icon={icon}
          />
        ))}
      </Box>
      <Box float="left">
        {['trash', 'calendar', 'lock', 'unlock', 'notifications', 'manual'].map(
          icon => (
            <IconButton
              key={icon}
              marginBottom={16}
              appearance="minimal"
              height={24}
              icon={icon}
            />
          )
        )}
      </Box>
    </Pane>
  </Box>
))

buttonsStory.add('BackButton', () => (
  <Box padding={40}>
    <BackButton
      intent={select(
        'Intent',
        ['none', 'success', 'warning', 'danger'],
        'none'
      )}
      appearance={select(
        'Appearance',
        ['default', 'primary', 'minimal'],
        'default'
      )}
      disabled={boolean('Disabled', false)}
      isLoading={boolean('isLoading', false)}
      isActive={boolean('isActive', false)}
      height={select('Height', ['24', '32', '40'], '32')}
      paddingBottom={number('Padding Bottom', '0')}
      paddingTop={number('Padding Top', '0')}
    >
      Back
    </BackButton>
  </Box>
))

buttonsStory.add('Button isLoading', () => (
  <Box padding={80}>
    <Component
      initialState={{
        isShown: false
      }}
    >
      {({ state, setState }) => (
        <Button
          marginRight={16}
          isLoading={state.isLoading}
          onClick={() => {
            setState({
              isLoading: !state.isLoading
            })
            window.setTimeout(() => {
              setState({
                isLoading: state.isLoading
              })
            }, 2000)
          }}
        >
          {state.isLoading ? 'Loading...' : 'Click to Load'}
        </Button>
      )}
    </Component>
  </Box>
))

buttonsStory.add('Button margin top', () => (
  <Box padding={40}>
    <Button marginTop={400}>Debug margin top</Button>
  </Box>
))
