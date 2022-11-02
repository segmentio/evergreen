import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

const renderNode = (node, close) => {
  if (typeof node === 'function') {
    return node({ close })
  }

  return node
}

const emptyProps = {}

const DialogHeader = memo(
  forwardRef(function DialogHeader(props, ref) {
    const { hasClose, hasHeader, header, onCancel, title } = props

    const themedHeaderProps = useStyleConfig('DialogHeader', emptyProps, emptyProps, emptyProps)

    if (!header && !hasHeader) {
      return null
    }

    return (
      <Pane ref={ref} flexShrink={0} display="flex" alignItems="center" {...themedHeaderProps}>
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
