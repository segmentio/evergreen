import React from 'react'
import PropTypes from 'prop-types'
import { Textarea } from '../../textarea'

export default class EditableCellField extends React.PureComponent {
  static propTypes = {
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
    minWidth: PropTypes.number.isRequired,

    /**
     * Min height of the textarea.
     * The textarea can never be smaller than the cell.
     */
    minHeight: PropTypes.number.isRequired,

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

  static defaultProps = {
    minWidth: 80,
    minHeight: 40
  }

  state = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }

  componentDidMount() {
    this.update()

    requestAnimationFrame(() => {
      this.textareaRef.focus()
    })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.latestAnimationFrame)
    this.props.onCancel()
  }

  getTableBodyRef = targetRef => {
    if (this.tableBodyRef) return this.tableBodyRef

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

    this.tableBodyRef = ref
    return this.tableBodyRef
  }

  update = () => {
    const { getTargetRef } = this.props
    const targetRef = getTargetRef()
    if (!targetRef) return
    const tableBodyRef = this.getTableBodyRef(targetRef)

    const {
      left,
      top: targetTop,
      height,
      width
    } = targetRef.getBoundingClientRect()

    let top
    if (tableBodyRef) {
      const bounds = tableBodyRef.getBoundingClientRect()
      top = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - height)
    } else {
      top = targetTop
    }

    this.setState(
      () => {
        return {
          left,
          top,
          height,
          width
        }
      },
      () => {
        this.latestAnimationFrame = requestAnimationFrame(() => {
          this.update()
        })
      }
    )
  }

  onRef = ref => {
    this.textareaRef = ref
  }

  handleFocus = e => {
    e.target.selectionStart = e.target.value.length
  }

  handleBlur = () => {
    if (this.textareaRef) this.props.onChangeComplete(this.textareaRef.value)
  }

  handleKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        this.props.onCancel()
        this.textareaRef.blur()
        break
      case 'Enter':
        this.textareaRef.blur()
        e.preventDefault()
        break
      case 'Tab':
        this.textareaRef.blur()
        break
      default:
        break
    }
  }

  render() {
    const { size, value, minWidth, minHeight, zIndex } = this.props
    const { left, top, height, width } = this.state

    return (
      <Textarea
        innerRef={this.onRef}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
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
  }
}
