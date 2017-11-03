const getIconSizeForControlHeight = ({ height }) => {
  if (height <= 24) return 14
  if (height <= 28) return 14
  if (height <= 32) return 14
  if (height <= 36) return 16
  if (height <= 40) return 16
  if (height <= 48) return 16
  if (height <= 56) return 16
  return 16
}

export default getIconSizeForControlHeight
