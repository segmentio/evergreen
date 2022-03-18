/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React, { memo, forwardRef, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useId, useStyleConfig } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale } from '../../scales'
import { TextInput } from '../../text-input'
import Tag from './Tag'

const GET_KEY_FOR_TAG_DELIMITER = {
  enter: 'Enter',
  space: ' '
}

const emptyProps = {}
const emptyArray: any = []

const internalStyles = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
}

const pseudoSelectors = {
  _focused: '&[aria-activedescendant]',
  _disabled: '&[aria-disabled="true"]'
}

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
      inputProps = emptyProps,
      inputRef,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
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
        // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues))
      }

      if (shouldClearInput !== false) {
        setInputValue('')
      }
    }

    const removeTagAtIndex = (index: any) => {
      safeInvoke(onRemove, values[index], index)

      // Remove item at index as a new array
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter '_' implicitly has an 'any' type.
      const newValues = values.filter((_, i) => i !== index)
      safeInvoke(onChange, newValues)
    }

    const handleBackspaceToRemove = () => {
      removeTagAtIndex(values.length - 1)
    }

    const handleBlur = (event: any) => {
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

    const handleInputChange = (event: any) => {
      setInputValue(event.target.value)
      safeInvoke(onInputChange, event)
    }

    const handleInputFocus = (event: any) => {
      setIsFocused(true)
      safeInvoke(onFocus, event)
    }

    const handleKeyDown = (event: any) => {
      const { selectionEnd, value } = event.target
      const key = GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]

      if (event.key === key) {
        event.preventDefault()
        addTags(value)
      } else if (event.key === 'Backspace' && selectionEnd === 0) {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
        handleBackspaceToRemove(event)
      }
    }

    const handleRemoveTag = (event: any) => {
      // Using data attribute to simplify callback logic -- one handler for all children
      const index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'))
      removeTagAtIndex(index)
    }

    const maybeRenderTag = (tag: any, index: any) => {
      if (!tag) {
        return null
      }

      const propsForElement = safeInvoke(tagProps, tag, index) || tagProps

      return (
        <Tag
          key={`${tag}:${index}`}
          data-tag-index={index}
          marginX={majorScale(1)}
          onRemove={disabled ? null : handleRemoveTag}
          isRemovable={!disabled}
          {...propsForElement}
        >
          {tag}
        </Tag>
      )
    }

    const { className: themedContainerClassName, ...boxProps } = useStyleConfig(
      'TagInput',
      { appearance: 'default', height },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        aria-disabled={disabled || undefined}
        aria-activedescendant={isFocused ? id : undefined}
        className={cx(themedContainerClassName, className)}
        ref={ref}
        onBlur={handleBlur}
        {...boxProps}
        {...rest}
      >
        {values.map(maybeRenderTag)}
        <TextInput
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          appearance="none"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          id={id}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
          disabled={disabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          flexGrow="1"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={height - 4}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          width="auto"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          type="text"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          value={inputValue}
          {...inputProps}
          ref={inputRef}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(event: any) => void' is not assignable to t... Remove this comment to see the full error message
          onChange={handleInputChange}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(event: any) => void' is not assignable to t... Remove this comment to see the full error message
          onFocus={handleInputFocus}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(event: any) => void' is not assignable to t... Remove this comment to see the full error message
          onKeyDown={handleKeyDown}
        />
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([false])]),
  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /** Key to press in order to submit a new tag while typing.  */
  tagSubmitKey: PropTypes.oneOf(['enter', 'space']),
  /** Controlled tag values. Each value is rendered inside a tag. */
  values: PropTypes.arrayOf(PropTypes.node)
}

export default TagInput