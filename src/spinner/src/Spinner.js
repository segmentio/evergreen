import React, { useState, useEffect, forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box, { keyframes } from 'ui-box'
import { useStyleConfig } from '../../hooks'

const loadingKeyframes = keyframes('loading', {
  0: {
    transform: 'rotate(0)'
  },
  100: {
    transform: 'rotate(360deg)'
  }
})

const loadingCircleKeyframes = keyframes('loading-circle', {
  0: {
    strokeDashoffset: 600
  },
  100: {
    strokeDashoffset: 0
  }
})

const innerStyle = color => ({
  // stroke* props are not yet supported in ui-box, so they need to be passed as inline styles for now
  style: {
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round'
  },
  animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
  stroke: color,
  fill: 'transparent'
})

const emptyObject = {}

const Spinner = memo(
  forwardRef(function Spinner({ delay = 0, size = 'medium', ...props }, ref) {
    const [isVisible, setIsVisible] = useState(delay === 0)

    const boxProps = useStyleConfig('Spinner', { size }, emptyObject, emptyObject)

    const { height, width, ...rest } = typeof size === 'string' ? boxProps : { width: size, height: size }

    useEffect(() => {
      let delayTimer = null
      if (delay > 0) {
        delayTimer = setTimeout(() => {
          setIsVisible(true)
        }, delay)
      }

      return function() {
        clearTimeout(delayTimer)
      }
    }, [delay])

    if (!isVisible) {
      return null
    }

    return (
      <Box width={width} height={height} lineHeight={0} {...props} {...rest} ref={ref}>
        <Box is="svg" animation={`${loadingKeyframes} 2s linear infinite`} x="0px" y="0px" viewBox="0 0 150 150">
          <Box is="circle" {...innerStyle(boxProps.color)} cx="75" cy="75" r="60" />
        </Box>
      </Box>
    )
  })
)

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
  size: PropTypes.number
}

export default Spinner
