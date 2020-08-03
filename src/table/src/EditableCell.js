import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import safeInvoke from '../../lib/safe-invoke'
import TextTableCell from './TextTableCell'
import TableCell from './TableCell'
import EditableCellField from './EditableCellField'

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
    ...rest
  } = props

  let cursor = 'text'

  const [mainRef, setMainRef] = useState()
  const [value, setValue] = useState(children)
  const [isEditing, setIsEditing] = useState(autoFocus)

  const handleDoubleClick = () => {
    if (disabled || !isSelectable) return

    setIsEditing(true)
  }

  const handleKeyDown = e => {
    if (disabled) return
    const { key } = e

    /**
     * When the user presses a character on the keyboard, use that character
     * as the value in the text field.
     */
    if (key === 'Enter' || key === 'Shift') {
      setIsEditing(true)
    } else if (
      key.match(/^[a-z]{0,10}$/) &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey
    ) {
      setIsEditing(true)
      setValue(value + key)
    }
  }

  const handleFieldChangeComplete = value => {
    const { onChange } = rest

    setIsEditing(false)
    setValue(value)

    safeInvoke(onChange, value)

    if (mainRef && isSelectable) {
      mainRef.focus()
    }
  }

  const handleFieldCancel = () => {
    setIsEditing(false)
  }

  const handleClick = () => {
    if (mainRef) mainRef.focus()
  }

  if (disabled) {
    cursor = 'not-allowed'
  } else if (isSelectable) {
    cursor = 'default'
  }

  return (
    <React.Fragment>
      <TextTableCell
        ref={setMainRef}
        isSelectable={isSelectable}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        cursor={cursor}
        textProps={{
          size,
          opacity: disabled || (!children && placeholder) ? 0.5 : 1,
          ...textProps
        }}
        {...rest}
      >
        {children ? children : placeholder}
      </TextTableCell>
      {isEditing && (
        <Portal>
          <Stack>
            {zIndex => (
              <EditableCellField
                zIndex={zIndex}
                getTargetRef={() => mainRef}
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
