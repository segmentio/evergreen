import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { DefaultAppearance } from '../../types'
import { Text } from '../../typography'

export interface RadioOwnProps {
  /**
   * The id attribute of the radio.
   */
  id?: string
  /**
   * The name attribute of the radio.
   */
  name?: string
  /**
   * Label of the radio.
   */
  label?: React.ReactNode
  /**
   * The value attribute of the radio.
   */
  value?: string
  /**
   * When true, the radio is disabled.
   */
  disabled?: boolean
  /**
   * When true, the radio is checked.
   */
  checked?: boolean
  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size?: 12 | 16 | number
  /**
   * When true, the radio get the required attribute.
   */
  isRequired?: boolean
  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid?: boolean
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance?: DefaultAppearance
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export type RadioProps = PolymorphicBoxProps<'label', RadioOwnProps>

// @ts-expect-error ts-migrate(2339) FIXME: Property 'fill' does not exist on type '{ children... Remove this comment to see the full error message
const CircleIcon = memo(function CircleIcon({ fill = 'currentColor', size, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
      <circle fill={fill} cx="5" cy="5" r="5" />
    </svg>
  )
})

const noop = () => {}

const pseudoSelectors = {
  _base: '& + div',
  _disabled: '&[disabled] + div',
  _hover: '&:not([disabled]):hover + div',
  _focus: '&:not([disabled]):focus + div',
  _active: '&:not([disabled]):active + div',
  _checked: '&:checked + div, &[type=checkbox]:indeterminate + div',
  _checkedHover: '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div',
  _checkedDisabled: '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div'
}

const internalStyles = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  opacity: '0',

  [pseudoSelectors._base]: {
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  }
}

const Radio: React.FC<RadioProps> = memo(
  forwardRef(function Radio(props, ref) {
    const {
      id,
      name,
      label,
      disabled,
      isInvalid = false,
      checked,
      onChange = noop,
      value,
      size = 12,
      isRequired = false,
      appearance = 'default',
      ...rest
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Radio',
      { appearance },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ [x: string]: string | { Webkit... Remove this comment to see the full error message
      internalStyles
    )

    return (
      <Box
        is="label"
        ref={ref}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        position="relative"
        display="flex"
        marginY={size === 12 ? 8 : 12}
        {...rest}
      >
        <Box
          is="input"
          className={themedClassName}
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={isInvalid}
          {...boxProps}
          required={isRequired}
        />
        <Box
          boxSizing="border-box"
          borderRadius={9999}
          display="flex"
          flex="none"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
          width={size}
          height={size}
        >
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ size: number; }' is not assignable to type... Remove this comment to see the full error message */}
          <CircleIcon size={size / 2} />
        </Box>
        {label && (
          <Text marginLeft={size === 12 ? 8 : 10} size={size === 12 ? 300 : 400} color={disabled ? 'muted' : 'default'}>
            {label}
          </Text>
        )}
      </Box>
    )
  })
)

export default Radio
