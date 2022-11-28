import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { CaretDownIcon } from '../../icons'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'

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
  cursor: 'pointer'
}

const pseudoSelectors = {
  _disabled: '[disabled]',
  _invalid: '&[aria-invalid="true"]',
  _hover: '&:not([disabled]):hover',
  _focus: '&:not([disabled]):focus',
  _active: '&:not([disabled]):active'
}

const getIconSizeForSelect = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const Select = memo(
  forwardRef(function Select(props, ref) {
    const {
      appearance = 'default',
      'aria-describedby': ariaDescribedby,
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

    const themedProps = useStyleConfig(
      'Select',
      { appearance, size: restProps.size || 'medium' },
      pseudoSelectors,
      internalStyles
    )

    const height = heightProp || themedProps.height

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
          id={id}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          required={required}
          autoFocus={autoFocus}
          disabled={disabled}
          aria-invalid={String(isInvalid)}
          paddingLeft={Math.round(height / 3.2)}
          paddingRight={iconMargin * 2 + iconSize}
          {...themedProps}
          height="100%"
          aria-describedby={ariaDescribedby}
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

Select.propTypes = {
  /**
   * Composes the dimensions spec from the Box primitive.
   */
  ...dimensions.propTypes,

  /**
   * Composes the spacing spec from the Box primitive.
   */
  ...spacing.propTypes,

  /**
   * Composes the position spec from the Box primitive.
   */
  ...position.propTypes,

  /**
   * Composes the layout spec from the Box primitive.
   */
  ...layout.propTypes,

  /**
   * The id attribute for the select.
   */
  id: PropTypes.string,

  /**
   * The name attribute for the select.
   */
  name: PropTypes.string,

  /**
   * The options that are passed to the select.
   */
  children: PropTypes.node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the select.
   */
  value: PropTypes.any,

  /**
   * When true, the select is required.
   */
  required: PropTypes.bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: PropTypes.bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: PropTypes.string
}

export default Select
