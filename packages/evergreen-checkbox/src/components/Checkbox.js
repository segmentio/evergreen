import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import CheckboxAppearances from '../styles/checkbox-appearances'
import colors from 'evergreen-colors'
import { Text } from 'evergreen-typography'

const CheckIcon = ({ fill = 'currentColor', ...props }) => (
  <svg width={10} height={7} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

export default class Checkbox extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    appearance: PropTypes.oneOf(Object.keys(CheckboxAppearances)),
    label: PropTypes.node,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    checked: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  static defaultProps = {
    appearance: 'default',
    marginY: 16,
    onChange: () => {},
  }

  render() {
    const {
      id,
      name,
      label,
      appearance,
      disabled,
      isInvalid,
      checked,
      onChange,
      value,
      ...props
    } = this.props
    const appearanceStyle = CheckboxAppearances[appearance]

    return (
      <Box
        is="label"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        display="flex"
        {...props}
      >
        <Box
          is="input"
          id={id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...(isInvalid ? { 'aria-invalid': true } : {})}
          css={appearanceStyle}
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
          <CheckIcon />
        </Box>
        {label && (
          <Text
            marginLeft={8}
            size={300}
            color={disabled ? 'extraMuted' : 'default'}
          >
            {label}
          </Text>
        )}
      </Box>
    )
  }
}
