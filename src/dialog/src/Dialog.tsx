import React, { memo } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import { IntentTypes } from '../../types/theme/intent-types'
import { Button, IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import { Paragraph, Heading } from '../../typography'

export interface DialogProps {
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
   * Title of the Dialog. Titles should use Title Case.
   */
  title?: React.ReactNode
  /**
   * When true, the header with the title and close icon button is shown.
   * Defaults to true.
   */
  hasHeader?: boolean
  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * When true, the footer with the cancel and confirm button is shown.
   * Defaults to true.
   */
  hasFooter?: boolean
  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * When true, the cancel button is shown. Defaults to true.
   */
  hasCancel?: boolean
  /**
   * When true, the close button is shown. Defaults to true.
   */
  hasClose?: boolean
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete?: () => void
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete?: () => void
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
   * When true, the confirm button is set to loading. Defaults to false.
   */
  isConfirmLoading?: boolean
  /**
   * When true, the confirm button is set to disabled. Defaults to false.
   */
  isConfirmDisabled?: boolean
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
   * Boolean indicating if clicking the overlay should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnOverlayClick?: boolean
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnEscapePress?: boolean
  /**
   * Width of the Dialog.
   */
  width?: string | number
  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset?: string | number
  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset?: string | number
  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent?: string | number
  /**
   * Props that are passed to the dialog container.
   */
  containerProps?: React.ComponentProps<typeof Pane>
  /**
   * Props that are passed to the content container.
   */
  contentContainerProps?: React.ComponentProps<typeof Pane>
  /**
   * Whether or not to prevent scrolling in the outer body. Defaults to false.
   */
  preventBodyScrolling?: boolean
  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps?: React.ComponentProps<typeof Pane>
}

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 200

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
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

const closeHandler = (close: any) => close()
const emptyProps = {}

const Dialog: React.FC<DialogProps> = memo(function Dialog({
  children,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  containerProps = emptyProps,
  contentContainerProps,
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
  minHeightContent = 80,
  onCancel = closeHandler,
  onCloseComplete,
  onConfirm = closeHandler,
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

  const renderChildren = (close: any) => {
    if (typeof children === 'function') {
      return children({ close })
    }

    if (typeof children === 'string') {
      return <Paragraph>{children}</Paragraph>
    }

    return children
  }

  const renderNode = (node: any, close: any) => {
    if (typeof node === 'function') {
      return node({ close })
    }

    return node
  }

  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"DialogHeader"' is not assignabl... Remove this comment to see the full error message
  const themedHeaderProps = useStyleConfig('DialogHeader', emptyProps, emptyProps, emptyProps)
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"DialogBody"' is not assignable ... Remove this comment to see the full error message
  const themedBodyProps = useStyleConfig('DialogBody', emptyProps, emptyProps, emptyProps)
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"DialogFooter"' is not assignabl... Remove this comment to see the full error message
  const themedFooterProps = useStyleConfig('DialogFooter', emptyProps, emptyProps, emptyProps)

  const renderHeader = (close: any) => {
    if (!header && !hasHeader) {
      return undefined
    }

    return (
      <Pane flexShrink={0} display="flex" alignItems="center" {...themedHeaderProps}>
        {header ? (
          renderNode(header, close)
        ) : (
          <>
            <Heading is="h4" size={600} flex="1">
              {title}
            </Heading>
            {hasClose && <IconButton appearance="minimal" icon={CrossIcon} onClick={() => onCancel(close)} />}
          </>
        )}
      </Pane>
    )
  }

  const renderFooter = (close: any) => {
    if (!footer && !hasFooter) {
      return undefined
    }

    return (
      <Pane display="flex" justifyContent="flex-end" {...themedFooterProps}>
        <Pane>
          {footer ? (
            renderNode(footer, close)
          ) : (
            <>
              {/* Cancel should be first to make sure focus gets on it first. */}
              {hasCancel && (
                <Button tabIndex={0} onClick={() => onCancel(close)}>
                  {cancelLabel}
                </Button>
              )}
              <Button
                tabIndex={0}
                marginLeft={8}
                appearance="primary"
                intent={intent}
                isLoading={isConfirmLoading}
                disabled={isConfirmDisabled}
                onClick={() => onConfirm(close)}
              >
                {confirmLabel}
              </Button>
            </>
          )}
        </Pane>
      </Pane>
    )
  }

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type '{}'.
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
      {({ close, state }: any) => (
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
          {renderHeader(close)}

          <Pane
            data-state={state}
            display="flex"
            overflow="auto"
            flexDirection="column"
            minHeight={minHeightContent}
            {...themedBodyProps}
            {...contentContainerProps}
          >
            <Pane>{renderChildren(close)}</Pane>
          </Pane>

          {renderFooter(close)}
        </Pane>
      )}
    </Overlay>
  )
})

export default Dialog
