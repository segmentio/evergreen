import React, { useState, useEffect, useCallback, useRef, PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Overlay } from '..'
import { Button } from '../../buttons'
import { Card } from '../../layers'
import { majorScale } from '../../scales'
import { Paragraph } from '../../typography'

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
        {({ hide, isShown, show }) => (
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
        {({ hide, isShown, show }) => (
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
  .add('Override close behavior', () => {
    useEffect(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    }, [])

    const [isShown, setIsShown] = useState(false)

    const show = useCallback(() => {
      setIsShown(true)
    }, [])

    const timesClicked = useRef(0)

    const hide = useCallback(() => {
      setIsShown(false)
      timesClicked.current = 0
    }, [])

    const beforeClose = useCallback(() => {
      return ++timesClicked.current > 2
    }, [])

    return (
      <Box padding={40}>
        <Overlay
          isShown={isShown}
          containerProps={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onBeforeClose={beforeClose}
          onExited={hide}
        >
          <Card
            elevation={2}
            background="white"
            padding={majorScale(2)}
            zIndex={30}
            position="relative"
            pointerEvents="none"
          >
            <Paragraph>Click 3 times to close it</Paragraph>
          </Card>
        </Overlay>

        <Button onClick={show}>Show Overlay</Button>
      </Box>
    )
  })
  .add('Autofocus disabled', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <OverlayManager>
        {({ hide, isShown, show }) => (
          <Box>
            <Overlay shouldAutoFocus={false} isShown={isShown} onExited={hide}>
              <Button onClick={hide}>Close</Button>
            </Overlay>
            <Button onClick={show}>Show Overlay</Button>
          </Box>
        )}
      </OverlayManager>
    </Box>
  ))
