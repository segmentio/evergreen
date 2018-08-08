import generateScale from './generateScale'

export default function createColorScales(inputPalette = {}, defaultPalette) {
  const scales = {
    ...defaultPalette,
    ...inputPalette
  }

  // Delete colors for which the color is null or undefined.
  for (const key in scales) {
    if (key !== 'primary' && key !== 'neutral') {
      if (scales[key] === null || scales[key] === undefined) {
        delete scales[key]
      }
    }
  }

  for (const key in scales) {
    if (Object.prototype.hasOwnProperty.call(scales, key)) {
      scales[key] = generateScale(scales[key], key[0].toUpperCase())
    }
  }

  return scales
}
