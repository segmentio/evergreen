import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import SheetClose from './SheetClose'

const paneProps = {
  height: '100vh',
  position: 'absolute',
  right: 0
}

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 240

const slideInAnimation = css.keyframes('slideInAnimation', {
  from: {
    transform: `translateX(100%)`
  },
  to: {
    transform: `translateX(0)`
  }
})

const slideOutAnimation = css.keyframes('slideOutAnimation', {
  from: {
    transform: `translateX(0)`
  },
  to: {
    transform: `translateX(100%)`
  }
})

const animationStyles = {
  transform: `translateX(100%)`,
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${slideInAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${slideOutAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

class SideSheet extends React.Component {
  static propTypes = {
    /**
     * Composes the Overlay components as the base.
     */
    ...Overlay.propTypes,

    /**
     * Width of the SideSheet.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Properties to pass through the SideSheet container Pane.
     */
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 620
  }

  render() {
    const { children, width, containerProps, ...props } = this.props

    return (
      <Overlay {...props}>
        {({ state, close }) => (
          <Pane
            width={width}
            {...paneProps}
            css={animationStyles}
            data-state={state}
          >
            <SheetClose data-state={state} isClosing={false} onClick={close} />
            <Pane
              elevation={4}
              backgroundColor="white"
              overflowY="auto"
              data-state={state}
              width={width}
              {...paneProps}
              {...containerProps}
            >
              {typeof children === 'function'
                ? children({ state, close })
                : children}
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default SideSheet
