import React, { memo, useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder } from '../../constants'
import { useTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'
import preventBodyScroll from '../../lib/prevent-body-scroll'
import { findTababble } from '../../lib/tababble'
import { useTransition, TRANSITION_STATES } from '../../hooks'

const NOOP = () => {}

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
 * Overlay is essentially a wrapper around `use-transition`
 */
const Overlay = memo(
  ({
    children,
    containerProps = {},
    preventBodyScrolling = false,
    shouldCloseOnClick = true,
    shouldCloseOnEscapePress = true,
    onBeforeClose,
    onExit = NOOP,
    onExiting = NOOP,
    onExited = NOOP,
    onEnter = NOOP,
    onEntering = NOOP,
    onEntered = NOOP,
    isShown,
    ...props
  }) => {
    const theme = useTheme()

    // `shouldClose` allows us to control internally even if consumers aren't updating `isShown`
    const [shouldClose, setShouldClose] = useState(false)
    const previousActiveElement = useRef(null)
    const containerRef = useRef(null)

    const state = useTransition(isShown && !shouldClose, ANIMATION_DURATION, {
      unmountOnExit: true,
      onEnter: () => safeInvoke(onEnter, containerRef.current),
      onExit: () => safeInvoke(onExit, containerRef.current)
    })

    const close = () => {
      const shouldClose = safeInvoke(props.onBeforeClose)
      if (shouldClose !== false) {
        setShouldClose(true)
      }
    }

    const onEsc = event => {
      if (event.key === 'Escape' && shouldCloseOnEscapePress) {
        close()
      }
    }

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
          const element = findTababble(containerRef.current)
          if (element) {
            element.focus()
          }
        }
      })
    }

    const bringFocusBackToTarget = () => {
      return requestAnimationFrame(() => {
        if (
          previousActiveElement.current == null || // eslint-disable-line eqeqeq, no-eq-null
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
          previousActiveElement.current.focus()
        }
      })
    }

    const handleBodyScroll = preventScroll => {
      if (preventBodyScrolling) {
        preventBodyScroll(preventScroll)
      }
    }

    useEffect(() => {
      if (state === TRANSITION_STATES.entering) {
        handleBodyScroll(true)
        previousActiveElement.current = document.activeElement
        safeInvoke(onEntering, containerRef.current)
        document.body.addEventListener('keydown', onEsc, false)
      } else if (state === TRANSITION_STATES.entered) {
        bringFocusInsideOverlay()
        safeInvoke(onEntered, containerRef.current)
      } else if (state === TRANSITION_STATES.exiting) {
        handleBodyScroll(false)
        document.body.removeEventListener('keydown', onEsc, false)
        bringFocusBackToTarget()
        safeInvoke(onExiting, containerRef.current)
      } else if (shouldClose && state === TRANSITION_STATES.exited) {
        safeInvoke(onExited, containerRef.current)
        setShouldClose(false)
      }
    }, [state])

    // Cleanup body scroll + escape key listener
    useEffect(
      () => () => {
        handleBodyScroll(false)
        document.body.removeEventListener('keydown', onEsc, false)
      },
      []
    )

    const handleBackdropClick = event => {
      if (event.target !== event.currentTarget || !shouldCloseOnClick) {
        return
      }

      close()
    }

    if (state === TRANSITION_STATES.unmounted) {
      return null
    }

    return (
      <Stack value={StackingOrder.OVERLAY}>
        {zIndex => (
          <Portal>
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
          </Portal>
        )}
      </Stack>
    )
  }
)

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
   * type: `Function(node: HtmlElement) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onEntered: PropTypes.func
}

export default Overlay
