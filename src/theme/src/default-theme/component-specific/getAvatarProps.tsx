import fills from '../foundational-styles/fills'

export interface AvatarArgs {
  isSolid?: boolean
  color: 'automatic' | string
  hashValue?: number
}

export interface AvatarProps {
  backgroundColor: string
  color: string
}

const getAvatarProps = ({
  isSolid,
  color,
  hashValue
}: AvatarArgs): AvatarProps => {
  const appearances = fills[isSolid ? 'solid' : 'subtle']

  if (color === 'automatic' && hashValue !== undefined) {
    const keys = Object.keys(appearances)
    const key = keys[hashValue % keys.length]
    return appearances[key]
  }

  return appearances[color]
}

export default getAvatarProps
