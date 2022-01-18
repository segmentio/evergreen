import React, { memo, useRef, useState, useMemo, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { useLatest } from '../../hooks'
import { Textarea } from '../../textarea'

function getTableBodyRef(currentRef: any) {
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'minHeight' does not exist on type '{ chi... Remove this comment to see the full error message
  const { minHeight = 40, minWidth = 80, size, value, zIndex } = props

  const latestAnimationFrame = useRef()
  const textareaRef = useRef()
  const tableBodyRef = useRef()
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCancel' does not exist on type 'PropsW... Remove this comment to see the full error message
  const onCancelRef = useLatest(props.onCancel)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'onChangeComplete' does not exist on type... Remove this comment to see the full error message
  const onChangeCompleteRef = useLatest(props.onChangeComplete)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'getTargetRef' does not exist on type 'Pr... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
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
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        textareaRef.current.focus()
      }
    })

    return () => {
      cancelAnimationFrame(requestId)

      if (latestAnimationFrame.current) {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      onChangeCompleteRef.current(textareaRef.current.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyDown = useCallback(e => {
    switch (e.key) {
      case 'Escape':
        onCancelRef.current()
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        if (textareaRef.current) textareaRef.current.blur()
        break
      case 'Enter':
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        if (textareaRef.current) textareaRef.current.blur()
        e.preventDefault()
        break
      case 'Tab':
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
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
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
      onKeyDown={handleKeyDown}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
      onBlur={handleBlur}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
      onFocus={handleFocus}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      appearance="editable-cell"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      size={size}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ left: number; top: number; height: number;... Remove this comment to see the full error message
      style={style}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'never'.
      height={null}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'never'.
      width={null}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'never'.
      minHeight={null}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      position="fixed"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      defaultValue={value}
    />
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
