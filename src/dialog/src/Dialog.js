import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
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
     * Children can be a node or a function accepting `({ close })`.
     * See an example to understand how this works.
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
    minHeightContent: 80,
    confirmLabel: 'Confirm',
    isConfirmLoading: false,
    isConfirmDisabled: false,
    cancelLabel: 'Cancel',
    onCancel: close => close(),
    onConfirm: close => close()
  }

  render() {
    const {
      title,
      width,
      type,
      isShown,
      children,
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
      onCancel,
      cancelLabel,
      containerProps,
      minHeightContent,
      ...props
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
        {...props}
      >
        {({ state, close }) => (
          <Pane
            boxSizing="border-box"
            display="flex"
            justifyContent="center"
            paddingTop={topOffset}
            maxHeight={maxHeight}
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
                flex={1}
                display="flex"
                flexDirection="column"
              >
                <Pane
                  overflowY="auto"
                  padding={16}
                  minHeight={minHeightContent}
                >
                  {typeof children === 'function'
                    ? children({
                        close
                      })
                    : children}
                </Pane>

                {hasFooter && (
                  <Pane
                    flexShrink={0}
                    padding={16}
                    borderTop="extraMuted"
                    display="flex"
                    flexDirection="row-reverse"
                  >
                    <Button
                      marginLeft={8}
                      appearance={buttonAppearance}
                      isLoading={isConfirmLoading}
                      disabled={isConfirmDisabled}
                      onClick={() => onConfirm(close)}
                    >
                      {confirmLabel}
                    </Button>
                    {hasCancel && (
                      <Button onClick={close}>{cancelLabel}</Button>
                    )}
                  </Pane>
                )}
              </Pane>
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default Dialog
