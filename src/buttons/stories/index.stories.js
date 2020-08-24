import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { Heading } from '../../typography'
import { Pane } from '../../layers'
import { Checkbox } from '../../checkbox'
import { ThemeProvider } from '../../theme'
import { getPrimaryButtonStylesForIntent } from '../../theme/src/default-theme/helpers'
import { defaultTheme } from '../../theme'
import { SegmentedControl } from '../../segmented-control'
import { defaultControlStyles } from '../../theme/src/default-theme/shared'
import * as Icons from '../../icons'
import { IconButton, Button, BackButton, TextDropdownButton } from '..'
import { TextInput } from '../../text-input'
import { Textarea } from '../../textarea'

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
              iconAfter={Icons.CaretDownIcon}
            >
              Select event...
            </Button>
            <Button
              height={state.value}
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              New Audience
            </Button>
            <Button
              height={state.value}
              marginRight={16}
              iconBefore={Icons.DownloadIcon}
            >
              Download
            </Button>
            <Button
              height={state.value}
              marginRight={16}
              iconBefore={Icons.DownloadIcon}
            >
              Download CSV...
            </Button>
            <Button
              height={state.value}
              marginRight={16}
              iconBefore={Icons.EditIcon}
            >
              Edit
            </Button>
            <Button
              height={state.value}
              marginRight={16}
              iconBefore={Icons.ManualIcon}
            >
              Docs
            </Button>
            <Button height={state.value} iconBefore={Icons.ImportIcon}>
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
              iconAfter={Icons.ArrowRightIcon}
            >
              Next Step
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              marginRight={16}
              iconBefore={Icons.EyeOpenIcon}
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
              iconBefore={Icons.AddIcon}
            >
              Add Source
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              Add Destination
            </Button>
            <Button
              height={state.value}
              appearance="primary"
              intent="success"
              marginRight={16}
              iconBefore={Icons.AddIcon}
            >
              New Audience
            </Button>
            <Button
              height={state.value}
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
              height={state.value}
              intent="warning"
              marginRight={16}
              iconBefore={Icons.RefreshIcon}
            >
              Retry
            </Button>
            <Button
              height={state.value}
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
              height={state.value}
              appearance="minimal"
              intent="danger"
              marginRight={16}
              iconBefore={Icons.TrashIcon}
            >
              Delete...
            </Button>
            <Button
              height={state.value}
              intent="danger"
              marginRight={16}
              iconBefore={Icons.TrashIcon}
            >
              Delete...
            </Button>
            <Button
              height={state.value}
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

const v5ButtonTheme = {
  ...defaultTheme,
  buttons: {
    primary: {
      base: {
        color: 'white',
        backgroundColor: 'white',
        backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.base,
        boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
      },
      hover: {
        backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.hover
      },
      active: {
        backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.active
      },
      focusAndActive: {}
    },
    destructive: {
      base: {
        color: 'white',
        backgroundColor: 'white',
        backgroundImage: getPrimaryButtonStylesForIntent('danger')
          .linearGradient.base,
        boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
      },
      hover: {
        backgroundImage: getPrimaryButtonStylesForIntent('danger')
          .linearGradient.hover
      },
      active: {
        backgroundImage: getPrimaryButtonStylesForIntent('danger')
          .linearGradient.active
      },
      focusAndActive: {}
    },
    default: {
      base: {
        ...defaultControlStyles.base,
        border: 'none'
      },
      hover: defaultControlStyles.hover,
      focus: defaultControlStyles.focus,
      active: defaultControlStyles.active,
      focusAndActive: defaultControlStyles.focusAndActive
    }
  },
  segmentedControl: {
    base: {
      ...defaultControlStyles.base
    },
    active: defaultControlStyles.active,
    disabled: defaultControlStyles.disabled,
    focus: defaultControlStyles.focus,
    hover: defaultControlStyles.hover
  },
  checkbox: {
    base: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: `linear-gradient(to top, ${defaultTheme.scales.neutral.N2A}, white)`,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N3A}`
    },
    disabled: {
      cursor: 'not-allowed',
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}`,
      backgroundColor: defaultTheme.scales.neutral.N2A,
      backgroundImage: 'none'
    },
    hover: {
      backgroundImage: `linear-gradient(to top, ${defaultTheme.scales.neutral.N2A}, ${defaultTheme.scales.neutral.N1A})`,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
    },
    focus: {
      boxShadow: `0 0 0 2px ${defaultTheme.scales.blue.B4A}, inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N3A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: defaultTheme.scales.blue.B3A,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.blue.B5A}`
    },
    checked: {
      color: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.base,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
    },
    checkedHover: {
      color: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.hover,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
    },
    checkedDisabled: {
      color: defaultTheme.scales.neutral.N6A,
      backgroundImage: `linear-gradient(to top, ${defaultTheme.scales.neutral.N2A}, ${defaultTheme.scales.neutral.N1A})`,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
    },
    checkedActive: {
      color: 'white',
      backgroundImage: getPrimaryButtonStylesForIntent().linearGradient.active,
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${defaultTheme.scales.neutral.N2A}`
    }
  },
  inputs: {
    base: {
      backgroundColor: 'white',
      border: 'none',
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N5A}, inset 0 1px 2px ${defaultTheme.scales.neutral.N4A}`
    },
    invalid: {
      boxShadow: `inset 0 0 0 1px ${defaultTheme.palette.red.base}, inset 0 1px 2px ${defaultTheme.scales.neutral.N4A}`
    },
    placeholder: {
      color: defaultTheme.scales.neutral.N6A
    },
    focus: {
      outline: 'none',
      border: 'none',
      boxShadow: `inset 0 0 2px ${defaultTheme.scales.neutral.N4A}, inset 0 0 0 1px ${defaultTheme.scales.blue.B7}, 0 0 0 3px ${defaultTheme.scales.blue.B4A}`
    },
    disabled: {
      boxShadow: `inset 0 0 0 1px ${defaultTheme.scales.neutral.N4A}`,
      backgroundColor: defaultTheme.scales.neutral.N2
    }
  }
}

buttonsStory.add('Button types', () => (
  <Box padding={40}>
    <Component
      initialState={{
        options: [
          { label: 'Height 24', value: 24 },
          { label: 'Height 32', value: 32 },
          { label: 'Height 40', value: 40 }
        ],
        value: 32,
        themeValue: 'v5'
      }}
    >
      {({ state, setState }) => {
        return (
          <React.Fragment>
            <ThemeProvider
              key={state.themeValue}
              value={
                state.themeValue === 'v5'
                  ? { ...v5ButtonTheme }
                  : { ...defaultTheme }
              }
            >
              <Checkbox
                label="Use V5?"
                onChange={e => {
                  setState({ themeValue: e.target.checked ? 'v5' : 'v6' })
                }}
                checked={state.themeValue === 'v5'}
              />
              <Heading>Text Inputs</Heading>
              <TextInput placeholder="Enter something..." marginY={24} />
              <Textarea placeholder="Enter something else..." marginY={24} />
              <Heading>Default Appearance</Heading>
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
              <Heading marginTop={24}>Primary Appearance</Heading>
              <Box marginTop={12}>
                <Button
                  height={state.value}
                  key={state.themeValue}
                  appearance="primary"
                  marginRight={16}
                >
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
                <Button
                  height={state.value}
                  appearance="primary"
                  intent="danger"
                >
                  Danger
                </Button>
              </Box>
              <Heading marginTop="24px">Destructive Appearance</Heading>
              <Box marginTop={12}>
                <Button
                  appearance="destructive"
                  height={state.value}
                  marginRight={16}
                >
                  Default
                </Button>
                <Button
                  appearance="destructive"
                  height={state.value}
                  marginRight={16}
                  intent="success"
                >
                  Success
                </Button>
                <Button
                  appearance="destructive"
                  height={state.value}
                  marginRight={16}
                  intent="warning"
                >
                  Warning
                </Button>
                <Button
                  appearance="destructive"
                  height={state.value}
                  intent="danger"
                >
                  Danger
                </Button>
              </Box>
              <Heading marginTop={24}>Minimal Appearance</Heading>
              <Box marginTop={12}>
                <Button
                  height={state.value}
                  appearance="minimal"
                  marginRight={16}
                >
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
                <Button
                  height={state.value}
                  appearance="minimal"
                  intent="danger"
                >
                  Danger
                </Button>
              </Box>
            </ThemeProvider>
          </React.Fragment>
        )
      }}
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
        <IconButton marginBottom={16} icon={Icons.CogIcon} />
        <IconButton marginBottom={16} icon={Icons.PlusIcon} />
        <IconButton marginBottom={16} icon={Icons.FilterIcon} />
        <IconButton marginBottom={16} icon={Icons.EditIcon} />
        <IconButton marginBottom={16} icon={Icons.RefreshIcon} />
      </Box>
      <Box float="left">
        <IconButton
          marginBottom={16}
          appearance="minimal"
          icon={Icons.CrossIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          icon={Icons.MoreIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          icon={Icons.PlusIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          icon={Icons.EditIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          icon={Icons.SearchIcon}
        />
      </Box>
    </Pane>
    <Pane float="left">
      <Heading marginBottom={16}>Height 24</Heading>
      <Box float="left" marginRight={16}>
        <IconButton marginBottom={16} height={24} icon={Icons.CogIcon} />
        <IconButton marginBottom={16} height={24} icon={Icons.PlusIcon} />
        <IconButton marginBottom={16} height={24} icon={Icons.FilterIcon} />
        <IconButton marginBottom={16} height={24} icon={Icons.EditIcon} />
        <IconButton
          marginBottom={16}
          height={24}
          icon={Icons.ChevronLeftIcon}
        />
        <IconButton
          marginBottom={16}
          height={24}
          icon={Icons.ChevronRightIcon}
        />
      </Box>
      <Box float="left" marginRight={16}>
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.CrossIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.MoreIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.PlusIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.TrashIcon}
          intent="danger"
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.FilterIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.EditIcon}
        />
      </Box>
      <Box float="left">
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.ClipboardIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.CalendarIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.LockIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.UnlockIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.NotificationsIcon}
        />
        <IconButton
          marginBottom={16}
          appearance="minimal"
          height={24}
          icon={Icons.ManualIcon}
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
