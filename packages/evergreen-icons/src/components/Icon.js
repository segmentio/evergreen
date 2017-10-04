import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const IconAim = {
  none: null,
  top: '0deg',
  up: '0deg',
  right: '90deg',
  bottom: '180deg',
  down: '180deg',
  left: '270deg',
}

export default class Icon extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    aim: PropTypes.oneOf(Object.keys(IconAim)).isRequired,
    size: PropTypes.number,
  }

  static defaultProps = {
    aim: 'none',
    is: 'span',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    size: 32,
  }

  render() {
    const { aim, transform, size, ...props } = this.props

    let totalTransform = transform || ''
    if (aim) {
      totalTransform = `${totalTransform} rotate(${IconAim[aim]})`.trim()
    }

    return (
      <Box transform={totalTransform} height={size} width={size} {...props} />
    )
  }
}
