import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from 'evergreen-buttons'
import { CornerDialog } from '../src/'

class CornerDialogManager extends PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    isShown: false
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

storiesOf('corner-dialog', module).add('CornerDialog', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <CornerDialogManager>
      {({ isShown, show, hide }) => (
        <Box>
          <CornerDialog
            isShown={isShown}
            title="CornerDialog title"
            onHide={hide}
          >
            CornerDialog content
          </CornerDialog>
          <Button onClick={show}>Show CornerDialog</Button>
        </Box>
      )}
    </CornerDialogManager>
  </Box>
))
