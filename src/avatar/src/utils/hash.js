// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
export default function hashCode(s) {
  const str = String(s)
  let hash = 0
  let char
  if (str.trim().length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    // Convert to 32bit integer
    hash &= hash
  }

  return Math.abs(hash)
}
