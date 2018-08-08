import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reactions/component'
import { ChromePicker } from 'react-color'
import { createTheme, ThemeProvider } from '../../theme'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { Button } from '../../buttons'
import { Alert } from '../../alert'
import { Text } from '../../typography'
import SyntaxHighlighter from '../../../docs/src/components/SyntaxHighlighter'

class ColorPicker extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChangeComplete: PropTypes.func.isRequired
  }

  renderContent = () => {
    return (
      <ChromePicker
        color={this.props.color}
        onChangeComplete={color => this.props.onChangeComplete(color.hex)}
      />
    )
  }

  render() {
    return (
      <Popover content={this.renderContent}>
        <Pane
          background="white"
          display="flex"
          alignItems="center"
          cursor="pointer"
          borderBottom
          padding={12}
        >
          <Pane
            style={{ backgroundColor: this.props.color }}
            width={16}
            height={16}
            borderRadius={3}
          />
          <Text marginLeft={8}>{this.props.label}</Text>
        </Pane>
      </Popover>
    )
  }
}

storiesOf('createTheme', module).add('example', () => (
  <Component
    initialState={{
      primary: '#1e8e3e'
    }}
  >
    {({ state, setState }) => {
      const theme = createTheme(state)
      return (
        <ThemeProvider value={theme}>
          {(() => {
            document.body.style.margin = '0'
            document.body.style.height = '100vh'
          })()}
          <Pane display="flex" height="100vh">
            <Pane borderRight flexBasis={260} background="tint1">
              <ColorPicker
                color={state.primaryColor}
                label="primaryColor"
                onChangeComplete={color => setState({ primaryColor: color })}
              />
            </Pane>
            <Pane padding={40} overflowY="auto" flex={1}>
              <Pane style={{ fontSize: 12 }}>
                <SyntaxHighlighter>
                  {`createTheme(${JSON.stringify(state, null, 2)})`}
                </SyntaxHighlighter>
              </Pane>
              <Pane marginY={40}>
                <Button marginRight={12} appearance="primary">
                  Default
                </Button>
                <Button marginRight={12} appearance="primary" intent="success">
                  Success
                </Button>
                <Button marginRight={12} appearance="primary" intent="warning">
                  Warning
                </Button>
                <Button marginRight={12} appearance="primary" intent="danger">
                  Warning
                </Button>
              </Pane>
              <Pane marginY={40}>
                {['default', 'card'].map(appearance => (
                  <Pane key={appearance} float="left" marginRight={40}>
                    <Alert
                      appearance={appearance}
                      marginBottom={32}
                      title="A simple general message"
                    />
                    <Alert
                      appearance={appearance}
                      marginBottom={32}
                      intent="success"
                      title="Hooray! You did it. Your Source is now sending data."
                    />
                    <Alert
                      appearance={appearance}
                      marginBottom={32}
                      intent="warning"
                      title="Changes will affect all Warehouses."
                    />
                    <Alert
                      appearance={appearance}
                      marginBottom={32}
                      intent="danger"
                      title="We weren’t able to save your changes."
                    />
                  </Pane>
                ))}
              </Pane>
            </Pane>
          </Pane>
        </ThemeProvider>
      )
    }}
  </Component>
))
