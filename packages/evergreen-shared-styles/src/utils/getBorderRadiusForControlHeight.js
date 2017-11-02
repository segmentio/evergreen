const getBorderRadiusForControlHeight = ({ height }) => {
  if (height <= 28) return 3
  if (height <= 32) return 4
  return 5
}

export default getBorderRadiusForControlHeight
