import React, { memo, forwardRef } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout } from 'ui-box'
import { useTheme } from '../../theme'

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString()

const iconContainerStyleClass = css({
  transition: `all 500ms ${animationEasing.spring}`,
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: `all 500ms ${animationEasing.spring}`,
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString()

const handleContainerStyleClass = css({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString()

const CheckIcon = memo(({ size, fill = 'currentColor', ...props }) => (
  <svg width={10} height={size} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
))

CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
}

const Switch = memo(
  forwardRef((props, ref) => {
    const {
      id,
      name,
      height,
      checked,
      onChange,
      disabled,
      appearance,
      hasCheckIcon,
      defaultChecked,
      ...rest
    } = props

    const theme = useTheme()
    const themedClassName = theme.getSwitchClassName(appearance)

    return (
      <Box
        is="label"
        display="block"
        width={height * 2}
        position="relative"
        innerRef={ref}
        {...rest}
      >
        <Box
          is="input"
          className={themedClassName}
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <Box height={height} width={height * 2}>
          <Box
            height={height}
            width={height}
            data-checked={checked}
            className={iconContainerStyleClass}
          >
            {hasCheckIcon && <CheckIcon size={height / 2 - 3} />}
          </Box>
          <Box
            width={height * 2}
            display="flex"
            data-checked={checked}
            className={handleContainerStyleClass}
          >
            <Box flex={1} padding={2}>
              <Box
                width={height - 4}
                height={height - 4}
                className={handleStyleClass}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  })
)

Switch.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,

  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * The height of the switch.
   */
  height: PropTypes.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool
}

Switch.defaultProps = {
  height: 16,
  onChange: () => {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
}

export default Switch
