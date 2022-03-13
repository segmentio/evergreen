import React, { forwardRef } from 'react'
import cx from 'classnames'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapperProps } from './IconWrapper'

export interface IconProps extends Omit<IconWrapperProps, 'icon'> {
  svgPaths16: string[]
  svgPaths20: string[]
}

const pseudoSelectors = {}
const internalStyles = {}

const Icon: React.FC<IconProps> = forwardRef(function Icon(
  { className, color = 'currentColor', name, size = 16, svgPaths16, svgPaths20, title, ...svgProps },
  ref
) {
  const { className: themedClassName, ...styleProps } = useStyleConfig(
    'Icon',
    { color },
    pseudoSelectors,
    internalStyles
  )
  const SIZE_STANDARD = 16
  const SIZE_LARGE = 20

  // Choose which pixel grid is most appropriate for given icon size
  const pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD
  const pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20
  const paths = pathStrings.map((d: string, i: number) => (
    // eslint-disable-next-line react/no-array-index-key
    <path key={i} d={d} fillRule="evenodd" />
  ))

  const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`

  return (
    <Box
      is="svg"
      ref={ref}
      className={cx(className, themedClassName)}
      {...styleProps}
      {...svgProps}
      data-icon={name}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      {title && <title>{title}</title>}
      {paths}
    </Box>
  )
})

export default Icon
