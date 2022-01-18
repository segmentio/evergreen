import React, { memo, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const noop = () => {}
const style = {
  position: 'fixed',
  top: -500,
  left: -500,
  width: 100,
  overflowY: 'scroll'
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'handleScrollbarSize' does not exist on t... Remove this comment to see the full error message
const ScrollbarSize = memo(function ScrollbarSize({ handleScrollbarSize = noop }) {
  const innerRef = useRef()
  const outerRef = useRef()
  const [widths, setWidths] = useState({ innerWidth: null, outerWidth: null })

  useEffect(() => {
    const newWidths = { innerWidth: null, outerWidth: null }

    if (innerRef.current) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      newWidths.innerWidth = innerRef.current.getBoundingClientRect().width
    }

    if (outerRef.current) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      newWidths.outerWidth = outerRef.current.getBoundingClientRect().width
    }

    setWidths(newWidths)
  }, [])

  useEffect(() => {
    if (widths.innerWidth && widths.outerWidth) {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      handleScrollbarSize(widths.outerWidth - widths.innerWidth)
    }
  }, [widths, handleScrollbarSize])

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
    <div ref={outerRef} aria-hidden style={style}>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message */}
      <div ref={innerRef} />
    </div>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
ScrollbarSize.propTypes = {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: PropTypes.func
}

export default ScrollbarSize
