import tinycolor from 'tinycolor2'

export default function generateScale(color, prefix = 'P') {
  const scale = {}

  const opacities = [0.04, 0.06, 0.09, 0.14, 0.3, 0.47, 0.7, 0.81]

  // Add opaque colors first.
  for (const [index, opacity] of opacities.entries()) {
    const opaqueColor = tinycolor
      .mix('white', color, opacity * 100)
      .toHexString()
    scale[`${prefix}${index + 1}`] = opaqueColor
  }

  scale[`${prefix}9`] = color
  scale[`${prefix}10`] = tinycolor(color)
    .darken(15)
    .toHexString()

  // Add opacity colors second.
  for (const [index, opacity] of opacities.entries()) {
    const opacityColor = tinycolor(color)
      .setAlpha(opacity)
      .toString()
    scale[`${prefix}${index + 1}A`] = opacityColor
  }

  return scale
}
