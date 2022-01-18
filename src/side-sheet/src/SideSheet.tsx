import React, { memo } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Position } from '../../constants'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
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
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 240

const withAnimations = (animateIn: any, animateOut: any) => {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
    }
  }
}

const animationStylesClass = {
  [Position.LEFT]: {
    transform: 'translateX(-100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredLeftSlideInAnimation', {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredLeftSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' }
      })
    )
  },
  [Position.RIGHT]: {
    transform: 'translateX(100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredRightSlideInAnimation', {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredRightSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' }
      })
    )
  },
  [Position.TOP]: {
    transform: 'translateY(-100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredTopSlideInAnimation', {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredTopSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-100%)' }
      })
    )
  },
  [Position.BOTTOM]: {
    transform: 'translateY(100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredBottomSlideInAnimation', {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredBottomSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(100%)' }
      })
    )
  }
}

const noop = () => {}

const SideSheet = memo(function SideSheet(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
    width = 620,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
    isShown,
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'containerProps' does not exist on type '... Remove this comment to see the full error message
    containerProps,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onOpenComplete' does not exist on type '... Remove this comment to see the full error message
    onOpenComplete = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCloseComplete' does not exist on type ... Remove this comment to see the full error message
    onCloseComplete = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onBeforeClose' does not exist on type '{... Remove this comment to see the full error message
    onBeforeClose,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'shouldCloseOnOverlayClick' does not exis... Remove this comment to see the full error message
    shouldCloseOnOverlayClick = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'shouldCloseOnEscapePress' does not exist... Remove this comment to see the full error message
    shouldCloseOnEscapePress = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
    position = Position.RIGHT,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'preventBodyScrolling' does not exist on ... Remove this comment to see the full error message
    preventBodyScrolling
  } = props

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: ({ close, state }: any) => Eleme... Remove this comment to see the full error message
    <Overlay
      isShown={isShown}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      onBeforeClose={onBeforeClose}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({
        close,
        state
      }: any) => (
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        <Pane
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          width={width}
          {...paneProps[position]}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          className={css(animationStylesClass[position]).toString()}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          data-state={state}
        >
          <SheetClose position={position} data-state={state} isClosing={false} onClick={close} />
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
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
SideSheet.propTypes = {
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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: PropTypes.object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM, Position.LEFT, Position.RIGHT]),

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool
}

export default SideSheet
