import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { withTheme, PropsWithTheme } from '../../theme'
import { Text } from '../../typography'
import { AnyObject } from '../../types/helper'

interface ICircleIconProps {
  fill?: string
  size: number
}

const CircleIcon: React.SFC<ICircleIconProps> = ({
  size,
  fill = 'currentColor',
  ...props
}: ICircleIconProps) => (
  <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
    <circle fill={fill} cx="5" cy="5" r="5" />
  </svg>
)

CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
}

interface IProps extends Partial<BoxProps> {
  // The id attribute of the radio.
  id?: string

  // The name attribute of the radio.
  name?: string

  // Label of the radio.
  label?: React.ReactNode

  // The value attribute of the radio.
  value?: string

  // Function called when state changes
  onChange?: (event: AnyObject, checked: boolean) => void

  // When true, the radio is disabled.
  disabled?: boolean

  // When true, the radio is checked.
  checked?: boolean

  // The size of the radio circle. This also informs the text size and spacing.
  size?: 12 | 16

  // When true, the radio get the required attribute.
  isRequired?: boolean

  // When true, the aria-invalid attribute is true. Used for accessibility.
  isInvalid?: boolean

  // The appearance of the checkbox. The default theme only comes with a default style.
  appearance?: string
}

class Radio extends React.PureComponent<PropsWithTheme<IProps>> {
  static propTypes = {
    ...Box.propTypes,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    size: PropTypes.oneOf([12, 16]) as PropTypes.Validator<12 | 16>,
    isRequired: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    appearance: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    appearance: 'default',
    onChange: () => {},
    size: 12 as 12 | 16,
    isRequired: false,
    isInvalid: false
  }

  handleChange = (event: React.SyntheticEvent) => {
    const { checked } = event.target as HTMLInputElement
    this.props.onChange(event, checked)
  }

  render() {
    const {
      theme,

      id,
      name,
      label,
      disabled,
      isInvalid,
      checked,
      onChange,
      value,
      size,
      isRequired,
      appearance,
      ...props
    } = this.props
    const themedClassName = theme.getRadioClassName(appearance)

    return (
      <Box
        is="label"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        position="relative"
        display="flex"
        marginY={size === 12 ? 8 : 12}
        {...props}
      >
        <Box
          is="input"
          className={themedClassName}
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
          aria-invalid={isInvalid}
          required={isRequired}
        />
        <Box
          boxSizing="border-box"
          borderRadius={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
          width={size}
          height={size}
        >
          <CircleIcon size={size === 12 ? 4 : 4} />
        </Box>
        {label && (
          <Text
            marginLeft={size === 12 ? 8 : 10}
            size={size === 12 ? 300 : 400}
            color={disabled ? 'muted' : 'default'}
          >
            {label}
          </Text>
        )}
      </Box>
    )
  }
}

export default withTheme(Radio)
