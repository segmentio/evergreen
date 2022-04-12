import React, { useState, useEffect, forwardRef, memo } from 'react'
import { css } from 'glamor'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'

export interface SpinnerOwnProps {
    /**
     * Delay after which spinner should be visible.
     */
    delay?: number;
    /**
     * The size of the spinner.
     */
    size?: number;
}

export type SpinnerProps = PolymorphicBoxProps<'div', SpinnerOwnProps>;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
const loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
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

const innerClass = (color: any) => css({
  strokeDashoffset: 600,
  strokeDasharray: 300,
  strokeWidth: 12,
  strokeMiterlimit: 10,
  strokeLinecap: 'round',
  animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
  stroke: color,
  fill: 'transparent'
}).toString()

const emptyObject = {}

const Spinner: React.FC<SpinnerProps> = memo(
  forwardRef(function Spinner({ delay = 0, size = 'medium', ...props }, ref) {
    const [isVisible, setIsVisible] = useState(delay === 0)

    const boxProps = useStyleConfig('Spinner', { size }, emptyObject, emptyObject)

    const { height, width, ...rest } = typeof size === 'string' ? boxProps : { width: size, height: size }

    useEffect(() => {
      let delayTimer: any = null
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
        <Box is="svg" className={outerClass} x="0px" y="0px" viewBox="0 0 150 150">
          <Box is="circle" className={innerClass(boxProps.color)} cx="75" cy="75" r="60" />
        </Box>
      </Box>
    )
  })
)

export default Spinner
