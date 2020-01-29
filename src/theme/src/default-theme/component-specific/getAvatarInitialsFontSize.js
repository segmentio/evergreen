/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @param {Object} theme - the current theme
 * @return {number} font size
 */
const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter, _) => {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2)
  }

  return Math.ceil(size / 2.6)
}

export default getAvatarInitialsFontSize
