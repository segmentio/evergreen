import React, { memo, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Textarea } from '../../textarea'

const EditableCellField = memo(function EditableCellField(props) {
  const { getTargetRef } = props

  const getTableBodyRef = () => {
    let ref = getTargetRef()

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

  const latestAnimationFrame = useRef()
  const textareaRef = useRef()
  const tableBodyRef = useRef()
  const [{ height, width, top, left }, setDimensions] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0
  })

  // Mirrors functionality of componentDidMount and componentWillUnmount.
  // Focus on mount
  useEffect(() => {
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

      props.onCancel()
    }
  }, [])

  const update = () => {
    const { getTargetRef } = props
    const targetRef = getTargetRef()
    if (!targetRef) return
    tableBodyRef.current = getTableBodyRef()

    const {
      left: targetLeft,
      top: targetTop,
      height: targetHeight,
      width: targetWidth
    } = targetRef.getBoundingClientRect()

    let calculatedTop
    if (tableBodyRef.current) {
      const bounds = tableBodyRef.current.getBoundingClientRect()
      calculatedTop = Math.min(
        Math.max(targetTop, bounds.top),
        bounds.bottom - targetHeight
      )
    } else {
      calculatedTop = targetTop
    }

    setDimensions({
      top: calculatedTop,
      left: targetLeft,
      height: targetHeight,
      width: targetWidth
    })
    latestAnimationFrame.current = requestAnimationFrame(() => update())
  }

  const handleFocus = e => {
    e.target.selectionStart = e.target.value.length
  }

  const handleBlur = () => {
    if (textareaRef.current) props.onChangeComplete(textareaRef.current.value)
  }

  const handleKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        props.onCancel()
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
  }

  const { size, value, minWidth = 80, minHeight = 40, zIndex } = props

  return (
    <Textarea
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onFocus={handleFocus}
      appearance="editable-cell"
      size={size}
      style={{
        left,
        top,
        height,
        minHeight: Math.max(height, minHeight),
        width,
        minWidth: Math.max(width, minWidth),
        zIndex
      }}
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
