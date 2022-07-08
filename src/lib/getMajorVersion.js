/**
 *
 * @param {string} version
 * @returns {number} The major version
 */
export default function getMajorVersion(version) {
  const majorVersion = parseInt(version, 10)

  return majorVersion
}
