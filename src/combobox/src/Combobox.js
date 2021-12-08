import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { Autocomplete } from '../../autocomplete'
import { IconButton } from '../../buttons'
import { Group } from '../../group'
import { CaretDownIcon } from '../../icons'
import { TextInput } from '../../text-input'

const Combobox = memo(function Combobox(props) {
  const {
    autocompleteProps,
    buttonProps,
    height,
    initialSelectedItem,
    inputProps,
    isLoading = false,
    itemToString,
    items,
    onChange,
    openOnFocus = false,
    placeholder,
    selectedItem,
    size = 'medium',
    width = 240,
    ...rest
  } = props

  const disabled = props.disabled || isLoading

  const [isOpenedByButton, setIsOpenedByButton] = useState(false)

  const handleStateChange = useCallback(
    (changes, stateAndHelpers) => {
      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
        if (!changes.isOpen) {
          setIsOpenedByButton(false)
        }
      }

      if (autocompleteProps && typeof autocompleteProps.onStateChange === 'function') {
        autocompleteProps.onStateChange(changes, stateAndHelpers)
      }
    },
    [autocompleteProps]
  )

  return (
    <Autocomplete
      items={items}
      selectedItem={selectedItem}
      initialSelectedItem={initialSelectedItem}
      itemToString={itemToString}
      onChange={onChange}
      isFilterDisabled={isOpenedByButton}
      {...autocompleteProps}
      onStateChange={handleStateChange}
    >
      {({ clearSelection, getInputProps, getRef, getToggleButtonProps, inputValue, isShown, openMenu }) => (
        <Group ref={getRef} size={size} width={width} {...rest}>
          <TextInput
            width={0}
            flex={1}
            height={height}
            value={inputValue}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            disabled={disabled}
            {...getInputProps({
              ...inputProps,
              placeholder,
              onFocus: () => {
                if (openOnFocus) openMenu()
              },
              onChange: e => {
                if (isOpenedByButton) {
                  setIsOpenedByButton(false)
                }

                if (e.target.value.trim() === '') {
                  // Prevent the selected item from sticking around
                  clearSelection()
                }
              }
            })}
          />
          <IconButton
            color="muted"
            icon={isLoading ? undefined : CaretDownIcon}
            appearance="default"
            height={height}
            marginTop={0}
            marginBottom={0}
            marginLeft={-1}
            paddingLeft={isLoading ? 12 : 0}
            paddingRight={0}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            disabled={disabled}
            isLoading={isLoading}
            {...getToggleButtonProps({
              ...buttonProps,
              onClick: () => {
                if (!isShown) {
                  setIsOpenedByButton(true)
                }
              }
            })}
          />
        </Group>
      )}
    </Autocomplete>
  )
})

Combobox.propTypes = {
  /**
   * Implements some APIs from ui-box.
   */
  ...dimensions.propTypes,
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,

  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Combobox
