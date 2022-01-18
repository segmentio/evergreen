import React, { memo, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Box from 'ui-box'
import Alert from '../../alert/src/Alert'

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
}

const ANIMATION_DURATION = 240

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
const openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
})

const animationStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: `all ${ANIMATION_DURATION}ms ${animationEasing.deceleration}`,
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.spring} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
})

const Toast = memo(function Toast(props) {
  const {
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'duration' does not exist on type '{ chil... Remove this comment to see the full error message
    duration,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasCloseButton' does not exist on type '... Remove this comment to see the full error message
    hasCloseButton,
    // Template props
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'intent' does not exist on type '{ childr... Remove this comment to see the full error message
    intent = 'none',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
    isShown: isShownProp,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onRemove' does not exist on type '{ chil... Remove this comment to see the full error message
    onRemove,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
    title,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'zIndex' does not exist on type '{ childr... Remove this comment to see the full error message
    zIndex
  } = props

  const transitionRef = useRef(null)
  const [isShown, setIsShown] = useState(true)
  const [height, setHeight] = useState(0)
  const closeTimer = useRef(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const close = useCallback(() => {
    clearCloseTimer()
    setIsShown(false)
  }, [clearCloseTimer])

  const startCloseTimer = useCallback(() => {
    if (duration) {
      clearCloseTimer()
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'null'.
      closeTimer.current = setTimeout(() => {
        close()
      }, duration * 1000)
    }
  }, [duration, clearCloseTimer, close])

  useEffect(() => {
    startCloseTimer()

    return () => {
      clearCloseTimer()
    }
  }, [startCloseTimer, clearCloseTimer])

  useEffect(() => {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp)
    }
  }, [isShown, isShownProp])

  const handleMouseEnter = useCallback(() => clearCloseTimer(), [clearCloseTimer])
  const handleMouseLeave = useCallback(() => startCloseTimer(), [startCloseTimer])

  const onRef = useCallback(ref => {
    if (ref === null) return

    const { height: rectHeight } = ref.getBoundingClientRect()
    setHeight(rectHeight)
  }, [])

  const styles = useMemo(
    () => ({
      height,
      zIndex,
      marginBottom: isShown ? 0 : -height
    }),
    [isShown, height, zIndex]
  )

  return (
    <Transition
      nodeRef={transitionRef}
      appear
      unmountOnExit
      timeout={ANIMATION_DURATION}
      in={isShown}
      onExited={onRemove}
    >
      {state => (
        <div
          ref={transitionRef}
          data-state={state}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'StyleAttribute' is not assignable to type 's... Remove this comment to see the full error message
          className={animationStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styles}
        >
          <Box ref={onRef} padding={8}>
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Alert
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              flexShrink={0}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              appearance="card"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              elevation={3}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
              intent={intent}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
              title={title}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
              isRemoveable={hasCloseButton}
              // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
              onRemove={close}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              pointerEvents="all"
            >
              {children}
            </Alert>
          </Box>
        </div>
      )}
    </Transition>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
Toast.propTypes = {
  /**
   * The z-index of the toast.
   */
  zIndex: PropTypes.number,

  /**
   * Duration of the toast.
   */
  duration: PropTypes.number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: PropTypes.func,

  /**
   * The type of the alert.
   */
  intent: PropTypes.string,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * Description of the alert.
   */
  children: PropTypes.node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: PropTypes.bool
}

export default Toast
