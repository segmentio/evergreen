import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { Heading } from '../../typography'
import { Pane } from '../../layers'
import { SegmentedControl } from '../../segmented-control'

import * as Icons from '../../icons'
import { IconButton, Button, BackButton, TextDropdownButton } from '..'

const buttonsStory = storiesOf('buttons', module)
buttonsStory.add('Common', () => (
  <Box padding={40}>
    <Component
      initialState={{
        options: [
          { label: 'Small (24px)', value: 'small' },
          { label: 'Medium (32px)', value: 'medium' },
          { label: 'Large (40px)', value: 'large' }
        ],
        value: 'medium'
      }}
    >
      {({ state, setState }) => (
        <React.Fragment>
          <SegmentedControl
            width={350}
            options={state.options}
            value={state.value}
            onChange={value => setState({ value })}
          />
          <Pane marginTop={16}>
            <Button size={state.value} marginRight={16}>
              Close
            </Button>
            <Button size={state.value} marginRight={16}>
              Cancel
            </Button>
            <BackButton size={state.value} marginRight={16}>
              Back
            </BackButton>
            <Button
              size={state.value}
              marginRight={16}
              iconAfter={Icons.CaretDownIcon}
            >
              Select event...
            </Button>
            <Button
              size={state.value}
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              New Audience
            </Button>
            <Button
              size={state.value}
              marginRight={16}
              iconBefore={Icons.DownloadIcon}
            >
              Download
            </Button>
            <Button
              size={state.value}
              marginRight={16}
              iconBefore={Icons.DownloadIcon}
            >
              Download CSV...
            </Button>
            <Button
              size={state.value}
              marginRight={16}
              iconBefore={Icons.EditIcon}
            >
              Edit
            </Button>
            <Button
              size={state.value}
              marginRight={16}
              iconBefore={Icons.ManualIcon}
            >
              Docs
            </Button>
            <Button size={state.value} iconBefore={Icons.ImportIcon}>
              Import
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button size={state.value} appearance="primary" marginRight={16}>
              Confirm
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              marginRight={16}
              iconAfter={Icons.ArrowRightIcon}
            >
              Next Step
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              marginRight={16}
              iconBefore={Icons.EyeOpenIcon}
            >
              Preview
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              size={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
            >
              Got It
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              Add Source
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              Add Destination
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              New Audience
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              New Computed Trait
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              size={state.value}
              intent="warning"
              marginRight={16}
              iconBefore={Icons.RefreshIcon}
            >
              Retry
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="warning"
              marginRight={16}
              iconBefore={Icons.BlockedPersonIcon}
            >
              Disable User
            </Button>
          </Pane>
          <Pane marginTop={16}>
            <Button
              size={state.value}
              appearance="minimal"
              intent="danger"
              marginRight={16}
              iconBefore={Icons.TrashIcon}
            >
              Delete...
            </Button>
            <Button
              size={state.value}
              intent="danger"
              marginRight={16}
              iconBefore={Icons.TrashIcon}
            >
              Delete...
            </Button>
            <Button
              size={state.value}
              appearance="primary"
              intent="danger"
              marginRight={16}
              iconBefore={Icons.TrashIcon}
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
    <Heading>Default Appearance</Heading>
    <Box marginTop={12}>
      <Button appearance="primary" marginRight={16}>
        Primary
      </Button>
      <Button marginRight={16} intent="success">
        Default
      </Button>
      <Button appearance="destructive" marginRight={16} intent="danger">
        Destructive
      </Button>
      <Button appearance="minimal" marginRight={16} intent="warning">
        Minimal
      </Button>
    </Box>
    <Heading marginTop={24}>Disabled Appearance</Heading>
    <Box marginTop={12}>
      <Button disabled appearance="primary" marginRight={16}>
        Primary
      </Button>
      <Button disabled marginRight={16} intent="success">
        Default
      </Button>
      <Button
        disabled
        appearance="destructive"
        marginRight={16}
        intent="danger"
      >
        Destructive
      </Button>
      <Button disabled appearance="minimal" marginRight={16} intent="warning">
        Minimal
      </Button>
    </Box>
  </Box>
))

buttonsStory.add('TextDropdownButton', () => (
  <Box padding={40}>
    <TextDropdownButton>Table Header</TextDropdownButton>
  </Box>
))

buttonsStory.add('IconButton', () => (
  <Box display="flex" padding={40}>
    <Pane borderRight paddingRight={24} marginRight={24}>
      <Heading marginBottom={16}>Size &quot;medium&quot;</Heading>
      <Pane display="flex">
        <Box
          display="grid"
          gridTemplateColumns="32px"
          gridRowGap={16}
          marginRight={16}
        >
          <IconButton icon={Icons.CogIcon} />
          <IconButton icon={Icons.PlusIcon} />
          <IconButton icon={Icons.FilterIcon} />
          <IconButton icon={Icons.EditIcon} />
          <IconButton icon={Icons.RefreshIcon} />
        </Box>
        <Box display="grid" gridTemplateColumns="32px" gridRowGap={16}>
          <IconButton appearance="minimal" icon={Icons.CrossIcon} />
          <IconButton appearance="minimal" icon={Icons.MoreIcon} />
          <IconButton appearance="minimal" icon={Icons.PlusIcon} />
          <IconButton appearance="minimal" icon={Icons.EditIcon} />
          <IconButton appearance="minimal" icon={Icons.SearchIcon} />
        </Box>
      </Pane>
    </Pane>
    <Pane>
      <Heading marginBottom={16}>Size &quot;small&quot;</Heading>
      <Pane display="flex">
        <Box
          display="grid"
          gridTemplateColumns="24px"
          gridRowGap={16}
          marginRight={16}
        >
          <IconButton size="small" icon={Icons.CogIcon} />
          <IconButton size="small" icon={Icons.PlusIcon} />
          <IconButton size="small" icon={Icons.FilterIcon} />
          <IconButton size="small" icon={Icons.EditIcon} />
          <IconButton size="small" icon={Icons.ChevronLeftIcon} />
          <IconButton size="small" icon={Icons.ChevronRightIcon} />
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="24px"
          gridRowGap={16}
          marginRight={16}
        >
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.CrossIcon}
          />
          <IconButton appearance="minimal" size="small" icon={Icons.MoreIcon} />
          <IconButton appearance="minimal" size="small" icon={Icons.PlusIcon} />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.TrashIcon}
            intent="danger"
          />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.FilterIcon}
          />
          <IconButton appearance="minimal" size="small" icon={Icons.EditIcon} />
        </Box>
        <Box display="grid" gridTemplateColumns="24px" gridRowGap={16}>
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.ClipboardIcon}
          />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.CalendarIcon}
          />
          <IconButton appearance="minimal" size="small" icon={Icons.LockIcon} />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.UnlockIcon}
          />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.NotificationsIcon}
          />
          <IconButton
            appearance="minimal"
            size="small"
            icon={Icons.ManualIcon}
          />
        </Box>
      </Pane>
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
