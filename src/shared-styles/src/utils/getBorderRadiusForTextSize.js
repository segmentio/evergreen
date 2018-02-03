const getBorderRadiusForTextSize = ({ textSize }) => {
  const ts = Number(textSize)
  if (ts <= 300) return 3
  if (ts <= 400) return 4
  return 5
}

export default getBorderRadiusForTextSize
