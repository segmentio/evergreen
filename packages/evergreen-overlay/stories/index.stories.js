import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from 'evergreen-buttons'
import { Overlay } from '../src/'

class OverlayManager extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
  }

  state = {
    isShown: false,
  }

  render() {
    return this.props.children({
      isShown: this.state.isShown,
      show: () =>
        this.setState({
          isShown: true,
        }),
      hide: () =>
        this.setState({
          isShown: false,
        }),
    })
  }
}

storiesOf('overlay', module).add('Overlay', () => (
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
