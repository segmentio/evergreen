import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useLatest } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import EditableCellField from './EditableCellField'
import TableCell from './TableCell'
import TextTableCell from './TextTableCell'

const emptyProps = {}

const EditableCell = memo(function EditableCell(props) {
  const {
    children,
    size = 300,
    disabled,
    placeholder,
    isSelectable = true,
    textProps = emptyProps,
    autoFocus = false,
    onChange,
    ...rest
  } = props

  let cursor = 'text'

  const mainRef = useRef(null)
  const [value, setValue] = useState(children)
  const [isEditing, setIsEditing] = useState(autoFocus)
  const onChangeRef = useLatest(onChange)

  useEffect(() => {
    setValue(children)
  }, [children])

  const handleDoubleClick = useCallback(() => {
    if (disabled || !isSelectable) return

    setIsEditing(true)
  }, [disabled, isSelectable])

  const handleKeyDown = useCallback(
    e => {
      if (disabled) return
      const { key } = e

      /**
       * When the user presses a character on the keyboard, use that character
       * as the value in the text field.
       */
      if (key === 'Enter' || key === 'Shift') {
        setIsEditing(true)
      } else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setIsEditing(true)
        setValue(prev => prev + key)
      }
    },
    [disabled]
  )

  const handleFieldChangeComplete = useCallback(
    value => {
      setIsEditing(false)
      setValue(value)

      safeInvoke(onChangeRef.current, value)

      if (mainRef.current && isSelectable) {
        mainRef.current.focus()
      }
    },
    // onChangeRef is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelectable]
  )

  const handleFieldCancel = useCallback(() => {
    setIsEditing(false)
  }, [])

  const handleClick = useCallback(() => {
    if (mainRef.current) {
      mainRef.current.focus()
    }
  }, [])

  const getTargetRef = useCallback(() => mainRef.current, [])

  if (disabled) {
    cursor = 'not-allowed'
  } else if (isSelectable) {
    cursor = 'default'
  }

  const lessOpacity = useMemo(() => disabled || (!value && placeholder), [disabled, value, placeholder])

  const mergedTextProps = useMemo(
    () => ({
      size,
      opacity: lessOpacity ? 0.5 : 1,
      ...textProps
    }),
    [lessOpacity, size, textProps]
  )
  return (
    <React.Fragment>
      <TextTableCell
        ref={mainRef}
        isSelectable={isSelectable}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        cursor={cursor}
        textProps={mergedTextProps}
        {...rest}
      >
        {value || placeholder}
      </TextTableCell>
      {isEditing && (
        <Portal>
          <Stack>
            {zIndex => (
              <EditableCellField
                zIndex={zIndex}
                getTargetRef={getTargetRef}
                value={value}
                onEscape={handleFieldCancel}
                onChangeComplete={handleFieldChangeComplete}
                onCancel={handleFieldCancel}
                size={size}
              />
            )}
          </Stack>
        </Portal>
      )}
    </React.Fragment>
  )
})

EditableCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes,

  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]),

  /**
   * This is the value of the cell.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: PropTypes.func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: PropTypes.bool
}

export default EditableCell
