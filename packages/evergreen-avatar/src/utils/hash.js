// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
export default function hashCode(s) {
  const str = String(s)
  let hash = 0
  let char
  if (str.trim().length === 0) return hash
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char // eslint-disable-line no-bitwise
    // Convert to 32bit integer
    hash &= hash // eslint-disable-line no-bitwise
  }
  return Math.abs(hash)
}
