import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'

const closeHandler = close => close()
const emptyProps = {}

const renderNode = (node, close) => {
  if (typeof node === 'function') {
    return node({ close })
  }

  return node
}

const DialogFooter = memo(
  forwardRef(function DialogFooter(props, ref) {
    const {
      footer,
      isConfirmDisabled = false,
      isConfirmLoading = false,
      hasCancel = true,
      hasFooter = true,
      intent = 'none',
      cancelLabel = 'Cancel',
      confirmLabel = 'Confirm',
      onCancel = closeHandler,
      onConfirm = closeHandler
    } = props
    const themedFooterProps = useStyleConfig('DialogFooter', emptyProps, emptyProps, emptyProps)

    if (!footer && !hasFooter) {
      return null
    }

    return (
      <Pane ref={ref} display="flex" justifyContent="flex-end" {...themedFooterProps}>
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
  })
)

DialogFooter.propTypes = {
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
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.string,

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
  cancelLabel: PropTypes.string
}

export default DialogFooter
