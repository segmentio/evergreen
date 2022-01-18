import React, { memo, useRef, useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Button, IconButton } from '../../buttons'
import absolutePositions from '../../constants/src/AbsolutePosition'
import positions from '../../constants/src/Position'
import { CrossIcon } from '../../icons'
import { Pane, Card } from '../../layers'
import { Portal } from '../../portal'
import { Paragraph, Heading } from '../../typography'

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

const CornerDialog = memo(function CornerDialog(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
    title,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
    width = 448,
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'intent' does not exist on type '{ childr... Remove this comment to see the full error message
    intent = 'none',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
    isShown,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasFooter' does not exist on type '{ chi... Remove this comment to see the full error message
    hasFooter = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasCancel' does not exist on type '{ chi... Remove this comment to see the full error message
    hasCancel = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasClose' does not exist on type '{ chil... Remove this comment to see the full error message
    hasClose = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'cancelLabel' does not exist on type '{ c... Remove this comment to see the full error message
    cancelLabel = 'Close',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'confirmLabel' does not exist on type '{ ... Remove this comment to see the full error message
    confirmLabel = 'Learn More',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onOpenComplete' does not exist on type '... Remove this comment to see the full error message
    onOpenComplete,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCloseComplete' does not exist on type ... Remove this comment to see the full error message
    onCloseComplete = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCancel' does not exist on type '{ chil... Remove this comment to see the full error message
    onCancel = closeHandler,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onConfirm' does not exist on type '{ chi... Remove this comment to see the full error message
    onConfirm = closeHandler,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'containerProps' does not exist on type '... Remove this comment to see the full error message
    containerProps = emptyProps,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
    position = positions.BOTTOM_RIGHT
  } = props

  const [exiting, setExiting] = useState(false)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type 'PropsWi... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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
            // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
            <Pane display="flex" alignItems="center" marginBottom={12}>
              // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
              <Heading is="h4" size={600} flex="1">
                {title}
              </Heading>
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'MemoExoticComponent<ForwardRefExoticComponen... Remove this comment to see the full error message
              {hasClose && <IconButton icon={CrossIcon} appearance="minimal" onClick={handleClose} />}
            </Pane>

            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Pane overflowY="auto" data-state={state}>
              {renderChildren()}
            </Pane>

            {hasFooter && (
              // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
              <Pane marginTop={24} flexShrink={0} display="flex" flexDirection="row-reverse">
                // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
                <Button appearance="primary" intent={intent} marginLeft={8} onClick={handleConfirm}>
                  {confirmLabel}
                </Button>
                // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
                {hasCancel && <Button onClick={handleCancel}>{cancelLabel}</Button>}
              </Pane>
            )}
          </Card>
        )}
      </Transition>
    </Portal>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
CornerDialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: PropTypes.string,

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
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
}

export default CornerDialog
