import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'

const closeHandler = close => close()

const renderChildren = (children, close) => {
  if (typeof children === 'function') {
    return children({ close })
  }

  if (typeof children === 'string') {
    return <Paragraph>{children}</Paragraph>
  }

  return children
}

const DialogBody = memo(
  forwardRef(function DialogBody(props, ref) {
    const emptyProps = {}

    const themedBodyProps = useStyleConfig('DialogBody', emptyProps, emptyProps, emptyProps)

    const { contentContainerProps, minHeightContent = 80, onCancel = closeHandler, state, children } = props

    return (
      <Pane
        ref={ref}
        data-state={state}
        display="flex"
        overflow="auto"
        flexDirection="column"
        minHeight={minHeightContent}
        {...themedBodyProps}
        {...contentContainerProps}
      >
        <Pane>{renderChildren(children, onCancel)}</Pane>
      </Pane>
    )
  })
)

DialogBody.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,
  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,
  /**
   * State of the dialog passed to dialog.
   */
  state: PropTypes.string
}

export default DialogBody
