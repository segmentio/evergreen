export default function safeInvoke(fn: any, ...args: any[]) {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
