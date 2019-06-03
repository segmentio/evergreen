/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
const getAvatarInitialsFontSize = (
  size: number,
  sizeLimitOneCharacter: number
): number => {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2)
  }

  return Math.ceil(size / 2.6)
}

export default getAvatarInitialsFontSize
