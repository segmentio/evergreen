import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { css } from 'ui-box'
import { withTheme } from '../../theme'

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
  animation: `${loadingKeyframes} 2s linear infinite`
}

const inner = color => ({
  strokeDashoffset: 600,
  strokeDasharray: 300,
  strokeWidth: 12,
  strokeMiterlimit: 10,
  strokeLinecap: 'round',
  animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
  stroke: color,
  fill: 'transparent'
})

class Spinner extends PureComponent {
  static propTypes = {
    /**
     * Composes the Box component as the base.
     */
    ...Box.propTypes,

    /**
     * The size of the spinner.
     */
    size: PropTypes.number.isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    size: 40
  }

  render() {
    const { theme, size, ...props } = this.props
    return (
      <Box width={size} height={size} lineHeight={0} {...props}>
        <Box is="svg" css={outer} x="0px" y="0px" viewBox="0 0 150 150">
          <Box
            is="circle"
            css={inner(theme.spinnerColor)}
            cx="75"
            cy="75"
            r="60"
          />
        </Box>
      </Box>
    )
  }
}

export default withTheme(Spinner)
