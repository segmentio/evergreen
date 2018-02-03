import colors from 'evergreen-colors'

const borderShadowColor = colors.neutral['80A']
const blurryShadowColor = colors.neutral['50A']

const ElevationStyles = [
  `0 0 1px ${borderShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
]

export default ElevationStyles
