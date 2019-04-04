export default Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)
