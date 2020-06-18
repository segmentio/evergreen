import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ScrollbarSize = memo(props => {
  const [innerRef, setInnerRef] = useState()
  const [outerRef, setOuterRef] = useState()
  const [innerWidth, setInnerWidth] = useState(null)
  const [outerWidth, setOuterWidth] = useState(null)

  useEffect(() => {
    if (innerRef) {
      setInnerWidth(innerRef.getBoundingClientRect().width)
    }
  
    if (outerRef) {
      setOuterWidth(outerRef.getBoundingClientRect().width)
    }
  }, [innerRef, outerRef])

  useEffect(() => {
    if (innerWidth && outerWidth) {
      props.handleScrollbarSize(outerWidth - innerWidth)
    }
  })

  return (
    <div
      ref={setOuterRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: -500,
        left: -500,
        width: 100,
        overflowY: 'scroll'
      }}
    >
      <div ref={setInnerRef} />
    </div>
  )
})

ScrollbarSize.propTypes = {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: PropTypes.func
}

ScrollbarSize.defaultProps = {
  handleScrollbarSize: () => {}
}

export default ScrollbarSize
