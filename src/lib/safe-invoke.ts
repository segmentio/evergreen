export default function safeInvoke(fn: any, ...args: any[]): any {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
