import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'

export interface SelectOwnProps {
  /**
   * The initial value of an uncontrolled select
   */
  defaultValue?: string | number | string[]
  /**
   * The value of the select.
   */
  value?: string | number | string[]
  /**
   * Whether or not the field is disabled
   */
  disabled?: boolean
  /**
   * When true, the select is required.
   */
  required?: boolean
  /**
   * When true, the select should auto focus.
   */
  autoFocus?: boolean
  /**
   * When true, the select is invalid.
   */
  isInvalid?: boolean
  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance?: string
  name?: string
  /**
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Function called when value changes.
   */
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void
}

export type SelectProps = PolymorphicBoxProps<'div', SelectOwnProps>

const internalStyles = {
  textTransform: 'default',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':-moz-focusring': {
    color: 'transparent',
    textShadow: '0 0 0 #000'
  }
}

const pseudoSelectors = {
  _disabled: '[disabled]',
  _invalid: '&[aria-invalid="true"]',
  _hover: '&:not([disabled]):hover',
  _focus: '&:not([disabled]):focus',
  _active: '&:not([disabled]):active'
}

const getIconSizeForSelect = (height: any) => {
  if (height <= 28) return 12
  if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const Select: React.FC<SelectProps> = memo(
  forwardRef(function Select(props, ref) {
    const {
      appearance = 'default',
      autoFocus,
      children,
      defaultValue,
      disabled,
      height: heightProp,
      id,
      isInvalid = false,
      name,
      onChange,
      required,
      value,
      ...restProps
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Select',
      { appearance, size: restProps.size || 'medium' },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ textTransform: string; WebkitA... Remove this comment to see the full error message
      internalStyles
    )

    const height = (heightProp || boxProps.height) as number

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{ alignC... Remove this comment to see the full error message
    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}

    const iconSize = getIconSizeForSelect(height)
    const iconMargin = height >= 36 ? 12 : 8

    return (
      <Box
        display="inline-flex"
        flex={1}
        position="relative"
        width="auto"
        height={height}
        {...restProps}
        {...textProps}
      >
        <Box
          is="select"
          ref={ref}
          className={themedClassName}
          id={id}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          required={required}
          autoFocus={autoFocus}
          disabled={disabled}
          aria-invalid={isInvalid}
          paddingLeft={Math.round(height / 3.2)}
          paddingRight={iconMargin * 2 + iconSize}
          {...boxProps}
          height="100%"
        >
          {children}
        </Box>
        <CaretDownIcon
          color="default"
          size={iconSize}
          position="absolute"
          top="50%"
          marginTop={-iconSize / 2}
          right={iconMargin}
          pointerEvents="none"
        />
      </Box>
    )
  })
)

export default Select
