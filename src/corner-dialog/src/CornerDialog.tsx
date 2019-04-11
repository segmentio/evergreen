import { css } from 'ui-box'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import Transition from 'react-transition-group/Transition'

import { Button, IconButton } from '../../buttons'
import { IntentType } from '../../constants'
import { Pane, Card } from '../../layers'
import { Portal } from '../../portal'
import { Paragraph, Heading } from '../../typography'

interface CornerDialogProps {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: React.ReactNode

  // The intent of the CornerDialog. Used for the button.
  intent?: IntentType

  // When true, the dialog is shown.
  isShown?: boolean

  // Title of the Dialog. Titles should use Title Case.
  title?: React.ReactNode

  // Function that will be called when the exit transition is complete.
  onCloseComplete?: (...args: any[]) => any

  // Function that will be called when the enter transition is complete.
  onOpenComplete?: (...args: any[]) => any

  // When true, the footer with the cancel and confirm button is shown.
  hasFooter?: boolean

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm?: (...args: any[]) => any

  // Label of the confirm button.
  confirmLabel?: string

  // When true, the cancel button is shown.
  hasCancel?: boolean

  // When true, the close button is shown.
  hasClose?: boolean

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel?: (...args: any[]) => any

  // Label of the cancel button.
  cancelLabel?: string

  // Width of the Dialog.
  width?: string | number

  // Props that are passed to the dialog container.
  containerProps?: { [key: string]: any }
}

interface CornerDialogState {
  exiting: boolean
  exited: boolean
}

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

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.spring
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
}

export default class CornerDialog extends React.PureComponent<
  CornerDialogProps,
  CornerDialogState
> {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<IntentType>,
    isShown: PropTypes.bool,
    title: PropTypes.node,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    hasFooter: PropTypes.bool,
    onConfirm: PropTypes.func,
    confirmLabel: PropTypes.string,
    hasCancel: PropTypes.bool,
    hasClose: PropTypes.bool,
    onCancel: PropTypes.func,
    cancelLabel: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 392,
    intent: 'none',
    hasFooter: true,
    confirmLabel: 'Learn More',
    hasCancel: true,
    hasClose: true,
    cancelLabel: 'Close',
    onCancel: (close: (...args: any[]) => any) => close(),
    onConfirm: (close: (...args: any[]) => any) => close()
  }

  constructor(props: CornerDialogProps) {
    super(props)

    this.state = {
      exiting: false,
      exited: !props.isShown
    }
  }

  componentDidUpdate(prevProps: CornerDialogProps) {
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
      containerProps
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
              css={animationStyles}
              data-state={state}
              position="fixed"
              bottom={16}
              right={16}
              padding={32}
              {...containerProps}
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
