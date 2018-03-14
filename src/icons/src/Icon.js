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
    /**
     * Composes the Box component as the base.
     */
    ...Box.propTypes,

    /**
     * The aim of the icon.
     * none | up | right | down | left.
     */
    aim: PropTypes.oneOf(Object.keys(IconAim)).isRequired,

    /**
     * The size of the wrapping box of the icon (not the icon itself).
     */
    size: PropTypes.number,

    /**
     * The size of the wrapping box around the icon.
     */
    iconSize: PropTypes.number
  }

  static defaultProps = {
    color: 'default',
    aim: 'none',
    size: 32,
    iconSize: 16
  }

  static wrapperProps = {
    is: 'span',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
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
      <Box
        transform={totalTransform}
        height={size}
        width={size}
        {...Icon.wrapperProps}
        {...props}
      >
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
