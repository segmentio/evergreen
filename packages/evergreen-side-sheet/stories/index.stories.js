import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'evergreen-buttons'
import Box from 'ui-box'
import { SideSheet } from '../src/'

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
      hide: () =>
        this.setState({
          isShown: false
        })
    })
  }
}

storiesOf('side-sheet', module).add('SideSheet', () => (
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
