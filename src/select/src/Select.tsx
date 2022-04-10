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

const Select = memo(
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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Select',
      { appearance, size: restProps.size || 'medium' },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ textTransform: string; WebkitA... Remove this comment to see the full error message
      internalStyles
    )

    const height = heightProp || boxProps.height

    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}

    const iconSize = getIconSizeForSelect(height)
    const iconMargin = height >= 36 ? 12 : 8

    return (
      <Box
        ref={ref}
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
          className={themedClassName}
          id={id}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          required={required}
          autoFocus={autoFocus}
          disabled={disabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'boolean |... Remove this comment to see the full error message
          aria-invalid={String(isInvalid)}
          paddingLeft={Math.round(height / 3.2)}
          paddingRight={iconMargin * 2 + iconSize}
          {...boxProps}
          height="100%"
        >
          {children}
        </Box>
        <CaretDownIcon
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          color="default"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          size={iconSize}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          position="absolute"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          top="50%"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          marginTop={-iconSize / 2}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          right={iconMargin}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          pointerEvents="none"
        />
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
