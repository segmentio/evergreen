import React, {
  memo,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Box from 'ui-box'
import Alert from '../../alert/src/Alert'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const ANIMATION_DURATION = 240

const openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
})

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
    duration,
    onRemove,
    isShown: isShownProp,
    // Template props
    intent = 'none',
    zIndex,
    title,
    children,
    hasCloseButton
  } = props

  const [isShown, setIsShown] = useState(true)
  const [height, setHeight] = useState(0)
  const closeTimer = useRef(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  })

  const close = useCallback(() => {
    clearCloseTimer()
    setIsShown(false)
  })

  const startCloseTimer = useCallback(() => {
    if (duration) {
      clearCloseTimer()
      closeTimer.current = setTimeout(() => {
        close()
      }, duration * 1000)
    }
  })

  useEffect(() => {
    startCloseTimer()

    return () => {
      clearCloseTimer()
    }
  }, [])

  useEffect(() => {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp)
    }
  }, [isShownProp])

  const handleMouseEnter = useCallback(() => clearCloseTimer())
  const handleMouseLeave = useCallback(() => startCloseTimer())

  const onRef = useCallback(ref => {
    if (ref === null) return

    const { height: rectHeight } = ref.getBoundingClientRect()
    setHeight(rectHeight)
  })

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
      appear
      unmountOnExit
      timeout={ANIMATION_DURATION}
      in={isShown}
      onExited={onRemove}
    >
      {state => (
        <div
          data-state={state}
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
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

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
