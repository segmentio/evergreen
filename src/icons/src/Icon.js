import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { colors } from '../../colors'

const IconColors = {
  default: colors.neutral['200A'],
  disabled: colors.neutral['50A'],
  muted: colors.neutral['60A'],
  selected: colors.blue['500'],
  white: colors.white['500']
}

const IconAim = {
  none: null,
  top: '0deg',
  up: '0deg',
  right: '90deg',
  bottom: '180deg',
  down: '180deg',
  left: '270deg'
}

export default class Icon extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    aim: PropTypes.oneOf(Object.keys(IconAim)).isRequired,
    size: PropTypes.number,
    iconSize: PropTypes.number
  }

  static defaultProps = {
    color: 'default',
    aim: 'none',
    is: 'span',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    size: 32,
    iconSize: 16
  }

  render() {
    const {
      aim,
      transform,
      size,
      iconSize,
      children,
      color: colorProp,
      ...props
    } = this.props

    let color = colorProp
    if (Object.prototype.hasOwnProperty.call(IconColors, color)) {
      color = IconColors[color]
    }

    let totalTransform = transform || ''
    if (aim) {
      totalTransform = `${totalTransform} rotate(${IconAim[aim]})`.trim()
    }

    return (
      <Box transform={totalTransform} height={size} width={size} {...props}>
        <Box
          is="span"
          width={iconSize}
          height={iconSize}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          color={color}
        >
          {children}
        </Box>
      </Box>
    )
  }
}
