export default function getBadgeProps({ fills }) {
  /**
   * @param {boolean} isSolid
   * @param {string} color — automatic or actual color
   * @return {Object} { color, backgroundColor }
   */
  const getBadgeProps = ({ isSolid, color }) => {
    const appearances = fills[isSolid ? 'solid' : 'subtle']
    return appearances[color]
  }

  return getBadgeProps
}
