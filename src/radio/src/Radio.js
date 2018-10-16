import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout, dimensions } from 'ui-box'
import { Text } from '../../typography'
import { withTheme } from '../../theme'

const CircleIcon = ({ size, fill = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
    <circle fill={fill} cx="5" cy="5" r="5" />
  </svg>
)

CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
}

class Radio extends PureComponent {
  static propTypes = {
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
    isRequired: PropTypes.bool.isRequired,

    /**
     * When true, the aria-invalid attribute is true.
     * Used for accessibility.
     */
    isInvalid: PropTypes.bool.isRequired,

    /**
     * The appearance of the checkbox.
     * The default theme only comes with a default style.
     */
    appearance: PropTypes.string.isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    appearance: 'default',
    onChange: () => {},
    size: 12,
    isRequired: false,
    isInvalid: false
  }

  handleChange = event => {
    this.props.onChange(event, event.target.checked)
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
