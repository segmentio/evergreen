import cx from 'classnames'
import { css } from 'glamor'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { Pane, Card } from '../../layers'
import { Portal } from '../../portal'
import { Paragraph, Heading } from '../../typography'
import { Button, IconButton } from '../../buttons'
import absolutePositions from '../../constants/src/AbsolutePosition'
import positions from '../../constants/src/Position'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const ANIMATION_DURATION = 240

const openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
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

const animationStylesClass = css({
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.spring} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
}).toString()

export default class CornerDialog extends PureComponent {
  static propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * The intent of the CornerDialog. Used for the button.
     */
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired,

    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Title of the Dialog. Titles should use Title Case.
     */
    title: PropTypes.node,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func,

    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: PropTypes.func,

    /**
     * When true, the footer with the cancel and confirm button is shown.
     */
    hasFooter: PropTypes.bool,

    /**
     * Function that will be called when the confirm button is clicked.
     * This does not close the Dialog. A close function will be passed
     * as a paramater you can use to close the dialog.
     *
     * `onConfirm={(close) => close()}`
     */
    onConfirm: PropTypes.func,

    /**
     * Label of the confirm button.
     */
    confirmLabel: PropTypes.string,

    /**
     * When true, the cancel button is shown.
     */
    hasCancel: PropTypes.bool,

    /**
     * When true, the close button is shown.
     */
    hasClose: PropTypes.bool,

    /**
     * Function that will be called when the cancel button is clicked.
     * This closes the Dialog by default.
     *
     * `onCancel={(close) => close()}`
     */
    onCancel: PropTypes.func,

    /**
     * Label of the cancel button.
     */
    cancelLabel: PropTypes.string,

    /**
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Props that are passed to the dialog container.
     */
    containerProps: PropTypes.object,

    /**
     * Props that will set position of corner dialog
     */
    position: PropTypes.oneOf([
      positions.TOP_LEFT,
      positions.TOP_RIGHT,
      positions.BOTTOM_LEFT,
      positions.BOTTOM_RIGHT
    ])
  }

  static defaultProps = {
    width: 392,
    intent: 'none',
    hasFooter: true,
    confirmLabel: 'Learn More',
    hasCancel: true,
    hasClose: true,
    cancelLabel: 'Close',
    onCancel: close => close(),
    onConfirm: close => close(),
    onCloseComplete: () => {},
    position: positions.BOTTOM_RIGHT
  }

  constructor(props) {
    super(props)

    this.state = {
      exiting: false,
      exited: !props.isShown
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isShown && this.props.isShown) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        exited: false
      })
    }
  }

  handleExited = () => {
    this.setState({ exiting: false, exited: true })
    this.props.onCloseComplete()
  }

  handleCancel = () => {
    this.props.onCancel(this.handleClose)
  }

  handleClose = () => {
    this.setState({ exiting: true })
  }

  handleConfirm = () => {
    this.props.onConfirm(this.handleClose)
  }

  renderChildren = () => {
    const { children } = this.props
    if (typeof children === 'function') {
      return children({ close: this.handleClose })
    }

    if (typeof children === 'string') {
      return (
        <Paragraph size={400} color="muted">
          {children}
        </Paragraph>
      )
    }

    return children
  }

  render() {
    const {
      title,
      width,
      intent,
      isShown,
      hasFooter,
      hasCancel,
      hasClose,
      cancelLabel,
      confirmLabel,
      onOpenComplete,
      containerProps = {},
      position
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
          onExited={this.handleExited}
          onEntered={onOpenComplete}
        >
          {state => (
            <Card
              role="dialog"
              backgroundColor="white"
              elevation={4}
              width={width}
              data-state={state}
              padding={32}
              position="fixed"
              {...absolutePositions[
                Object.keys(absolutePositions).includes(position)
                  ? position
                  : positions.BOTTOM_RIGHT
              ]}
              {...containerProps}
              className={cx(containerProps.className, animationStylesClass)}
            >
              <Pane display="flex" alignItems="center" marginBottom={12}>
                <Heading is="h4" size={600} flex="1">
                  {title}
                </Heading>
                {hasClose && (
                  <IconButton
                    height={32}
                    icon="cross"
                    appearance="minimal"
                    onClick={this.handleClose}
                  />
                )}
              </Pane>

              <Pane overflowY="auto" data-state={state}>
                {this.renderChildren()}
              </Pane>

              {hasFooter && (
                <Pane
                  marginTop={24}
                  flexShrink={0}
                  display="flex"
                  flexDirection="row-reverse"
                >
                  <Button
                    appearance="primary"
                    intent={intent}
                    marginLeft={8}
                    onClick={this.handleConfirm}
                  >
                    {confirmLabel}
                  </Button>
                  {hasCancel && (
                    <Button onClick={this.handleCancel}>{cancelLabel}</Button>
                  )}
                </Pane>
              )}
            </Card>
          )}
        </Transition>
      </Portal>
    )
  }
}
