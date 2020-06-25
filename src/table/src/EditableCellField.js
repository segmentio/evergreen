import React, {memo, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Textarea } from '../../textarea'

const EditableCellField = memo(props => {
  let tableBodyRef
  let latestAnimationFrame

  const [textareaRef, setTextareaRef] = useState()
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  // Mirrors functionality of componentDidMount and componentWillUnmount.
  // By passing an empty array, will only run on first render, the function returned
  // will be called on component unmount
  useEffect(() => {
    update()

    return () => {
      cancelAnimationFrame(latestAnimationFrame)
      props.onCancel()
    }
  }, [])

  useEffect(() => {
    if (textareaRef) {
      requestAnimationFrame(() => {
        textareaRef.focus()
      })
    }
  }, [textareaRef])

  const getTableBodyRef = targetRef => {
    if (tableBodyRef) return tableBodyRef

    let ref = targetRef
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

    tableBodyRef = ref
    return tableBodyRef
  }

  const update = () => {
    const { getTargetRef } = props
    const targetRef = getTargetRef()
    if (!targetRef) return
    const tableBodyRef = getTableBodyRef(targetRef)

    const {
      left: targetLeft,
      top: targetTop,
      height: targetHeight,
      width: targetWidth
    } = targetRef.getBoundingClientRect()

    let calculatedTop
    if (tableBodyRef) {
      const bounds = tableBodyRef.getBoundingClientRect()
      calculatedTop = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - targetHeight)
    } else {
      calculatedTop = targetTop
    }

    setLeft(targetLeft)
    setTop(calculatedTop)
    setHeight(targetHeight)
    setWidth(targetWidth)
    latestAnimationFrame = requestAnimationFrame(() => update())
  }

  const handleFocus = e => {
    e.target.selectionStart = e.target.value.length
  }

  const handleBlur = () => {
    if (textareaRef) props.onChangeComplete(textareaRef.value)
  }

  const handleKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        props.onCancel()
        textareaRef.blur()
        break
      case 'Enter':
        textareaRef.blur()
        e.preventDefault()
        break
      case 'Tab':
        textareaRef.blur()
        break
      default:
        break
    }
  }

  const { size, value, minWidth = 80, minHeight = 40, zIndex } = props

  return (
    <Textarea
      ref={setTextareaRef}
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
