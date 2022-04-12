/**
 * @overview TagInput accepts multiple values that can be individually removed
 */

import React, { memo, forwardRef, useState } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Autocomplete } from '../../autocomplete'
import { Button } from '../../buttons'
import { useId, useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale, minorScale } from '../../scales'
import { TextInput } from '../../text-input'
import { TextOwnProps } from '../../typography/src/Text'
import Tag from './Tag'

export interface TagInputOwnProps {
  addOnBlur?: boolean
  autocompleteItems?: Array<string>
  className?: string
  disabled?: boolean
  isInvalid?: boolean
  height?: number
  inputProps?: PolymorphicBoxProps<'input', TextOwnProps>
  inputRef?: React.Ref<HTMLInputElement>
  onAdd?: (values: string[]) => void | false
  onBlur?: (event: React.FocusEvent) => void
  onChange?: (values: string[]) => void | false
  onFocus?: (event: React.FocusEvent) => void
  onInputChange?: (event: React.ChangeEvent) => void
  onRemove?: (value: string | React.ReactNode, index: number) => void
  separator?: string
  tagSubmitKey?: 'enter' | 'space'
  tagProps?: any
  values?: string[]
}

export type TagInputProps = PolymorphicBoxProps<'div', TagInputOwnProps>

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

const TagInput: React.FC<TagInputProps> = memo(
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
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const id = useId('TagInput')

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{}'.
    const inputId = inputProps && inputProps.id ? inputProps.id : id
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
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues))
      }

      if (shouldClearInput !== false) {
        setInputValue('')
      }
    }

    const removeTagAtIndex = (index: number) => {
      safeInvoke(onRemove, values[index], index)

      // Remove item at index as a new array
      const newValues = values.filter((_value: any, i: number) => i !== index)
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { selectionEnd, value } = event.target as HTMLInputElement
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
        <Box flexGrow={1} display="inline-block">
          <Autocomplete
            onChange={changedItem => {
              addTags(changedItem)
              setInputValue('')
            }}
            items={hasAutocomplete ? autocompleteItems : []}
            id={inputId}
            selectedItem=""
            inputValue={inputValue}
          >
            {autocompleteProps => {
              const {
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'closeMenu' does not exist on type '{ tog... Remove this comment to see the full error message
                closeMenu,
                getInputProps,
                getRef: autocompleteGetRef,
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'getToggleButtonProps' does not exist on ... Remove this comment to see the full error message
                getToggleButtonProps,
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'highlightedIndex' does not exist on type... Remove this comment to see the full error message
                highlightedIndex
              } = autocompleteProps

              const {
                onBlur: autocompleteOnBlur,
                onChange: autocompleteOnChange,
                onKeyDown: autocompleteKeyDown,
                ...autocompleteRestProps
              } = getInputProps()

              const handleAutocompleteKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
                autocompleteKeyDown(event)
                if (event.key === 'Backspace' || !(highlightedIndex > -1)) {
                  handleKeyDown(event)
                  if (event.key === GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]) {
                    closeMenu()
                    setInputValue('')
                  }
                }
                if (event.key === 'Backspace' && (event.target as HTMLInputElement).selectionEnd === 0) {
                  closeMenu()
                }
              }

              return (
                <>
                  <TextInput
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '"none"' is not assignable to type 'TextInput... Remove this comment to see the full error message
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
                      // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                      autocompleteGetRef(textInputRef)
                      if (inputRef instanceof Function) {
                        inputRef(textInputRef)
                      } else if (inputRef) {
                        // @ts-expect-error ts-migrate(2540) FIXME: Cannot assign to 'current' because it is a read-on... Remove this comment to see the full error message
                        inputRef.current = textInputRef
                      }
                    }}
                    onBlur={e => {
                      autocompleteOnBlur(e)
                      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onBlur' does not exist on type '{}'.
                      safeInvoke(inputProps.onBlur, e)
                    }}
                    onFocus={e => {
                      handleInputFocus(e)
                      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onFocus' does not exist on type '{}'.
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
                </>
              )
            }}
          </Autocomplete>
        </Box>
      </Box>
    )
  })
)

export default TagInput
