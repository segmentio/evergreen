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
    onBlur: PropTypes.func.isRequired,

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
  }

  getTableBodyRef = targetRef => {
    if (this.tableBodyRef) return this.tableBodyRef

    let ref = targetRef
    while (ref) {
      const isTableBody = ref.hasAttribute('data-evergreen-table-body')
      if (isTableBody) {
        return ref
      }
      ref = ref.parentElement
    }

    this.tableBodyRef = ref
    return this.tableBodyRef
  }

  update = () => {
    const { getTargetRef } = this.props
    const targetRef = getTargetRef()
    if (!targetRef) return
    const tableBodyRef = this.getTableBodyRef(targetRef)

    const bounds = tableBodyRef.getBoundingClientRect()

    const { left, top, height, width } = targetRef.getBoundingClientRect()

    this.setState(
      () => {
        return {
          left,
          top: Math.min(Math.max(top, bounds.top), bounds.bottom - height),
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

  handleBlur = () => {
    if (this.textareaRef) this.props.onBlur(this.textareaRef.value)
  }

  handleKeyDown = e => {
    const { key } = e
    if (key === 'Escape' || key === 'Enter') {
      this.textareaRef.blur()
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
        position="absolute"
        defaultValue={value}
      />
    )
  }
}
