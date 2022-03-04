import React, { memo } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Position } from '../../constants'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import SheetClose from '../../side-sheet/src/SheetClose'

const paneProps = {
  [Position.LEFT]: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    left: 0,
    right: 'auto'
  }
}

const subpaneProps = {
  [Position.LEFT]: {
    height: '100vh'
  }
}

const animationEasing={
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1',
  acceleration:'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 240

const withAnimations = (animateIn, animateOut)=>{
  return{
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
    }
  }
}

const animationStylesClass={
  [Position.LEFT]:{
    transform: 'translateX(-100%)',
    ...withAnimations(
      css.keyframes('anchoredLeftSideInAnimation', {
        from: {transform: 'translateX(-100%'},
        to: {transform: 'translateX(0)' }
      }),
      css.keyframes('anchoredLeftSideOutAnimation',{
        from: {transform: 'translate(0)'},
        to: {transform: 'translateX(-100%'}
      })
    )
  }
}

const noop =() =>{}

const SideMenu = memo(function SideMenu(props){
  const{
    width = 550,
    isShown,
    children,
    containerProps,
    onOpenComplete = noop,
    onCloseComplete = noop,
    onBeforeClose,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEscapePress = true,
    position = Position.LEFT,
    preventBodyScrolling
  } = props

  return (
    <Overlay
      isShown={isShown}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      onBeforeClose={onBeforeClose}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Pane
          width={width}
          {...paneProps[position]}
          className={css(animationStylesClass[position]).toString()}
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
  )
})

SideMenu.propTypes = {
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

export default SideMenu
