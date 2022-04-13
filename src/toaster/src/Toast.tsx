import React, { memo, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import { css } from 'glamor'
import { Transition } from 'react-transition-group'
import Box from 'ui-box'
import Alert from '../../alert/src/Alert'
import { ToasterSettings } from './Toaster'

export interface ToastProps extends ToasterSettings {
  isShown?: boolean
  onRemove: () => void
  title: React.ReactNode
  zIndex?: number
}

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

const Toast: React.FC<ToastProps> = memo(function Toast(props) {
  const {
    children,
    duration,
    hasCloseButton,
    // Template props
    intent = 'none',
    isShown: isShownProp,
    onRemove,
    title,
    zIndex
  } = props

  const transitionRef = useRef(null)
  const [isShown, setIsShown] = useState(true)
  const [height, setHeight] = useState(0)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
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
            <Alert
              flexShrink={0}
              appearance="card"
              elevation={3}
              intent={intent}
              title={title}
              isRemoveable={hasCloseButton}
              onRemove={close}
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

export default Toast
