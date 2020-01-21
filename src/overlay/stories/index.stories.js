import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from '../../buttons'
import { Overlay } from '..'

class OverlayManager extends PureComponent {
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

storiesOf('overlay', module)
  .add('Overlay', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <OverlayManager>
        {({ hide, show, isShown }) => (
          <Box>
            <Overlay isShown={isShown} onExited={hide}>
              Overlay children
            </Overlay>
            <Button onClick={show}>Show Overlay</Button>
          </Box>
        )}
      </OverlayManager>
    </Box>
  ))
  .add('Prevent Body Scroll', () => (
    <Box padding={40} paddingTop="50vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '200vh'
        document.body.style.background = 'gray'
      })()}
      <OverlayManager>
        {({ hide, show, isShown }) => (
          <Box>
            <Overlay isShown={isShown} onExited={hide} preventBodyScrolling>
              Overlay children
            </Overlay>
            <Button onClick={show}>Show Overlay</Button>
          </Box>
        )}
      </OverlayManager>
    </Box>
  ))
