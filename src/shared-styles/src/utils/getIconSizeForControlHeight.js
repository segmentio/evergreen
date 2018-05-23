const getIconSizeForControlHeight = ({ height }) => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

export default getIconSizeForControlHeight
