/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React, { memo, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import cx from 'classnames'
import { Text } from '../../typography'
import { useTheme } from '../../theme'
import { majorScale } from '../../scales'
import safeInvoke from '../../lib/safe-invoke'
import { useId } from '../../hooks'
import Tag from './Tag'

const GET_KEY_FOR_TAG_DELIMITER = {
  enter: 'Enter',
  space: ' '
}

const emptyProps = {}
const emptyArray = []

const TagInput = memo(
  forwardRef(function TagInput(props, ref) {
    const {
      addOnBlur = false,
      disabled = false,
      height = 32,
      separator = /[,\n\r]/,
      values = emptyArray,
      tagSubmitKey = 'enter',
      tagProps = emptyProps,
      onAdd,
      onChange,
      onRemove,
      onBlur,
      onFocus,
      onInputChange,
      className,
      inputProps = {},
      inputRef,
      ...rest
    } = props
    const theme = useTheme()

    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const id = useId('TagInput')

    const getValues = (inputValue = '') =>
      separator
        ? inputValue
            .split(separator)
            .map(v => v.trim())
            .filter(v => v.length > 0)
        : [inputValue]

    const addTags = (value = '') => {
      const newValues = getValues(value)
      let shouldClearInput = safeInvoke(onAdd, newValues)

      if (typeof onChange === 'function') {
        shouldClearInput =
          shouldClearInput || onChange(values.concat(newValues))
      }

      if (shouldClearInput !== false) {
        setInputValue('')
      }
    }

    const removeTagAtIndex = index => {
      safeInvoke(onRemove, values[index], index)

      // Remove item at index as a new array
      const newValues = values.filter((_, i) => i !== index)
      safeInvoke(onChange, newValues)
    }

    const handleBackspaceToRemove = () => {
      removeTagAtIndex(values.length - 1)
    }

    const handleBlur = event => {
      const container = event.target

      requestAnimationFrame(() => {
        if (!container.contains(document.activeElement)) {
          if (addOnBlur && inputValue) {
            addTags(inputValue)
          }

          setIsFocused(false)
        }
      })

      safeInvoke(onBlur, event)
    }

    const handleInputChange = event => {
      setInputValue(event.target.value)
      safeInvoke(onInputChange, event)
    }

    const handleInputFocus = event => {
      setIsFocused(true)
      safeInvoke(onFocus, event)
    }

    const handleKeyDown = event => {
      const { selectionEnd, value } = event.target
      const key = GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]

      if (event.key === key) {
        event.preventDefault()
        addTags(value)
      } else if (event.key === 'Backspace' && selectionEnd === 0) {
        handleBackspaceToRemove(event)
      }
    }

    const handleRemoveTag = event => {
      // Using data attribute to simplify callback logic -- one handler for all children
      const index = Number(
        event.currentTarget.parentElement.getAttribute('data-tag-index')
      )
      removeTagAtIndex(index)
    }

    const maybeRenderTag = (tag, index) => {
      if (!tag) {
        return null
      }

      const propsForElement = safeInvoke(tagProps, tag, index) || tagProps

      return (
        <Tag
          key={`${tag}:${index}`}
          data-tag-index={index}
          marginRight={majorScale(1)}
          marginY="6px"
          onRemove={disabled ? null : handleRemoveTag}
          isRemovable={!disabled}
          {...propsForElement}
        >
          {tag}
        </Tag>
      )
    }

    const themedContainerClassName = theme.getTagInputClassName('default')
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)
    const themedInputClassName = cx(theme.getTextInputClassName('none'), inputProps.className)

    return (
      <Box
        aria-disabled={disabled || undefined}
        aria-activedescendant={isFocused ? id : undefined}
        borderRadius={borderRadius}
        className={cx(themedContainerClassName, className)}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        paddingY="2px"
        ref={ref}
        {...rest}
        onBlur={handleBlur}
      >
        {values.map(maybeRenderTag)}
        <Text
          is="input"
          id={id}
          color={disabled ? 'muted' : undefined}
          disabled={disabled}
          flexGrow="1"
          height={height - 4}
          size={textSize}
          type="text"
          value={inputValue}
          {...inputProps}
          className={themedInputClassName}
          ref={inputRef}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </Box>
    )
  })
)

TagInput.propTypes = {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: PropTypes.bool,
  /** The class name to apply to the container component. */
  className: PropTypes.string,
  /** Whether or not the input should be disabled. */
  disabled: PropTypes.bool,
  /** The vertical size of the input */
  height: PropTypes.number,
  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: PropTypes.object,
  /**
   * Ref handler for the input element.
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
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: PropTypes.func,
  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: PropTypes.func,
  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: PropTypes.func,
  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
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
  /** Key to press in order to submit a new tag while typing.  */
  tagSubmitKey: PropTypes.oneOf(['enter', 'space']),
  /** Controlled tag values. Each value is rendered inside a tag. */
  values: PropTypes.arrayOf(PropTypes.node)
}

export default TagInput
