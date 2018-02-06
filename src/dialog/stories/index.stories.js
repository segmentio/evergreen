import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Dialog } from '../../dialog'
import { Button } from '../../buttons'

class DialogManager extends PureComponent {
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

storiesOf('dialog', module).add('Dialog', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box>
          <Dialog isShown={isShown} title="Dialog title" onHide={hide}>
            Dialog content
          </Dialog>
          <Button onClick={show}>Show Dialog</Button>
        </Box>
      )}
    </DialogManager>
  </Box>
))
