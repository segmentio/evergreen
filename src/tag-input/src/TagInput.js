/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React, { memo, forwardRef, useState } from 'react'
import omit from 'lodash.omit'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Autocomplete } from '../../autocomplete'
import { Button } from '../../buttons'
import { useId, useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale, minorScale } from '../../scales'
import { TextInput } from '../../text-input'
import Tag from './Tag'

const GET_KEY_FOR_TAG_DELIMITER = {
  enter: 'Enter',
  space: ' '
}

const emptyProps = {}
const emptyArray = []

const internalStyles = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap',
  position: 'relative'
}

const pseudoSelectors = {
  _focused: '&[aria-activedescendant]',
  _disabled: '&[aria-disabled="true"]',
  _invalid: '&[aria-invalid="true"]:not(:focus)'
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
      isInvalid,
      autocompleteItems,
      ...rest
    } = props
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const id = useId('TagInput')
    const autocompleteId = `TagInputAutocomplete-${values.length}`

    const inputId = inputProps && inputProps.id ? inputProps.id : id
    const hasAutocomplete = Array.isArray(autocompleteItems) && autocompleteItems.length > 0

    const getValues = (inputValue = '') => {
      inputValue = inputValue || ''

      return separator
        ? inputValue
            .split(separator)
            .map(v => v.trim())
            .filter(v => v.length > 0)
        : [inputValue]
    }

    const addTags = (value = '') => {
      const newValues = getValues(value)
      let shouldClearInput = safeInvoke(onAdd, newValues)

      if (typeof onChange === 'function') {
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues))
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
            setInputValue('')
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
      const index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'))
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
          marginX={majorScale(1)}
          marginY={minorScale(1) * 1.5}
          onRemove={disabled ? null : handleRemoveTag}
          isRemovable={!disabled}
          {...propsForElement}
        >
          {tag}
        </Tag>
      )
    }

    const themedProps = useStyleConfig('TagInput', { appearance: 'default', height }, pseudoSelectors, internalStyles)

    return (
      <Box
        aria-disabled={disabled || undefined}
        aria-activedescendant={isFocused ? inputId : undefined}
        aria-invalid={isInvalid}
        className={className}
        ref={ref}
        onBlur={handleBlur}
        {...themedProps}
        {...rest}
        paddingRight={hasAutocomplete ? majorScale(3) : undefined}
      >
        <Box flexGrow="1" display="inline-block">
          <Autocomplete
            onChange={changedItem => {
              addTags(changedItem)
              setInputValue('')
            }}
            items={hasAutocomplete ? autocompleteItems : []}
            id={autocompleteId}
            selectedItem=""
            inputValue={inputValue}
          >
            {autocompleteProps => {
              const {
                closeMenu,
                getInputProps,
                getRef: autocompleteGetRef,
                getToggleButtonProps,
                highlightedIndex
              } = autocompleteProps

              const {
                onBlur: autocompleteOnBlur,
                onChange: autocompleteOnChange,
                onKeyDown: autocompleteKeyDown,
                ...autocompleteRestProps
              } = getInputProps()

              const handleAutocompleteKeydown = e => {
                autocompleteKeyDown(e)
                if (e.key === 'Backspace' || !(highlightedIndex > -1)) {
                  handleKeyDown(e)
                  if (e.key === GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]) {
                    closeMenu()
                    setInputValue('')
                  }
                }
                if (e.key === 'Backspace' && e.target.selectionEnd === 0) {
                  closeMenu()
                }
              }

              return (
                <Box
                  display="flex"
                  ref={boxInputRef => {
                    autocompleteGetRef(boxInputRef)
                  }}
                  flexWrap="wrap"
                  width={inputProps.width}
                >
                  {values.map(maybeRenderTag)}

                  <TextInput
                    appearance="none"
                    disabled={disabled}
                    height={height - 4}
                    flexGrow="1"
                    type="text"
                    {...omit(inputProps, ['width'])}
                    {...autocompleteRestProps}
                    value={inputValue}
                    id={inputId}
                    ref={textInputRef => {
                      if (inputRef instanceof Function) {
                        inputRef(textInputRef)
                      } else if (inputRef) {
                        inputRef.current = textInputRef
                      }
                    }}
                    onBlur={e => {
                      autocompleteOnBlur(e)
                      safeInvoke(inputProps.onBlur, e)
                    }}
                    onFocus={e => {
                      handleInputFocus(e)
                      safeInvoke(inputProps.onFocus, e)
                    }}
                    onChange={e => {
                      handleInputChange(e)
                      autocompleteOnChange(e)
                    }}
                    onKeyDown={handleAutocompleteKeydown}
                  />
                  {hasAutocomplete && (
                    <Button
                      appearance="none"
                      background="gray100"
                      position="absolute"
                      top={minorScale(1) * 1.5}
                      right={minorScale(1)}
                      height={minorScale(5)}
                      padding={0}
                      width={minorScale(5)}
                      minWidth={minorScale(5)}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={minorScale(1)}
                      cursor={disabled ? undefined : 'pointer'}
                      data-testid="TagInput-autocomplete-toggle"
                      {...getToggleButtonProps()}
                    >
                      <CaretDownIcon color="muted" />
                    </Button>
                  )}
                </Box>
              )
            }}
          </Autocomplete>
        </Box>
      </Box>
    )
  })
)

TagInput.propTypes = {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: PropTypes.bool,
  /** Autocomplete options to show when typing in a new value */
  autocompleteItems: PropTypes.array,
  /** The class name to apply to the container component. */
  className: PropTypes.string,
  /** Whether or not the input should be disabled. */
  disabled: PropTypes.bool,
  /** Whether or not the input is invalid. */
  isInvalid: PropTypes.bool,
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
