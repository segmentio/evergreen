import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from 'evergreen-layers'
import { Heading } from 'evergreen-typography'
import Overlay from 'evergreen-overlay'
import { IconButton } from 'evergreen-buttons'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 200

const openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
})

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
})

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

class Dialog extends React.Component {
  static propTypes = {
    ...Overlay.propTypes,
    title: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasCloseIcon: PropTypes.bool,
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 567,
    height: 240,
    hasCloseIcon: true
  }

  constructor() {
    super()

    this.state = {
      exiting: false
    }
  }

  render() {
    const {
      children,
      width,
      height,
      hasCloseIcon,
      containerProps,
      title,
      ...props
    } = this.props

    return (
      <Overlay {...props}>
        {({ state, close }) => (
          <Pane
            display="flex"
            justifyContent="center"
            height="100vh"
            paddingTop={120}
          >
            <Pane
              role="dialog"
              backgroundColor="white"
              elevation={4}
              borderRadius={8}
              width={width}
              height={height}
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              <Pane
                padding={16}
                borderBottom="extraMuted"
                display="flex"
                alignItems="center"
              >
                <Heading is="h4" size={600} flex="1">
                  {title}
                </Heading>
                {hasCloseIcon && (
                  <IconButton appearance="ghost" icon="close" onClick={close} />
                )}
              </Pane>

              <Pane overflowY="auto" data-state={state} padding={16}>
                {typeof children === 'function'
                  ? children({
                      close
                    })
                  : children}
              </Pane>
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default Dialog
