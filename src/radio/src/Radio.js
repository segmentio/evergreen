import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout, dimensions } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Text } from '../../typography'

const CircleIcon = memo(function CircleIcon({ fill = 'currentColor', size, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
      <circle fill={fill} cx="5" cy="5" r="5" />
    </svg>
  )
})

CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
}

const noop = () => {}

const pseudoSelectors = {
  _base: '& + div',
  _disabled: '&[disabled] + div',
  _hover: '&:not([disabled]):hover + div',
  _focus: '&:not([disabled]):focus + div',
  _active: '&:not([disabled]):active + div',
  _checked: '&:checked + div,&[type=checkbox]:indeterminate + div',
  _checkedHover: '&:not([disabled]):checked:hover + div,&[type=checkbox]:not([disabled]):indeterminate:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div,&[type=checkbox]:not([disabled]):indeterminate:active + div',
  _checkedDisabled: '&[disabled]:checked + div,&[type=checkbox][disabled]:indeterminate + div'
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

  selectors: {
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
}

const Radio = memo(
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

    const themedProps = useStyleConfig('Radio', { appearance }, pseudoSelectors, internalStyles)

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
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={isInvalid}
          {...themedProps}
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

Radio.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * Label of the radio.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the radio is checked.
   */
  checked: PropTypes.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string
}

export default Radio
