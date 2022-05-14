import React, { memo } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { DialogBody } from '../../dialog-body/index'
import { DialogFooter } from '../../dialog-footer/index'
import { DialogHeader } from '../../dialog-header/index'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 200

const openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
})

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
})

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
  }
}

const emptyProps = {}

const Dialog = memo(function Dialog({
  children,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  containerProps = emptyProps,
  contentContainerProps,
  minHeightContent = 80,
  footer,
  hasCancel = true,
  hasClose = true,
  hasFooter = true,
  hasHeader = true,
  header,
  intent = 'none',
  isConfirmDisabled = false,
  isConfirmLoading = false,
  isShown = false,
  onCloseComplete,
  onOpenComplete,
  overlayProps = emptyProps,
  preventBodyScrolling = false,
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  sideOffset = '16px',
  title,
  topOffset = '12vmin',
  width = 560
}) {
  const sideOffsetWithUnit = Number.isInteger(sideOffset) ? `${sideOffset}px` : sideOffset
  const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`

  const topOffsetWithUnit = Number.isInteger(topOffset) ? `${topOffset}px` : topOffset
  const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`

  const { className: containerClassName, ...remainingContainerProps } = containerProps

  return (
    <Overlay
      isShown={isShown}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      containerProps={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ...overlayProps
      }}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Pane
          role="dialog"
          backgroundColor="white"
          elevation={4}
          borderRadius={8}
          width={width}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          marginX={sideOffsetWithUnit}
          marginY={topOffsetWithUnit}
          display="flex"
          flexDirection="column"
          className={cx(css(animationStyles).toString(), containerClassName)}
          data-state={state}
          {...remainingContainerProps}
        >
          <DialogHeader hasHeader={hasHeader} header={header} title={title} hasClose={hasClose} onCancel={close} />

          <DialogBody
            state={state}
            minHeight={minHeightContent}
            onCancel={close}
            contentContainerProps={contentContainerProps}
          >
            {children}
          </DialogBody>
          <DialogFooter
            footer={footer}
            isConfirmDisabled={isConfirmDisabled}
            isConfirmLoading={isConfirmLoading}
            hasCancel={hasCancel}
            hasFooter={hasFooter}
            intent={intent}
            cancelLabel={cancelLabel}
            confirmLabel={confirmLabel}
            onCancel={close}
            onConfirm={close}
          />
        </Pane>
      )}
    </Overlay>
  )
})

Dialog.DialogHeader = DialogHeader
Dialog.DialogBody = DialogBody
Dialog.DialogFooter = DialogFooter

Dialog.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
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
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

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
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
}

export default Dialog
