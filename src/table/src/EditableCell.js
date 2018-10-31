import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../../theme'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import safeInvoke from '../../lib/safe-invoke'
import TextTableCell from './TextTableCell'
import TableCell from './TableCell'
import EditableCellField from './EditableCellField'

class EditableCell extends React.PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes,

    /*
    * Makes the TableCell focusable.
    * Will add tabIndex={-1 || this.props.tabIndex}.
    */
    isSelectable: PropTypes.bool.isRequired,

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
    size: PropTypes.oneOf([300, 400]).isRequired,

    /**
     * This is the value of the cell.
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Function called when value changes. (value: string) => void.
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    size: 300,
    isSelectable: true
  }

  static getDerivedStateFromProps(props, state) {
    if (props.children !== state.value) {
      return {
        value: props.children
      }
    }
    return null
  }

  state = {
    value: this.props.children
  }

  onMainRef = ref => {
    this.mainRef = ref
  }

  onOverlayRef = ref => {
    this.overlayRef = ref
  }

  handleDoubleClick = () => {
    if (this.props.disabled || !this.props.isSelectable) return

    this.setState({
      isEditing: true
    })
  }

  handleKeyDown = e => {
    if (this.props.disabled) return
    const { key } = e

    /**
     * When the user presses a character on the keyboard, use that character
     * as the value in the text field.
     */
    if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      this.setState({
        isEditing: true,
        value: key
      })
    } else if (key === 'Enter') {
      this.setState({
        isEditing: true
      })
    }
  }

  handleFieldChangeComplete = value => {
    const { onChange, isSelectable } = this.props
    const currentValue = this.state.value

    this.setState({
      isEditing: false,
      value
    })

    if (currentValue !== value) {
      safeInvoke(onChange, value)
    }

    if (this.mainRef && isSelectable) {
      this.mainRef.focus()
    }
  }

  handleFieldCancel = () => {
    this.setState({ isEditing: false })
  }

  handleClick = () => {
    this.mainRef.focus()
  }

  render() {
    const {
      children,
      theme,
      size,
      disabled,
      placeholder,
      isSelectable,
      textProps = {},
      ...props
    } = this.props
    const { isEditing, value } = this.state

    return (
      <React.Fragment>
        <TextTableCell
          innerRef={this.onMainRef}
          isSelectable={isSelectable && !disabled}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
          onKeyDown={this.handleKeyDown}
          cursor={disabled ? 'not-allowed' : isSelectable ? 'default' : 'text'}
          textProps={{
            size,
            opacity: disabled || (!children && placeholder) ? 0.5 : 1,
            ...textProps
          }}
          {...props}
        >
          {children ? children : placeholder}
        </TextTableCell>
        {isEditing && (
          <Portal>
            <Stack>
              {zIndex => (
                <EditableCellField
                  zIndex={zIndex}
                  getTargetRef={() => this.mainRef}
                  value={value}
                  onEscape={this.handleFieldEscape}
                  onChangeComplete={this.handleFieldChangeComplete}
                  onCancel={this.handleFieldCancel}
                  size={size}
                />
              )}
            </Stack>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}

export default withTheme(EditableCell)
