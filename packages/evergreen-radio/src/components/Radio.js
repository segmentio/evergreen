import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import colors from 'evergreen-colors'
import { Text } from 'evergreen-typography'
import { CheckboxAppearances } from 'evergreen-shared-styles'

const CircleIcon = ({ size, fill = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
    <circle fill={fill} cx="5" cy="5" r="5" />
  </svg>
)

CircleIcon.propTypes = {
  fill: PropTypes.string,
}

export default class Radio extends PureComponent {
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
    size: PropTypes.oneOf([12, 16]),
  }

  static defaultProps = {
    appearance: 'default',
    marginY: 12,
    onChange: () => {},
    size: 12,
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
      size,
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
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          {...(isInvalid ? { 'aria-invalid': true } : {})}
          css={appearanceStyle}
        />
        <Box
          boxSizing="border-box"
          borderRadius={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={size === 12 ? 2 : 0}
          width={size}
          height={size}
        >
          <CircleIcon size={size === 12 ? 4 : 6} />
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
