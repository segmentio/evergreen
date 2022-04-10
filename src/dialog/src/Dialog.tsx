import React, { memo } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Button, IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Overlay } from '../../overlay'
import { Paragraph, Heading } from '../../typography'

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

const Dialog = memo(function Dialog({
  children,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'cancelLabel' does not exist on type '{ c... Remove this comment to see the full error message
  cancelLabel = 'Cancel',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'confirmLabel' does not exist on type '{ ... Remove this comment to see the full error message
  confirmLabel = 'Confirm',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'containerProps' does not exist on type '... Remove this comment to see the full error message
  containerProps = emptyProps,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'contentContainerProps' does not exist on... Remove this comment to see the full error message
  contentContainerProps,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'footer' does not exist on type '{ childr... Remove this comment to see the full error message
  footer,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasCancel' does not exist on type '{ chi... Remove this comment to see the full error message
  hasCancel = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasClose' does not exist on type '{ chil... Remove this comment to see the full error message
  hasClose = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasFooter' does not exist on type '{ chi... Remove this comment to see the full error message
  hasFooter = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasHeader' does not exist on type '{ chi... Remove this comment to see the full error message
  hasHeader = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type '{ childr... Remove this comment to see the full error message
  header,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'intent' does not exist on type '{ childr... Remove this comment to see the full error message
  intent = 'none',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isConfirmDisabled' does not exist on typ... Remove this comment to see the full error message
  isConfirmDisabled = false,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isConfirmLoading' does not exist on type... Remove this comment to see the full error message
  isConfirmLoading = false,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
  isShown = false,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'minHeightContent' does not exist on type... Remove this comment to see the full error message
  minHeightContent = 80,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCancel' does not exist on type '{ chil... Remove this comment to see the full error message
  onCancel = closeHandler,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCloseComplete' does not exist on type ... Remove this comment to see the full error message
  onCloseComplete,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onConfirm' does not exist on type '{ chi... Remove this comment to see the full error message
  onConfirm = closeHandler,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onOpenComplete' does not exist on type '... Remove this comment to see the full error message
  onOpenComplete,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'overlayProps' does not exist on type '{ ... Remove this comment to see the full error message
  overlayProps = emptyProps,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'preventBodyScrolling' does not exist on ... Remove this comment to see the full error message
  preventBodyScrolling = false,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'shouldCloseOnEscapePress' does not exist... Remove this comment to see the full error message
  shouldCloseOnEscapePress = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'shouldCloseOnOverlayClick' does not exis... Remove this comment to see the full error message
  shouldCloseOnOverlayClick = true,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'sideOffset' does not exist on type '{ ch... Remove this comment to see the full error message
  sideOffset = '16px',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
  title,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'topOffset' does not exist on type '{ chi... Remove this comment to see the full error message
  topOffset = '12vmin',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Pane flexShrink={0} display="flex" alignItems="center" {...themedHeaderProps}>
        {header ? (
          renderNode(header, close)
        ) : (
          <>
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Heading is="h4" size={600} flex="1">
              {title}
            </Heading>
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
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
      // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      <Pane display="flex" justifyContent="flex-end" {...themedFooterProps}>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Pane>
          {footer ? (
            renderNode(footer, close)
          ) : (
            <>
              {/* Cancel should be first to make sure focus gets on it first. */}
              {hasCancel && (
                // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
                <Button tabIndex={0} onClick={() => onCancel(close)}>
                  {cancelLabel}
                </Button>
              )}

              // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
              // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
              // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
              <Button
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
                tabIndex={0}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
                marginLeft={8}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
                appearance="primary"
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
                intent={intent}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
                isLoading={isConfirmLoading}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
                disabled={isConfirmDisabled}
                // @ts-expect-error ts-migrate(2322) FIXME: Type '() => any' is not assignable to type 'never'... Remove this comment to see the full error message
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

  const { className: containerClassName, ...remainingContainerProps } = containerProps

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: ({ close, state }: any) => Eleme... Remove this comment to see the full error message
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
      {({
        close,
        state
      }: any) => (
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
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Pane>{renderChildren(close)}</Pane>
          </Pane>

          {renderFooter(close)}
        </Pane>
      )}
    </Overlay>
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
