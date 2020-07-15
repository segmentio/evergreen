export default function bubbleRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref && 'current' in ref) {
    ref.current = node
  }
}
