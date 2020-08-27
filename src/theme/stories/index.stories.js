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
                <Button appearance="primary" height={state.value} marginRight={16}>
                  Primary
                </Button>
                <Button height={state.value} marginRight={16} intent="success">
                  Default
                </Button>
                <Button appearance="destructive" height={state.value} marginRight={16} intent="danger">
                  Destructive
                </Button>
                <Button appearance="minimal" height={state.value} marginRight={16} intent="warning">
                  Minimal
                </Button>
              </Box>
              <Heading marginTop={24}>Disabled Appearance</Heading>
              <Box marginTop={12}>
                <Button disabled appearance="primary" height={state.value} marginRight={16}>
                  Primary
                </Button>
                <Button disabled height={state.value} marginRight={16} intent="success">
                  Default
                </Button>
                <Button disabled appearance="destructive" height={state.value} marginRight={16} intent="danger">
                  Destructive
                </Button>
                <Button disabled appearance="minimal" height={state.value} marginRight={16} intent="warning">
                  Minimal
                </Button>
              </Box>
            </ThemeProvider>
          </React.Fragment>
        )
      }}
    </Component>
  </Box>
))
