import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import Box, { css } from 'ui-box'
import { Portal } from '../../portal'
import { colors } from '../../colors'

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

const animationStyles = {
  '&::before': {
    backgroundColor: colors.neutral['200A'],
    left: 0,
    top: 0,
    position: 'fixed',
    display: 'block',
    width: '100%',
    height: '100%',
    content: '" "'
  },
  '&[data-state="entering"]::before, &[data-state="entered"]::before': {
    animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
    animation: `${fadeOutAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 * Learn more: https://reactcommunity.org/react-transition-group/
 */
class Overlay extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    onHide: () => {},
    onExit: () => {},
    onExiting: () => {},
    onExited: () => {},
    onEnter: () => {},
    onEntering: () => {},
    onEntered: () => {}
  }

  constructor(props) {
    super(props)

    this.state = {
      exiting: false,
      exited: !props.isShown
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShown && !this.props.isShown) {
      this.setState({
        exited: false
      })
    }
  }

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  bringFocusInsideOverlay = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !this.props.isShown
      ) {
        return
      }

      const isFocusOutsideModal = !this.containerElement.contains(
        document.activeElement
      )
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = this.containerElement.querySelector(
          '[autofocus]'
        )
        const wrapperElement = this.containerElement.querySelector('[tabindex]')
        // eslint-disable-next-line eqeqeq, no-eq-null
        if (autofocusElement != null) {
          autofocusElement.focus()
          // eslint-disable-next-line eqeqeq, no-eq-null
        } else if (wrapperElement != null) {
          wrapperElement.focus()
        }
      }
    })
  }

  handleExited = node => {
    this.setState({ exiting: false, exited: true })

    if (this.props.onExited) {
      this.props.onExited(node)
    }
  }

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return
    }

    this.setState({ exiting: true })
  }

  handleClose = () => {
    this.setState({ exiting: true })
  }

  handleEntered = (...args) => {
    this.props.onEntered(...args)
  }

  onContainerRef = ref => {
    this.containerRef = ref
  }

  render() {
    const {
      containerProps = {},
      isShown,
      children,
      onExit,
      onExiting,
      onEnter,
      onEntering
    } = this.props

    const { exiting, exited } = this.state

    if (exited) return null

    return (
      <Portal>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown && !exiting}
          onExit={onExit}
          onExiting={onExiting}
          onExited={this.handleExited}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={this.handleEntered}
        >
          {state => (
            <Box
              onClick={this.handleBackdropClick}
              innerRef={this.onContainerRef}
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={40}
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              {typeof children === 'function'
                ? children({
                    state,
                    close: this.handleClose
                  })
                : children}
            </Box>
          )}
        </Transition>
      </Portal>
    )
  }
}

export default Overlay
