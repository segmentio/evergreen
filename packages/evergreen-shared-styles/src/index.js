import { TextStyles } from 'evergreen-typography'

export { default as InputAppearances } from './input-appearances'

const getTextSizeForControlHeight = ({ height }) => {
  if (height <= 28) return '300'
  if (height <= 32) return '300'
  if (height <= 36) return '400'
  if (height <= 40) return '400'
  if (height <= 48) return '500'
  if (height <= 56) return '700'
  return '800'
}

const getTextStyleForControlHeight = ({ height }) =>
  TextStyles[getTextSizeForControlHeight({ height })]

const getBorderRadiusForTextSize = ({ textSize }) => {
  const ts = Number(textSize)
  if (ts <= 300) return 3
  if (ts <= 400) return 4
  return 5
}

const getBorderRadiusForControlHeight = ({ height }) => {
  if (height <= 28) return 3
  if (height <= 32) return 4
  return 5
}

export {
  getTextSizeForControlHeight,
  getTextStyleForControlHeight,
  getBorderRadiusForTextSize,
  getBorderRadiusForControlHeight,
}
