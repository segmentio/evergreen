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
     * Children can be a string, node or a function accepting `({ close })`.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * When true, the Side Sheet is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func,

    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: PropTypes.func,

    /**
     * Width of the SideSheet.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * Properties to pass through the SideSheet container Pane.
     */
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 620,
    onCloseComplete: () => {},
    onOpenComplete: () => {}
  }

  render() {
    const {
      width,
      isShown,
      children,
      containerProps,
      onOpenComplete,
      onCloseComplete
    } = this.props

    return (
      <Overlay
        isShown={isShown}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
      >
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
              {typeof children === 'function' ? children({ close }) : children}
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default SideSheet
