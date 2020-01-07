import { css } from 'glamor'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

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

const outerClass = css({
  animation: `${loadingKeyframes} 2s linear infinite`
}).toString()

const innerClass = color =>
  css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
    stroke: color,
    fill: 'transparent'
  }).toString()

function Spinner({ delay, size, ...props }) {
  const theme = useTheme()
  const [isVisible, setIsVisible] = useState(delay === 0)
  const [delayTimer, setDelayTimer] = useState(null)

  useEffect(() => {
    if (delay > 0) {
      const newDelayTimer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      setDelayTimer(newDelayTimer)
    }

    return function() {
      clearTimeout(delayTimer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Box width={size} height={size} lineHeight={0} {...props}>
      <Box
        is="svg"
        className={outerClass}
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
      >
        <Box
          is="circle"
          className={innerClass(theme.spinnerColor)}
          cx="75"
          cy="75"
          r="60"
        />
      </Box>
    </Box>
  )
}

Spinner.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number.isRequired
}

Spinner.defaultProps = {
  size: 40,
  delay: 0
}

export default Spinner
