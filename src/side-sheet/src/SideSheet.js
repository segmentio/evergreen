import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import SheetClose from './SheetClose'

const paneProps = {
  left: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    left: 0,
    right: 'auto'
  },
  right: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    right: 0,
    left: 'auto'
  },
  top: {
    width: '100vw',
    position: 'absolute',
    maxHeight: '100vh',
    top: 0,
    bottom: 'auto'
  },
  bottom: {
    width: '100vw',
    maxHeight: '100vh',
    position: 'absolute',
    bottom: 0,
    top: 'auto'
  }
}

const subpaneProps = {
  left: {
    height: '100vh'
  },
  right: {
    height: '100vh'
  },
  top: {
    width: '100vw'
  },
  bottom: {
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
  left: {
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
  right: {
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
  top: {
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
  bottom: {
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
     * Width of the SideSheet.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /**
     * Properties to pass through the SideSheet container Pane.
     */
    containerProps: PropTypes.object,

    /**
     * Anchors the sheet to the top, left, right, or bottom of the screen.
     */
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
  }

  static defaultProps = {
    width: 620,
    onCloseComplete: () => {},
    onOpenComplete: () => {},
    anchor: 'right'
  }

  render() {
    const {
      width,
      isShown,
      children,
      containerProps,
      onOpenComplete,
      onCloseComplete,
      anchor
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
            {...paneProps[anchor]}
            css={animationStyles[anchor]}
            data-state={state}
          >
            <SheetClose
              anchor={anchor}
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
              {...subpaneProps[anchor]}
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
