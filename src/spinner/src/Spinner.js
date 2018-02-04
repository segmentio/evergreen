import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { css } from 'ui-box'
import { colors } from '../../colors'

const loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

const loadingCircleKeyframes = css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
})

const outer = {
  animation: `${loadingKeyframes} 3s linear infinite`
}

const inner = {
  strokeDashoffset: 600,
  strokeDasharray: 300,
  strokeWidth: 12,
  strokeMiterlimit: 10,
  strokeLinecap: 'round',
  animation: `${loadingCircleKeyframes} 2s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
  stroke: colors.neutral['500'],
  fill: 'transparent'
}

export default class Spinner extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    size: PropTypes.number
  }

  static defaultProps = {
    size: 40
  }

  render() {
    const { size, ...props } = this.props
    return (
      <Box width={size} height={size} {...props}>
        <Box is="svg" css={outer} x="0px" y="0px" viewBox="0 0 150 150">
          <Box is="circle" css={inner} cx="75" cy="75" r="60" />
        </Box>
      </Box>
    )
  }
}
