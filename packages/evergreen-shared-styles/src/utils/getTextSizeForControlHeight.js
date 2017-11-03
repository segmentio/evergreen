const getTextSizeForControlHeight = ({ height }) => {
  if (height <= 24) return '200'
  if (height <= 28) return '300'
  if (height <= 32) return '300'
  if (height <= 36) return '400'
  if (height <= 40) return '400'
  if (height <= 48) return '500'
  if (height <= 56) return '700'
  return '800'
}

export default getTextSizeForControlHeight
