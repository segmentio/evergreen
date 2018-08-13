import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../../theme'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
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
    size: PropTypes.oneOf([300, 400]).isRequired,

    /**
     * This is the value of the cell.
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Function called when value changes. (value: string) => void.
     */
    onChange: PropTypes.func,

    /**
     * When a value is passed, this component will be controlled.
     */
    isEditing: PropTypes.bool,

    /**
     * Only called when component is controlled and isSelectable={true}.
     */
    onEditStart: PropTypes.func,

    /**
     * Only called when component is controlled.
     */
    onEditComplete: PropTypes.func
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
    isEditing: false,
    value: this.props.children
  }

  componentWillUnmount() {
    if (this.isControlled() && this.props.isEditing) {
      this.props.onEditComplete()
    }
  }

  /**
   * Return true when component is controlled.
   */
  isControlled = () => {
    const { isEditing } = this.props
    return isEditing !== null && isEditing !== undefined
  }

  onMainRef = ref => {
    this.mainRef = ref
  }

  onOverlayRef = ref => {
    this.overlayRef = ref
  }

  handleDoubleClick = () => {
    if (this.props.disabled || !this.props.isSelectable) return
    if (this.isControlled()) {
      this.props.onEditStart()
    } else {
      this.setState({
        isEditing: true
      })
    }
  }

  handleKeyDown = e => {
    if (this.props.disabled) return
    const { key } = e

    /**
     * When the user presses a character on the keyboard, use that character
     * as the value in the text field.
     */
    if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (this.isControlled()) {
        this.props.onEditStart()
        this.setState({
          value: key
        })
      } else {
        this.setState({
          isEditing: true,
          value: key
        })
      }
    } else if (key === 'Enter') {
      if (this.isControlled()) {
        this.props.onEditStart()
      } else {
        this.setState({
          isEditing: true
        })
      }
    }
  }

  handleFieldBlur = value => {
    const { onChange, onEditComplete, isSelectable } = this.props
    const currentValue = this.state.value

    if (this.isControlled() && typeof onEditComplete === 'function') {
      this.props.onEditComplete(value)

      this.setState({
        value
      })
    } else {
      this.setState({
        isEditing: false,
        value
      })
    }

    if (currentValue !== value && typeof onChange === 'function') {
      onChange(value)
    }

    if (this.mainRef) {
      if (isSelectable) {
        this.mainRef.focus()
      } else {
        const element = this.mainRef.querySelector('button')
        if (element) element.focus()
      }
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
      isEditing: propsIsEditing,
      onEditComplete,
      ...props
    } = this.props
    const { isEditing: stateIsEditing, value } = this.state

    let isEditing
    if (this.isControlled()) {
      // Controlled usage.
      isEditing = propsIsEditing
    } else {
      isEditing = stateIsEditing
    }

    return (
      <React.Fragment>
        <TextTableCell
          isSelectable={isSelectable && !disabled}
          innerRef={this.onMainRef}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
          onKeyDown={this.handleKeyDown}
          size={size}
          cursor={disabled ? 'not-allowed' : 'default'}
          textProps={{
            size,
            opacity: disabled || (!children && placeholder) ? 0.5 : 1
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
                  onBlur={this.handleFieldBlur}
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
