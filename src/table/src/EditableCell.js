import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../../theme'
import { Portal } from '../../portal'
import TextTableCell from './TextTableCell'
import TableCell from './TableCell'
import EditableCellField from './EditableCellField'

class EditableCell extends React.PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes,

    /**
     * The size used for the TextTableCell and Textarea.
     */
    size: PropTypes.oneOf([300, 400]).isRequired,

    /**
     * This is the value of the cell.
     */
    children: PropTypes.string,

    /**
     * Function called when value changes. (value: string) => void.
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    size: 300
  }

  state = {
    isEditing: false,
    value: this.props.children
  }

  onMainRef = ref => {
    this.mainRef = ref
  }

  onOverlayRef = ref => {
    this.overlayRef = ref
  }

  handleDoubleClick = () => {
    this.setState({
      isEditing: true
    })
  }

  handleKeyDown = e => {
    const { key } = e
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

  handleFieldBlur = value => {
    const { onChange } = this.props
    const currentValue = this.state.value

    this.setState({
      isEditing: false,
      // Make edit instantious. Deal with errors up the tree.
      value
    })

    if (this.mainRef) this.mainRef.focus()

    if (currentValue !== value && typeof onChange === 'function') {
      onChange(value)
    }
  }

  handleFieldCancel = () => {
    this.setState({ isEditing: false })
  }

  handleClick = () => {
    this.mainRef.focus()
  }

  render() {
    const { children, theme, size, ...props } = this.props
    const { isEditing } = this.state

    return (
      <React.Fragment>
        <TextTableCell
          isSelectable
          innerRef={this.onMainRef}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
          onKeyDown={this.handleKeyDown}
          size={size}
          cursor="default"
          textProps={{
            size
          }}
          {...props}
        >
          {children}
        </TextTableCell>
        {isEditing && (
          <Portal>
            <EditableCellField
              getTargetRef={() => this.mainRef}
              value={children}
              onEscape={this.handleFieldEscape}
              onBlur={this.handleFieldBlur}
              onCancel={this.handleFieldCancel}
              size={size}
            />
          </Portal>
        )}
      </React.Fragment>
    )
  }
}

export default withTheme(EditableCell)
