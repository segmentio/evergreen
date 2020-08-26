import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { Text } from '../../typography'
import { CaretDownIcon } from '../../icons'
import { useTheme } from '../../theme'
import useButtonAppearance from '../../theme/src/hooks/useButtonAppearance'

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
      id,
      name,
      height = 32,
      children,
      defaultValue,
      disabled,
      onChange,
      value,
      required,
      autoFocus,
      isInvalid = false,
      appearance = 'default',
      ...restProps
    } = props

    const theme = useTheme()
    const { tokens } = theme
    const themedClassName = useButtonAppearance(appearance)
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
      >
        <Text
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
          aria-invalid={String(isInvalid)}
          size={300}
          borderRadius={tokens.borderRadius}
          textTransform="default"
          paddingLeft={Math.round(height / 3.2)}
          // Provide enough space for auto-sizing select including the icon
          paddingRight={iconMargin * 2 + iconSize}
        >
          {children}
        </Text>
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
