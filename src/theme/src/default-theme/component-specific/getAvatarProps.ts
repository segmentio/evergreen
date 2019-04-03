import fills, { ColorKey } from '../foundational-styles/fills'

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */
const getAvatarProps = ({
  isSolid,
  color,
  hashValue
}: {
  isSolid: boolean
  color: ColorKey | 'automatic'
  hashValue: number
}) => {
  const appearances = fills[isSolid ? 'solid' : 'subtle']

  if (color === 'automatic') {
    const keys = Object.keys(appearances) as ColorKey[]
    const key = keys[hashValue % keys.length]
    return appearances[key]
  }

  return appearances[color]
}

export default getAvatarProps
