import React, { memo, useRef, useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import { Transition } from 'react-transition-group'
import { IntentTypes, PositionTypes } from '../../..'
import { Button, IconButton } from '../../buttons'
import absolutePositions from '../../constants/src/AbsolutePosition'
import positions from '../../constants/src/Position'
import { CrossIcon } from '../../icons'
import { Pane, Card } from '../../layers'
import { Portal } from '../../portal'
import { Paragraph, Heading } from '../../typography'

export interface CornerDialogProps {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * The intent of the Dialog. Used for the button. Defaults to none.
   */
  intent?: IntentTypes
  /**
   * When true, the dialog is shown. Defaults to false.
   */
  isShown?: boolean
  /**
   * Title of the Dialog. The text for the title should use Title Case.
   */
  title?: string | React.ReactNode
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete?: () => void
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete?: () => void
  /**
   * When true, the footer with the cancel and confirm button is shown.
   * Defaults to true.
   */
  hasFooter?: boolean
  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   * If unspecified, this defaults to closing the Dialog.
   */
  onConfirm?: (close: () => void) => void
  /**
   * Label of the confirm button. Default to 'Confirm'.
   */
  confirmLabel?: string
  /**
   * When true, the cancel button is shown. Defaults to true.
   */
  hasCancel?: boolean
  /**
   * When true, the close button is shown. Defaults to true.
   */
  hasClose?: boolean
  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   */
  onCancel?: (close: () => void) => void
  /**
   * Label of the cancel button. Defaults to 'Cancel'.
   */
  cancelLabel?: string
  /**
   * Width of the Dialog.
   */
  width?: string | number
  /**
   * Props that are passed to the dialog container.
   */
  containerProps?: React.ComponentProps<typeof Card>
  /**
   * Props that will set position of corner dialog
   */
  position?: Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
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
    transform: 'translateY(100%)'
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

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.spring} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
}

const closeHandler = (close: any) => close()
const noop = () => {}
const emptyProps = {}

const CornerDialog: React.FC<CornerDialogProps> = memo(function CornerDialog(props) {
  const {
    title,
    width = 448,
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
  const transitionRef = useRef(null)

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

  const handleClose = useCallback(() => setExiting(true), [])

  const handleCancel = useCallback(() => {
    onCancel(handleClose)
  }, [onCancel, handleClose])

  const handleConfirm = useCallback(() => {
    onConfirm(handleClose)
  }, [onConfirm, handleClose])

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
  }, [children, handleClose])

  if (exited) {
    return null
  }

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type '{}'.
  const { className: containerClassName, ...remainingContainerProps } = containerProps

  return (
    <Portal>
      <Transition
        nodeRef={transitionRef}
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={isShown && !exiting}
        onExited={handleExited}
        onEntered={onOpenComplete}
      >
        {state => (
          <Card
            ref={transitionRef}
            role="dialog"
            backgroundColor="white"
            elevation={4}
            width={width}
            className={cx(css(animationStyles).toString(), containerClassName)}
            data-state={state}
            padding={32}
            position="fixed"
            {...absolutePositions[
              Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT
            ]}
            {...remainingContainerProps}
          >
            <Pane display="flex" alignItems="center" marginBottom={12}>
              <Heading is="h4" size={600} flex="1">
                {title}
              </Heading>
              {hasClose && <IconButton icon={CrossIcon} appearance="minimal" onClick={handleClose} />}
            </Pane>

            <Pane overflowY="auto" data-state={state}>
              {renderChildren()}
            </Pane>

            {hasFooter && (
              <Pane marginTop={24} flexShrink={0} display="flex" flexDirection="row-reverse">
                <Button appearance="primary" intent={intent} marginLeft={8} onClick={handleConfirm}>
                  {confirmLabel}
                </Button>
                {hasCancel && <Button onClick={handleCancel}>{cancelLabel}</Button>}
              </Pane>
            )}
          </Card>
        )}
      </Transition>
    </Portal>
  )
})

export default CornerDialog
