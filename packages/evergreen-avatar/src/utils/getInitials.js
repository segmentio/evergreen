export default function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback
  return name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map(v => v[0])
    .join('')
}
