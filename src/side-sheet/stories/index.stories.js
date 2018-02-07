import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { SideSheet } from '../../side-sheet'
import { Button } from '../../buttons'

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
      hide: (...args) => {
        console.log(...args)
        this.setState({
          isShown: false
        })
      }
    })
  }
}

storiesOf('side-sheet', module)
  .add('SideSheet', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SideSheetManager>
        {({ hide, show, isShown }) => (
          <Box>
            <SideSheet isShown={isShown} onExited={hide}>
              SideSheet Content
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
