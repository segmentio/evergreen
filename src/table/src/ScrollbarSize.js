import React, { memo, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const noop = () => {}

const ScrollbarSize = memo(function ScrollbarSize({
  handleScrollbarSize = noop
}) {
  const innerRef = useRef()
  const outerRef = useRef()
  const [widths, setWidths] = useState({ innerWidth: null, outerWidth: null })

  useEffect(() => {
    const newWidths = { innerWidth: null, outerWidth: null }

    if (innerRef.current) {
      newWidths.innerWidth = innerRef.current.getBoundingClientRect().width
    }

    if (outerRef.current) {
      newWidths.outerWidth = outerRef.current.getBoundingClientRect().width
    }

    setWidths(newWidths)
  }, [])

  useEffect(() => {
    if (widths.innerWidth && widths.outerWidth) {
      handleScrollbarSize(widths.outerWidth - widths.innerWidth)
    }
  })

  return (
    <div
      ref={outerRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: -500,
        left: -500,
        width: 100,
        overflowY: 'scroll'
      }}
    >
      <div ref={innerRef} />
    </div>
  )
})

ScrollbarSize.propTypes = {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: PropTypes.func
}

export default ScrollbarSize
