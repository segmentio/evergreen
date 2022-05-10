import React, { memo, useState, useCallback } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { Autocomplete } from '../../autocomplete'
import { AutocompleteProps } from '../../autocomplete/src/Autocomplete'
import { IconButton } from '../../buttons'
import { IconButtonOwnProps } from '../../buttons/src/IconButton'
import { Group } from '../../group'
import { CaretDownIcon } from '../../icons'
import { TextInput } from '../../text-input'
import { TextInputOwnProps } from '../../text-input/src/TextInput'

export interface ComboboxOwnProps {
  /**
   * The options to show in the menu.
   */
  items: AutocompleteProps['items']
  /**
   * The selected item when controlled.
   */
  selectedItem?: AutocompleteProps['selectedItem']
  /**
   * Function called when value changes.
   */
  onChange?: AutocompleteProps['onChange']
  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps?: AutocompleteProps
  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus?: boolean
  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem?: any
  /**
   * The placeholder text when there is no value present.
   */
  placeholder?: string
  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString?: AutocompleteProps['itemToString']
  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps?: TextInputOwnProps
  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps?: IconButtonOwnProps
  /**
   * Makes the input element disabled.
   */
  disabled?: boolean
  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading?: boolean
  /**
   * Size of the component
   */
  size?: 'small' | 'medium' | 'large'
}

export type ComboboxProps = PolymorphicBoxProps<'div', ComboboxOwnProps>

const Combobox: React.FC<ComboboxProps> = memo(function Combobox(props) {
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
      // @ts-expect-error ts-migrate(2322) FIXME: Type '((selectedItem: any) => void) | undefined' i... Remove this comment to see the full error message
      onChange={onChange}
      isFilterDisabled={isOpenedByButton}
      {...autocompleteProps}
      onStateChange={handleStateChange}
    >
      {({ clearSelection, getInputProps, getRef, getToggleButtonProps, inputValue, isShown, openMenu }: any) => (
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
              onChange: (e: any) => {
                if (isOpenedByButton) {
                  setIsOpenedByButton(false)
                }

                if (e.target.value.trim() === '') {
                  // Prevent the selected item from sticking around
                  clearSelection()
                }
              },
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
              },
            })}
          />
        </Group>
      )}
    </Autocomplete>
  )
})

export default Combobox
