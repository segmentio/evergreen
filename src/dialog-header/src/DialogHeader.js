import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import { useStyleConfig } from '../../hooks'

const renderNode = (node, close) => {
  if (typeof node === 'function') {
    return node({ close })
  }

  return node
}

const emptyProps = {}

const DialogHeader = memo(
  forwardRef(function DialogHeader({ title, hasClose, header }) {
    const themedHeaderProps = useStyleConfig('DialogHeader', emptyProps, emptyProps, emptyProps)

    if (!header && !hasHeader) {
      return null
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
  })
)

DialogHeader.propTypes = {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func
}

export default DialogHeader
