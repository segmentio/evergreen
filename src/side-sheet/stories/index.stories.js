import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { SideSheet } from '../../side-sheet'
import { Heading, Paragraph } from '../../typography'
import { Card, Pane } from '../../layers'
import { Button } from '../../buttons'
import { Tab } from '../../tabs'

class SideSheetManager extends PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    isShown: true
  }

  render() {
    return this.props.children({
      isShown: this.state.isShown,
      show: () =>
        this.setState({
          isShown: true
        }),
      hide: () => {
        this.setState({
          isShown: false
        })
      }
    })
  }
}

class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state
    })
  }
}

storiesOf('side-sheet', module)
  .add('title + sub title + tabs', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SideSheetManager>
        {({ hide, show, isShown }) => (
          <Box>
            <SideSheet
              isShown={isShown}
              onExited={hide}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16} borderBottom="extraMuted">
                  <Heading size={600}>Title</Heading>
                  <Paragraph size={400} color="extraMuted">
                    Optional description or sub title
                  </Paragraph>
                </Pane>
                <Pane display="flex" padding={8}>
                  <Manager selectedIndex={0}>
                    {({ setState, state }) =>
                      ['Traits', 'Event History', 'Identities'].map(
                        (tab, index) => (
                          <Tab
                            key={tab}
                            isSelected={state.selectedIndex === index}
                            onSelect={() => setState({ selectedIndex: index })}
                          >
                            {tab}
                          </Tab>
                        )
                      )
                    }
                  </Manager>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" appearance="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={show}>Show Side Sheet</Button>
          </Box>
        )}
      </SideSheetManager>
    </Box>
  ))
  .add('title + sub title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SideSheetManager>
        {({ hide, show, isShown }) => (
          <Box>
            <SideSheet
              isShown={isShown}
              onExited={hide}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16}>
                  <Heading size={600}>Title</Heading>
                  <Paragraph size={400} color="extraMuted">
                    Optional description or sub title
                  </Paragraph>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" appearance="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={show}>Show Side Sheet</Button>
          </Box>
        )}
      </SideSheetManager>
    </Box>
  ))
  .add('title', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SideSheetManager>
        {({ hide, show, isShown }) => (
          <Box>
            <SideSheet
              isShown={isShown}
              onExited={hide}
              containerProps={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column'
              }}
            >
              <Pane flexShrink={0} elevation={0} backgroundColor="white">
                <Pane padding={16}>
                  <Heading size={600}>Title</Heading>
                </Pane>
              </Pane>
              <Pane flex="1" overflowY="scroll" appearance="tint1" padding={16}>
                <Card
                  backgroundColor="white"
                  elevation={0}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>Some content</Heading>
                </Card>
              </Pane>
            </SideSheet>
            <Button onClick={show}>Show Side Sheet</Button>
          </Box>
        )}
      </SideSheetManager>
    </Box>
  ))
  .add('close from within', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SideSheetManager>
        {({ hide, show, isShown }) => (
          <Box>
            <SideSheet isShown={isShown} onExited={hide}>
              {({ close }) => {
                return (
                  <Box padding={40}>
                    <Button onClick={close}>Close From Within</Button>
                  </Box>
                )
              }}
            </SideSheet>
            <Button onClick={show}>Show Side Sheet</Button>
          </Box>
        )}
      </SideSheetManager>
    </Box>
  ))
