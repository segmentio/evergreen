import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { Heading } from '../../typography'
import { Checkbox } from '../../checkbox'
import v5Theme from '../src/themes/v5'
import v6Theme from '../src/themes/default'
import { TextInput } from '../../text-input'
import { Textarea } from '../../textarea'
import { Button } from '../../buttons'
import { ThemeProvider } from '..'

const themeStory = storiesOf('theme', module)

themeStory.add('Theming components', () => (
  <Box padding={40}>
    <Component
      initialState={{
        themeValue: 'v5'
      }}
    >
      {({ state, setState }) => {
        return (
          <React.Fragment>
            <ThemeProvider
              key={state.themeValue}
              value={
                state.themeValue === 'v5' ? { ...v5Theme } : { ...v6Theme }
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
