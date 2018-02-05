import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Paragraph } from 'evergreen-typography'
import { Button } from 'evergreen-buttons'
import { Dialog } from '../src/'

class DialogManager extends PureComponent {
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

storiesOf('dialog', module).add('Dialog', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog title"
            onHide={hide}
            primaryButton={{
              onClick: close => {
                console.log('click')
                close()
              },
              children: 'Primary Action'
            }}
          >
            <Paragraph>Dialog content</Paragraph>
          </Dialog>
          <Button onClick={show}>Show Dialog With Primary Button</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog with primary button only"
            onHide={hide}
            primaryButton={{
              children: 'Got It'
            }}
            hideCancelButton
          >
            <Paragraph>
              This is useful for product updates and onboarding content.
            </Paragraph>
          </Dialog>
          <Button onClick={show}>Show Dialog With Primary Button Only</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog without buttons"
            onHide={hide}
          >
            <Box>
              <Paragraph>Manage your own buttons and interactions.</Paragraph>
            </Box>
          </Dialog>
          <Button onClick={show}>Show Dialog Without Buttons</Button>
        </Box>
      )}
    </DialogManager>
    <DialogManager>
      {({ isShown, show, hide }) => (
        <Box marginBottom={16}>
          <Dialog
            isShown={isShown}
            title="Dialog without buttons"
            onHide={hide}
          >
            {({ close }) => (
              <Box>
                <Paragraph>Manage your own buttons and interactions.</Paragraph>
                <Button marginTop={16} onClick={close}>
                  Self Managed Close
                </Button>
              </Box>
            )}
          </Dialog>
          <Button onClick={show}>Show Dialog With Self Managed Close</Button>
        </Box>
      )}
    </DialogManager>
  </Box>
))
