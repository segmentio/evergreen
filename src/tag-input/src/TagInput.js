/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import cx from 'classnames'
import { Text } from '../../typography'
import { withTheme } from '../../theme'
import { majorScale } from '../../scales'
import safeInvoke from '../../lib/safe-invoke'
import Tag from './Tag'

let inputId = 1

class TagInput extends React.Component {
  static propTypes = {
    /** Whether or not the inputValue should be added to the tags when the input blurs. */
    addOnBlur: PropTypes.bool,
    /** The class name to apply to the container component. */
    className: PropTypes.string,
    /** Whether or not the input should be disabled. */
    disabled: PropTypes.bool,
    /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
    inputProps: PropTypes.object,
    /**
     * Ref handler for the <input> element.
     * (input: HTMLInputElement | null) => void
     */
    inputRef: PropTypes.func,
    /**
     * Callback invoked when new tags are added.
     * Returning `false` will prevent clearing the input.
     * (values: Array) => void | false
     */
    onAdd: PropTypes.func,
    /**
     * Callback invoked when the tag values change.
     * Returning `false` will prevent clearing the input.
     * (values: Array) => void | false
     */
    onChange: PropTypes.func,
    /**
     * Callback invoked when the value of the <input> is changed. Shorthand for `inputProps={{ onChange }}`.
     * (event) => void
     */
    onInputChange: PropTypes.func,
    /**
     * Callback invoked when a tag is removed.
     * Receives value and index of removed tag.
     * (value: string | node, index: number) => void
     */
    onRemove: PropTypes.func,
    /** Value or RegExp to split on pasted text or on enter keypress */
    separator: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(RegExp),
      PropTypes.oneOf([false])
    ]),
    /** Provide props to tag component (actually `Badge`, for now). */
    tagProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Controlled tag values. Each value is rendered inside a tag. */
    values: PropTypes.arrayOf(PropTypes.node)
  }

  static defaultProps = {
    addOnBlur: false,
    disabled: false,
    height: 32,
    separator: /[,\n\r]/,
    values: [],
    tagProps: {}
  }

  state = {
    inputValue: '',
    isFocused: false
  }

  id = `TagInput-${inputId++}`

  addTags = (value = '') => {
    const { onAdd, onChange, values } = this.props
    const newValues = this.getValues(value)
    let shouldClearInput = safeInvoke(onAdd, newValues)

    if (typeof onChange === 'function') {
      shouldClearInput = shouldClearInput || onChange(values.concat(newValues))
    }

    if (shouldClearInput !== false) {
      this.setState({ inputValue: '' })
    }
  }

  getValues = (inputValue = '') => {
    const { separator } = this.props

    return separator
      ? inputValue
          .split(separator)
          .map(v => v.trim())
          .filter(v => v.length > 0)
      : [inputValue]
  }

  handleBackspaceToRemove = () => {
    const { values } = this.props

    // Delete last item in values
    this.removeTagAtIndex(values.length - 1)
  }

  handleBlur = event => {
    const container = event.target

    // Use raf so that the dom has time to update `activeElement`
    requestAnimationFrame(() => {
      if (!container.contains(document.activeElement)) {
        if (this.props.addOnBlur && this.state.inputValue) {
          this.addTags(this.state.inputValue)
        }
        this.setState({ isFocused: false })
      }
    })

    safeInvoke(this.props.onBlur, event)
  }

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value })
    safeInvoke(this.props.onInputChange, event)
  }

  handleInputFocus = event => {
    this.setState({ isFocused: true })
    safeInvoke(this.props.onFocus, event)
  }

  handleKeyDown = event => {
    const { selectionEnd, value } = event.target

    if (event.key === 'Enter') {
      // Prevent Enter keypresses from submitting forms since they have special powers inside TagInput
      event.preventDefault()
      this.addTags(value)
    } else if (event.key === 'Backspace' && selectionEnd === 0) {
      this.handleBackspaceToRemove(event)
    }
  }

  handleRemoveTag = event => {
    // Using data attribute to simplify callback logic -- one handler for all children
    const index = Number(
      event.currentTarget.parentElement.getAttribute('data-tag-index')
    )
    this.removeTagAtIndex(index)
  }

  maybeRenderTag = (tag, index) => {
    if (!tag) {
      return null
    }

    const { disabled, tagProps } = this.props
    const props = safeInvoke(tagProps, tag, index) || tagProps

    return (
      <Tag
        key={`${tag}:${index}`}
        data-tag-index={index}
        marginRight={majorScale(1)}
        marginY="6px"
        onRemove={disabled ? null : this.handleRemoveTag}
        isRemovable={!disabled}
        {...props}
      >
        {tag}
      </Tag>
    )
  }

  removeTagAtIndex = index => {
    const { onChange, onRemove, values } = this.props
    safeInvoke(onRemove, values[index], index)

    // Remove item at index as a new array
    const newValues = values.filter((_, i) => i !== index)
    safeInvoke(onChange, newValues)
  }

  setRef = node => {
    this.input = node
    safeInvoke(this.props.inputRef, node)
  }

  render() {
    const {
      addOnBlur,
      className,
      disabled,
      height,
      inputProps,
      inputRef,
      onAdd,
      onChange,
      onInputChange,
      onRemove,
      separator,
      tagProps,
      theme,
      values,
      ...props
    } = this.props

    const { inputValue, isFocused } = this.state

    const themedContainerClassName = theme.getTagInputClassName('default')
    const themedInputClassName = theme.getTextInputClassName('none')
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <Box
        aria-disabled={disabled || undefined}
        aria-activedescendant={isFocused ? this.id : undefined}
        borderRadius={borderRadius}
        className={cx(themedContainerClassName, className)}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        paddingY="2px"
        {...props}
        onBlur={this.handleBlur}
      >
        {values.map(this.maybeRenderTag)}
        <Text
          is="input"
          id={this.id}
          color={disabled ? 'muted' : undefined}
          disabled={disabled}
          flexGrow="1"
          height={height - 4}
          size={textSize}
          type="text"
          value={inputValue}
          {...inputProps}
          className={themedInputClassName}
          ref={this.setRef}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onKeyDown={this.handleKeyDown}
        />
      </Box>
    )
  }
}

export default withTheme(TagInput)
