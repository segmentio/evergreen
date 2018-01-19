export default function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback
  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('')
}
