import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { PropsWithTheme, withTheme } from '../../theme'
import { AnyFunction } from '../../types/helper'
import { Text } from '../../typography'

interface IIconProps {
  fill?: string
}

const CheckIcon: React.SFC<IIconProps> = ({
  fill = 'currentColor',
  ...props
}: IIconProps) => (
  <svg width={10} height={7} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

const MinusIcon: React.SFC<IIconProps> = ({
  fill = 'currentColor',
  ...props
}: IIconProps) => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
    />
  </svg>
)

interface IProps extends BoxProps {
  // The id attribute of the checkbox.
  id?: string

  // The id attribute of the radio.
  name?: string

  // Label of the checkbox.
  label?: React.ReactNode

  // The value attribute of the radio.
  value?: string

  // The checked attribute of the radio.
  checked?: boolean

  // State in addition to "checked" and "unchecked". When true, the radio displays a "minus" icon.
  indeterminate?: boolean

  // Function called when state changes.
  onChange?: AnyFunction

  // When true, the radio is disabled.
  disabled?: boolean

  // When true, the aria-invalid attribute is true. Used for accessibility.
  isInvalid?: boolean

  // The appearance of the checkbox. The default theme only comes with a default style.
  appearance?: string
}

class Checkbox extends React.PureComponent<PropsWithTheme<IProps>> {
  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange: () => {},
    appearance: 'default'
  }

  setIndeterminate = (el: any) => {
    if (!el) return
    el.indeterminate = this.props.indeterminate
  }

  render() {
    const {
      theme,

      id,
      name,
      label,
      appearance,
      disabled,
      isInvalid,
      checked,
      onChange,
      value,
      indeterminate,
      ...props
    } = this.props

    const themedClassName = theme.getCheckboxClassName(appearance)

    return (
      <Box
        is="label"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        position="relative"
        display="flex"
        marginY={16}
        {...props}
      >
        <Box
          className={themedClassName}
          is="input"
          id={id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked || indeterminate}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={isInvalid}
          innerRef={this.setIndeterminate}
        />
        <Box
          boxSizing="border-box"
          borderRadius={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={16}
          height={16}
        >
          {indeterminate ? <MinusIcon /> : <CheckIcon />}
        </Box>
        {label && (
          <Text
            marginLeft={8}
            size={300}
            color={disabled ? 'muted' : 'default'}
          >
            {label}
          </Text>
        )}
      </Box>
    )
  }
}

export default withTheme(Checkbox)
