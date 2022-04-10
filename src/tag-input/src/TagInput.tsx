/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React, { memo, forwardRef, useState } from 'react'
import cx from 'classnames'
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
const emptyArray: any = []

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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const id = useId('TagInput')

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{}'.
    const inputId = inputProps && inputProps.id ? inputProps.id : id
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type 'never'.
    const hasAutocomplete = Array.isArray(autocompleteItems) && autocompleteItems.length > 0

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
            setInputValue('')
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
          marginY={minorScale(1) * 1.5}
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
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ appearance: string; height: nu... Remove this comment to see the full error message
      { appearance: 'default', height },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        aria-disabled={disabled || undefined}
        aria-activedescendant={isFocused ? inputId : undefined}
        aria-invalid={isInvalid}
        className={cx(themedContainerClassName, className)}
        ref={ref}
        onBlur={handleBlur}
        {...boxProps}
        {...rest}
        paddingRight={hasAutocomplete ? majorScale(3) : undefined}
      >
        {values.map(maybeRenderTag)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"1"' is not assignable to type 'number | fal... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"1"' is not assignable to type 'number | fal... Remove this comment to see the full error message
        <Box flexGrow="1" display="inline-block">
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          <Autocomplete
            // @ts-expect-error ts-migrate(2322) FIXME: Type '(changedItem: any) => void' is not assignabl... Remove this comment to see the full error message
            onChange={changedItem => {
              addTags(changedItem)
              setInputValue('')
            }}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'never[]' is not assignable to type 'never'.
            items={hasAutocomplete ? autocompleteItems : []}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            id={inputId}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            selectedItem=""
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            inputValue={inputValue}
          >
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'autocompleteProps' implicitly has an 'a... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'autocompleteProps' implicitly has an 'a... Remove this comment to see the full error message
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

              // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
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
                <>
                  <TextInput
                    appearance="none"
                    disabled={disabled}
                    height={height - 4}
                    width="100%"
                    type="text"
                    {...inputProps}
                    {...autocompleteRestProps}
                    value={inputValue}
                    id={inputId}
                    ref={textInputRef => {
                      autocompleteGetRef(textInputRef)
                      // @ts-expect-error ts-migrate(2358) FIXME: The left-hand side of an 'instanceof' expression m... Remove this comment to see the full error message
                      if (inputRef instanceof Function) {
                        // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                        inputRef(textInputRef)
                      } else if (inputRef) {
                        // @ts-expect-error ts-migrate(2339) FIXME: Property 'current' does not exist on type 'never'.
                        inputRef.current = textInputRef
                      }
                    }}
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
                    onBlur={e => {
                      autocompleteOnBlur(e)
                      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onBlur' does not exist on type '{}'.
                      safeInvoke(inputProps.onBlur, e)
                    }}
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
                    onFocus={e => {
                      handleInputFocus(e)
                      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onFocus' does not exist on type '{}'.
                      safeInvoke(inputProps.onFocus, e)
                    }}
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
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
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
                      <CaretDownIcon color="muted" />
                    </Button>
                  )}
                </>
              )
            }}
          </Autocomplete>
        </Box>
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
