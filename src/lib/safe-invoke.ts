export default function safeInvoke(
  fn: (...args: any[]) => any,
  ...args: any[]
) {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
