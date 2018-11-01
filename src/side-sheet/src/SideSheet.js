import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import { Position } from '../../constants'
import SheetClose from './SheetClose'

const paneProps = {
  [Position.LEFT]: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    left: 0,
    right: 'auto'
  },
  [Position.RIGHT]: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    right: 0,
    left: 'auto'
  },
  [Position.TOP]: {
    width: '100vw',
    position: 'absolute',
    maxHeight: '100vh',
    top: 0,
    bottom: 'auto'
  },
  [Position.BOTTOM]: {
    width: '100vw',
    maxHeight: '100vh',
    position: 'absolute',
    bottom: 0,
    top: 'auto'
  }
}

const subpaneProps = {
  [Position.LEFT]: {
    height: '100vh'
  },
  [Position.RIGHT]: {
    height: '100vh'
  },
  [Position.TOP]: {
    width: '100vw'
  },
  [Position.BOTTOM]: {
    width: '100vw'
  }
}

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 240

const withAnimations = (animateIn, animateOut) => {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${
        animationEasing.deceleration
      } both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${
        animationEasing.acceleration
      } both`
    }
  }
}

const animationStyles = {
  [Position.LEFT]: {
    transform: `translateX(-100%)`,
    ...withAnimations(
      css.keyframes('anchoredLeftSlideInAnimation', {
        from: { transform: `translateX(-100%)` },
        to: { transform: `translateX(0)` }
      }),
      css.keyframes('anchoredLeftSlideOutAnimation', {
        from: { transform: `translateX(0)` },
        to: { transform: `translateX(-100%)` }
      })
    )
  },
  [Position.RIGHT]: {
    transform: `translateX(100%)`,
    ...withAnimations(
      css.keyframes('anchoredRightSlideInAnimation', {
        from: { transform: `translateX(100%)` },
        to: { transform: `translateX(0)` }
      }),
      css.keyframes('anchoredRightSlideOutAnimation', {
        from: { transform: `translateX(0)` },
        to: { transform: `translateX(100%)` }
      })
    )
  },
  [Position.TOP]: {
    transform: `translateY(-100%)`,
    ...withAnimations(
      css.keyframes('anchoredTopSlideInAnimation', {
        from: { transform: `translateY(-100%)` },
        to: { transform: `translateY(0)` }
      }),
      css.keyframes('anchoredTopSlideOutAnimation', {
        from: { transform: `translateY(0)` },
        to: { transform: `translateY(-100%)` }
      })
    )
  },
  [Position.BOTTOM]: {
    transform: `translateY(100%)`,
    ...withAnimations(
      css.keyframes('anchoredBottomSlideInAnimation', {
        from: { transform: `translateY(100%)` },
        to: { transform: `translateY(0)` }
      }),
      css.keyframes('anchoredBottomSlideOutAnimation', {
        from: { transform: `translateY(0)` },
        to: { transform: `translateY(100%)` }
      })
    )
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
     * Function called when overlay is about to close.
     * Return `false` to prevent the sheet from closing.
     * type: `Function -> Boolean`
     */
    onBeforeClose: PropTypes.func,

    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick: PropTypes.bool,

    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress: PropTypes.bool,

    /**
     * Width of the SideSheet.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * Properties to pass through the SideSheet container Pane.
     */
    containerProps: PropTypes.object,

    /**
     * Positions the sheet to the top, left, right, or bottom of the screen.
     */
    position: PropTypes.oneOf([
      Position.TOP,
      Position.BOTTOM,
      Position.LEFT,
      Position.RIGHT
    ]).isRequired
  }

  static defaultProps = {
    width: 620,
    onCloseComplete: () => {},
    onOpenComplete: () => {},
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEscapePress: true,
    position: Position.RIGHT
  }

  render() {
    const {
      width,
      isShown,
      children,
      containerProps,
      onOpenComplete,
      onCloseComplete,
      onBeforeClose,
      shouldCloseOnOverlayClick,
      shouldCloseOnEscapePress,
      position
    } = this.props

    return (
      <Overlay
        isShown={isShown}
        shouldCloseOnClick={shouldCloseOnOverlayClick}
        shouldCloseOnEscapePress={shouldCloseOnEscapePress}
        onBeforeClose={onBeforeClose}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
      >
        {({ state, close }) => (
          <Pane
            width={width}
            {...paneProps[position]}
            css={animationStyles[position]}
            data-state={state}
          >
            <SheetClose
              position={position}
              data-state={state}
              isClosing={false}
              onClick={close}
            />
            <Pane
              elevation={4}
              backgroundColor="white"
              overflowY="auto"
              maxHeight="100vh"
              data-state={state}
              width={width}
              {...subpaneProps[position]}
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
