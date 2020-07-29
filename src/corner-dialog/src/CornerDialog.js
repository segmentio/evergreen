import React, { memo, useState, useEffect, useCallback } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Pane, Card } from '../../layers'
import { Portal } from '../../portal'
import { Paragraph, Heading } from '../../typography'
import { Button, IconButton } from '../../buttons'
import absolutePositions from '../../constants/src/AbsolutePosition'
import positions from '../../constants/src/Position'
import { CrossIcon } from '../../icons'

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
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.spring} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
}

const closeHandler = close => close()
const noop = () => {}
const emptyProps = {}

const CornerDialog = memo(function CornerDialog(props) {
  const {
    title,
    width = 392,
    children,
    intent = 'none',
    isShown,
    hasFooter = true,
    hasCancel = true,
    hasClose = true,
    cancelLabel = 'Close',
    confirmLabel = 'Learn More',
    onOpenComplete,
    onCloseComplete = noop,
    onCancel = closeHandler,
    onConfirm = closeHandler,
    containerProps = emptyProps,
    position = positions.BOTTOM_RIGHT
  } = props

  const [exiting, setExiting] = useState(false)
  const [exited, setExited] = useState(!props.isShown)

  useEffect(() => {
    if (isShown) {
      setExited(false)
    }
  }, [isShown])

  const handleExited = useCallback(() => {
    setExiting(false)
    setExited(true)

    onCloseComplete()
  }, [onCloseComplete])

  const handleClose = useCallback(() => setExiting(true))

  const handleCancel = useCallback(() => {
    onCancel(handleClose)
  }, [onCancel])

  const handleConfirm = useCallback(() => {
    onConfirm(handleClose)
  }, [onConfirm])

  const renderChildren = useCallback(() => {
    if (typeof children === 'function') {
      return children({ close: handleClose })
    }

    if (typeof children === 'string') {
      return (
        <Paragraph size={400} color="muted">
          {children}
        </Paragraph>
      )
    }

    return children
  }, [children])

  if (exited) {
    return null
  }

  return (
    <Portal>
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={isShown && !exiting}
        onExited={handleExited}
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
            padding={32}
            position="fixed"
            {...absolutePositions[
              Object.keys(absolutePositions).includes(position)
                ? position
                : positions.BOTTOM_RIGHT
            ]}
            {...containerProps}
          >
            <Pane display="flex" alignItems="center" marginBottom={12}>
              <Heading is="h4" size={600} flex="1">
                {title}
              </Heading>
              {hasClose && (
                <IconButton
                  height={32}
                  icon={CrossIcon}
                  appearance="minimal"
                  onClick={handleClose}
                />
              )}
            </Pane>

            <Pane overflowY="auto" data-state={state}>
              {renderChildren()}
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
                  onClick={handleConfirm}
                >
                  {confirmLabel}
                </Button>
                {hasCancel && (
                  <Button onClick={handleCancel}>{cancelLabel}</Button>
                )}
              </Pane>
            )}
          </Card>
        )}
      </Transition>
    </Portal>
  )
})

CornerDialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

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

export default CornerDialog
