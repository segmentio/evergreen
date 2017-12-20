import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout } from 'ui-box'
import SwitchAppearances from '../styles/SwitchAppearances'

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const handleStyle = {
  backgroundColor: '#fff',
  borderRadius: 9999
}

const iconContainerStyle = {
  transition: `all 500ms ${animationEasing.spring}`,
  opacity: 0,
  transform: 'scale(0.0)',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 2,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  }
}

const handleContainerStyle = {
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}

const CheckIcon = ({ size, fill = 'currentColor', ...props }) => (
  <svg width={10} height={size} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
}

const isControlled = component => {
  return {}.hasOwnProperty.call(component.props, 'checked')
}

export default class Switch extends PureComponent {
  static propTypes = {
    ...position.propTypes,
    ...layout.propTypes,
    ...spacing.propTypes,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.string,
    height: PropTypes.number,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    appearance: PropTypes.oneOf(Object.keys(SwitchAppearances)),
    hasCheckIcon: PropTypes.bool,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    height: 16,
    display: 'block',
    onChange: () => {},
    appearance: 'default',
    hasCheckIcon: true
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      checked: props.checked || props.defaultChecked || false
    }
  }

  handleChange = value => {
    if (isControlled(this)) {
      this.props.onChange(value)
    } else {
      this.setState({
        checked: !this.state.checked
      })
      this.props.onChange(value)
    }
  }

  render() {
    const {
      id,
      name,
      height,
      checked: checkedProps,
      onChange,
      disabled,
      appearance,
      hasCheckIcon,
      defaultChecked,
      ...props
    } = this.props
    const checked = isControlled(this) ? checkedProps : this.state.checked
    const appearanceStyle = SwitchAppearances[appearance]

    return (
      <Box is="label" width={height * 2} {...props}>
        <Box
          is="input"
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={this.handleChange}
          css={appearanceStyle}
        />
        <Box onClick={this.handleClick} height={height} width={height * 2}>
          <Box
            height={height}
            width={height}
            data-checked={checked}
            css={iconContainerStyle}
          >
            {hasCheckIcon && <CheckIcon size={height / 2 - 3} />}
          </Box>
          <Box
            width={height * 2}
            display="flex"
            data-checked={checked}
            css={handleContainerStyle}
          >
            <Box flex={1} padding={2}>
              <Box width={height - 4} height={height - 4} css={handleStyle} />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
