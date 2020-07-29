import React, { memo, useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import Box from 'ui-box'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder } from '../../constants'
import { useTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'
import preventBodyScroll from '../../lib/prevent-body-scroll'

const noop = () => {}
const emptyProps = {}

const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const ANIMATION_DURATION = 240

const fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const fadeOutAnimation = css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
})

const animationStyles = backgroundColor => ({
  '&::before': {
    backgroundColor,
    left: 0,
    top: 0,
    position: 'fixed',
    display: 'block',
    width: '100%',
    height: '100%',
    content: '" "'
  },
  '&[data-state="entering"]::before, &[data-state="entered"]::before': {
    animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
  },
  '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
    animation: `${fadeOutAnimation} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
  }
})

/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 */
const Overlay = memo(function Overlay({
  children,
  containerProps = emptyProps,
  preventBodyScrolling = false,
  shouldCloseOnClick = true,
  shouldCloseOnEscapePress = true,
  onBeforeClose,
  onExit = noop,
  onExiting = noop,
  onExited = noop,
  onEnter = noop,
  onEntering = noop,
  onEntered = noop,
  isShown,
  ...props
}) {
  const theme = useTheme()
  const [previousActiveElement, setPreviousActiveElement] = useState(null)
  const [status, setStatus] = useState(isShown ? 'entering' : 'exited')
  const containerRef = useRef()

  useEffect(() => {
    if (isShown) {
      setStatus('entering')
    }
  }, [isShown])

  const close = () => {
    const shouldClose = safeInvoke(props.onBeforeClose)
    if (shouldClose !== false) {
      setStatus('exiting')
    }
  }

  const onEsc = event => {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      close()
    }
  }

  useEffect(() => {
    if (status === 'entered') {
      setPreviousActiveElement(document.activeElement)
      bringFocusInsideOverlay()
    }

    if (status === 'entering') {
      document.body.addEventListener('keydown', onEsc, false)
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', onEsc, false)
      bringFocusBackToTarget()
    }
  }, [status])

  // ComponentWillUnmount
  useEffect(
    () => () => {
      handleBodyScroll(false)
      document.body.removeEventListener('keydown', onEsc, false)
    },
    []
  )

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  const bringFocusInsideOverlay = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !isShown
      ) {
        return
      }

      const isFocusOutsideModal = !containerRef.current.contains(
        document.activeElement
      )
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = containerRef.current.querySelector(
          '[autofocus]'
        )
        const wrapperElement = containerRef.current.querySelector('[tabindex]')
        const buttonElement = containerRef.current.querySelector('button')

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElement) {
          buttonElement.focus()
        }
      }
    })
  }

  const bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
        containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return
      }

      // Bring back focus on the target.
      const isFocusInsideModal = containerRef.current.contains(
        document.activeElement
      )
      if (document.activeElement === document.body || isFocusInsideModal) {
        previousActiveElement.focus()
      }
    })
  }

  const handleBodyScroll = preventScroll => {
    if (preventBodyScrolling) {
      preventBodyScroll(preventScroll)
    }
  }

  const handleEnter = (node, isAppearing) => {
    handleBodyScroll(true)
    safeInvoke(onEnter, node, isAppearing)
  }

  const handleEntering = (node, isAppearing) => {
    setStatus('entering')
    safeInvoke(onEntering, node, isAppearing)
  }

  const handleEntered = (node, isAppearing) => {
    setStatus('entered')
    safeInvoke(onEntered, node, isAppearing)
  }

  const handleExit = node => {
    handleBodyScroll(false)
    safeInvoke(onExit, node)
  }

  const handleExiting = node => {
    setStatus('exiting')
    safeInvoke(onExiting, node)
  }

  const handleExited = node => {
    setStatus('exited')
    safeInvoke(onExited, node)
  }

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget || !shouldCloseOnClick) {
      return
    }

    close()
  }

  if (status === 'exited') {
    return null
  }

  return (
    <Stack value={StackingOrder.OVERLAY}>
      {zIndex => (
        <Portal>
          <Transition
            appear
            unmountOnExit
            timeout={ANIMATION_DURATION}
            in={isShown && status !== 'exiting'}
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={handleExited}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={handleEntered}
          >
            {state => (
              <Box
                onClick={handleBackdropClick}
                ref={containerRef}
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={zIndex}
                data-state={state}
                {...containerProps}
                className={cx(
                  containerProps.className,
                  css(animationStyles(theme.overlayBackgroundColor)).toString()
                )}
              >
                {typeof children === 'function'
                  ? children({ state, close })
                  : children}
              </Box>
            )}
          </Transition>
        </Portal>
      )}
    </Stack>
  )
})

Overlay.propTypes = {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func
}

export default Overlay
