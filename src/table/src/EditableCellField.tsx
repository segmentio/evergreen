import React, { memo, useRef, useState, useMemo, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { useLatest } from '../../hooks'
import { Textarea } from '../../textarea'

function getTableBodyRef(currentRef) {
  let ref = currentRef

  if (!ref) return

  while (ref) {
    const isTableBody = ref.hasAttribute('data-evergreen-table-body')
    if (isTableBody) {
      return ref
    }

    if (ref.parentElement) {
      ref = ref.parentElement
    } else {
      return null
    }
  }

  return ref
}

const EditableCellField = memo(function EditableCellField(props) {
  const { minHeight = 40, minWidth = 80, size, value, zIndex } = props

  const latestAnimationFrame = useRef()
  const textareaRef = useRef()
  const tableBodyRef = useRef()
  const onCancelRef = useLatest(props.onCancel)
  const onChangeCompleteRef = useLatest(props.onChangeComplete)
  const getTargetRef = useLatest(props.getTargetRef)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)

  const update = useCallback(() => {
    function updater() {
      const targetRef = getTargetRef.current()
      if (!targetRef) return
      tableBodyRef.current = getTableBodyRef(targetRef)

      const {
        height: targetHeight,
        left: targetLeft,
        top: targetTop,
        width: targetWidth
      } = targetRef.getBoundingClientRect()

      let calculatedTop
      if (tableBodyRef.current) {
        const bounds = tableBodyRef.current.getBoundingClientRect()
        calculatedTop = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - targetHeight)
      } else {
        calculatedTop = targetTop
      }

      setHeight(targetHeight)
      setWidth(targetWidth)
      setLeft(targetLeft)
      setTop(calculatedTop)

      // recursively run the updater
      latestAnimationFrame.current = requestAnimationFrame(() => updater())
    }

    // kick off the updater
    updater()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Mirrors functionality of componentDidMount and componentWillUnmount.
  // Focus on mount
  useLayoutEffect(() => {
    update()

    const requestId = requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
      }
    })

    return () => {
      cancelAnimationFrame(requestId)

      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      onCancelRef.current()
    }
    // we only want `update` to run once, and `onCancelRef` is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFocus = useCallback(e => {
    e.target.selectionStart = e.target.value.length
  }, [])

  const handleBlur = useCallback(() => {
    if (textareaRef.current) {
      onChangeCompleteRef.current(textareaRef.current.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyDown = useCallback(e => {
    switch (e.key) {
      case 'Escape':
        onCancelRef.current()
        if (textareaRef.current) textareaRef.current.blur()
        break
      case 'Enter':
        if (textareaRef.current) textareaRef.current.blur()
        e.preventDefault()
        break
      case 'Tab':
        if (textareaRef.current) textareaRef.current.blur()
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const style = useMemo(
    () => ({
      left,
      top,
      height,
      minHeight: Math.max(height, minHeight),
      width,
      minWidth: Math.max(width, minWidth),
      zIndex
    }),
    [left, top, height, width, minHeight, minWidth, zIndex]
  )

  return (
    <Textarea
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onFocus={handleFocus}
      appearance="editable-cell"
      size={size}
      style={style}
      height={null}
      width={null}
      minHeight={null}
      position="fixed"
      defaultValue={value}
    />
  )
})

EditableCellField.propTypes = {
  /**
   * Used as the defaultValue of the textarea.
   */
  value: PropTypes.string.isRequired,

  /**
   * The z-index placed on the element.
   */
  zIndex: PropTypes.number.isRequired,

  /**
   * Function to get the target ref of the parent.
   * Used to mirror the position.
   */
  getTargetRef: PropTypes.func.isRequired,

  /**
   * Min width of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minWidth: PropTypes.number,

  /**
   * Min height of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minHeight: PropTypes.number,

  /**
   * Called when the textarea is blurred, pass the value back to the cell.
   */
  onChangeComplete: PropTypes.func.isRequired,

  /**
   * Called when Escape is hit or componentWillUnmount.
   */
  onCancel: PropTypes.func.isRequired,

  /**
   * Text size of the textarea.
   */
  size: PropTypes.number
}

export default EditableCellField
