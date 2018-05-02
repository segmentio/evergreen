import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Paragraph, Heading } from '../../typography'
import { Overlay } from '../../overlay'
import { Button, IconButton } from '../../buttons'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
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
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

class Dialog extends React.Component {
  static propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     * When passing a string, <Paragraph /> is used to wrap the string.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

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
     * When true, the footer with the cancel and confirm button is shown.
     */
    hasFooter: PropTypes.bool,

    /**
     * When true, the cancel button is shown.
     */
    hasCancel: PropTypes.bool,

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
     * The type of the message.
     */
    type: PropTypes.oneOf(['default', 'danger']),

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
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The space above the dialog.
     * This offset is also used at the bottom when there is not enough space
     * available on screen — and the dialog scrolls internally.
     */
    topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The min height of the body content.
     * Makes it less weird when only showing little content.
     */
    minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The min height of the dialog container.
     */
    minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Props that are passed to the dialog container.
     */
    containerProps: PropTypes.object
  }

  static defaultProps = {
    isShown: false,
    hasHeader: true,
    hasFooter: true,
    hasCancel: true,
    type: 'default',
    width: 560,
    topOffset: '12vh',
    minHeightContent: 114,
    minHeight: 320,
    confirmLabel: 'Confirm',
    isConfirmLoading: false,
    isConfirmDisabled: false,
    cancelLabel: 'Cancel',
    onCancel: close => close(),
    onConfirm: close => close()
  }

  renderChildren = close => {
    const { children } = this.props

    if (typeof children === 'function') {
      return children({ close })
    } else if (typeof children === 'string') {
      return <Paragraph>{children}</Paragraph>
    }
    return children
  }

  render() {
    const {
      title,
      width,
      type,
      isShown,
      topOffset,
      hasHeader,
      hasFooter,
      hasCancel,
      onCloseComplete,
      onOpenComplete,
      onConfirm,
      confirmLabel,
      isConfirmLoading,
      isConfirmDisabled,
      cancelLabel,
      containerProps,
      minHeightContent,
      minHeight
    } = this.props

    let maxHeight
    if (Number.isInteger(topOffset)) {
      maxHeight = `calc(100% - ${topOffset}px)`
    } else {
      maxHeight = `calc(100% - ${topOffset})`
    }

    let buttonAppearance
    if (type === 'default') {
      buttonAppearance = 'green'
    } else if (type === 'danger') {
      buttonAppearance = 'red'
    }

    return (
      <Overlay
        isShown={isShown}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
      >
        {({ state, close }) => (
          <Pane
            boxSizing="border-box"
            display="flex"
            justifyContent="center"
            paddingTop={topOffset}
            maxHeight={maxHeight}
            minHeight={minHeight}
          >
            <Pane
              role="dialog"
              backgroundColor="white"
              elevation={4}
              borderRadius={8}
              width={width}
              display="flex"
              flexDirection="column"
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              {hasHeader && (
                <Pane
                  padding={16}
                  flexShrink={0}
                  borderBottom="extraMuted"
                  display="flex"
                  alignItems="center"
                >
                  <Heading is="h4" size={600} flex="1">
                    {title}
                  </Heading>
                  <IconButton appearance="ghost" icon="close" onClick={close} />
                </Pane>
              )}

              <Pane
                data-state={state}
                display="flex"
                overflowY="auto"
                marginY={16}
                paddingX={16}
                flexDirection="column"
                minHeight={minHeightContent}
              >
                <Pane>{this.renderChildren(close)}</Pane>
              </Pane>

              {hasFooter && (
                <Pane
                  borderTop="extraMuted"
                  flexShrink={0}
                  padding={16}
                  display="flex"
                  justifyContent="flex-end"
                >
                  {/* Cancel should be first to make sure focus gets on it first. */}
                  {hasCancel && (
                    <Button tabIndex={0} onClick={close}>
                      {cancelLabel}
                    </Button>
                  )}

                  <Button
                    tabIndex={0}
                    marginLeft={8}
                    appearance={buttonAppearance}
                    isLoading={isConfirmLoading}
                    disabled={isConfirmDisabled}
                    onClick={() => onConfirm(close)}
                  >
                    {confirmLabel}
                  </Button>
                </Pane>
              )}
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default Dialog
