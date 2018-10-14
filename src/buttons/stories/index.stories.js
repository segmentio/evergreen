import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { IconButton, Button, BackButton, TextDropdownButton } from '..'
import { Heading } from '../../typography'
import { Pane } from '../../layers'
import { SegmentedControl } from '../../segmented-control'

const buttonsStory = storiesOf('buttons', module)

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
            <Button height={state.value} marginRight={16}>
              Default
            </Button>
            <Button height={state.value} marginRight={16} intent="success">
              Success
            </Button>
            <Button height={state.value} marginRight={16} intent="warning">
              Warning
            </Button>
            <Button height={state.value} intent="danger">
              Danger
            </Button>
          </Box>
          <Heading marginTop="default">Primary Appearance</Heading>
          <Box marginTop={12}>
            <Button height={state.value} appearance="primary" marginRight={16}>
              Default
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              marginRight={16}
              intent="success"
            >
              Success
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              marginRight={16}
              intent="warning"
            >
              Warning
            </Button>
            <Button height={state.value} appearance="primary" intent="danger">
              Danger
            </Button>
          </Box>
          <Heading marginTop="default">Minimal Appearance</Heading>
          <Box marginTop={12}>
            <Button height={state.value} appearance="minimal" marginRight={16}>
              Default
            </Button>
            <Button
              height={state.value}
              appearance="minimal"
              marginRight={16}
              intent="success"
            >
              Success
            </Button>
            <Button
              height={state.value}
              appearance="minimal"
              marginRight={16}
              intent="warning"
            >
              Warning
            </Button>
            <Button height={state.value} appearance="minimal" intent="danger">
              Danger
            </Button>
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
        <IconButton marginBottom={16} icon="cog" />
        <IconButton marginBottom={16} icon="plus" />
        <IconButton marginBottom={16} icon="filter" />
        <IconButton marginBottom={16} icon="edit" />
        <IconButton marginBottom={16} icon="refresh" />
      </Box>
      <Box float="left">
        <IconButton marginBottom={16} appearance="minimal" icon="cross" />
        <IconButton marginBottom={16} appearance="minimal" icon="more" />
        <IconButton marginBottom={16} appearance="minimal" icon="plus" />
        <IconButton marginBottom={16} appearance="minimal" icon="edit" />
        <IconButton marginBottom={16} appearance="minimal" icon="search" />
      </Box>
    </Pane>
    <Pane float="left">
      <Heading marginBottom={16}>Height 24</Heading>
      <Box float="left" marginRight={16}>
        <IconButton marginBottom={16} height={24} icon="cog" />
        <IconButton marginBottom={16} height={24} icon="plus" />
        <IconButton marginBottom={16} height={24} icon="filter" />
        <IconButton marginBottom={16} height={24} icon="edit" />
        <IconButton marginBottom={16} height={24} icon="chevron-left" />
        <IconButton marginBottom={16} height={24} icon="chevron-right" />
      </Box>
      <Box float="left" marginRight={16}>
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="cross"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="more"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="plus"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="trash"
          intent="danger"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="filter"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="edit"
        />
      </Box>
      <Box float="left">
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="clipboard"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="calendar"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="lock"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="unlock"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="notifications"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon="manual"
        />
      </Box>
    </Pane>
  </Box>
))

buttonsStory.add('Button presets', () => (
  <Box padding={40}>
    <BackButton>Back</BackButton>
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
