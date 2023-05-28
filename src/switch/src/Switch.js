import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'

const animationEasing = {
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
}

const iconContainerStyles = {
  transition: `all 500ms ${animationEasing.spring}`,
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  selectors: {
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
  }
}

const handleContainerStyles = {
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  selectors: {
    '&[data-checked="true"]': {
      transform: 'translateX(50%)'
    }
  }
}

const CheckIcon = memo(function CheckIcon({ fill = 'currentColor', size, ...props }) {
  return (
    <svg width={10} height={size} viewBox="0 0 10 7" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
      />
    </svg>
  )
})

CheckIcon.propTypes = {
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
  _checked: '&:checked + div',
  _checkedHover: '&:checked:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div',
  _checkedDisabled: '&[disabled]:checked + div'
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
    '& + div > svg': { display: 'none' },

    [pseudoSelectors._base]: {
      transition: 'all 120ms ease-in-out'
    }
  }
}

const Switch = memo(
  forwardRef(function Switch(props, ref) {
    const {
      id,
      name,
      height = 16,
      checked = false,
      onChange = noop,
      disabled = false,
      appearance = 'default',
      hasCheckIcon = false,
      defaultChecked,
      ...rest
    } = props

    const themedProps = useStyleConfig('Switch', { appearance }, pseudoSelectors, internalStyles)

    return (
      <Box is="label" display="block" width={height * 2} position="relative" ref={ref} {...rest}>
        <Box
          is="input"
          id={id}
          name={name}
          {...themedProps}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <Box height={height} width={height * 2} borderRadius={9999} cursor="pointer">
          <Box height={height} width={height} data-checked={checked} {...iconContainerStyles}>
            {hasCheckIcon && <CheckIcon display={checked ? 'block' : undefined} size={height / 2 - 3} />}
          </Box>
          <Box width={height * 2} display="flex" data-checked={checked} {...handleContainerStyles}>
            <Box flex={1} padding={2}>
              <Box width={height - 4} height={height - 4} backgroundColor="#fff" borderRadius={9999} />
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
  appearance: PropTypes.string,

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

export default Switch
