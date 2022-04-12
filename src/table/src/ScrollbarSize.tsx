import React, { memo, useRef, useState, useEffect, SetStateAction } from 'react'

interface ScrollbarSizeProps {
  handleScrollbarSize: React.Dispatch<SetStateAction<number>>
}

const noop = () => {}
const style: React.CSSProperties = {
  position: 'fixed',
  top: -500,
  left: -500,
  width: 100,
  overflowY: 'scroll'
}

const ScrollbarSize: React.FC<ScrollbarSizeProps> = memo(function ScrollbarSize({ handleScrollbarSize = noop }) {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
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
      handleScrollbarSize(widths.outerWidth - widths.innerWidth)
    }
  }, [widths, handleScrollbarSize])

  return (
    <div ref={outerRef} aria-hidden style={style}>
      <div ref={innerRef} />
    </div>
  )
})

export default ScrollbarSize
