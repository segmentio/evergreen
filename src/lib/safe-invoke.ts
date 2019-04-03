import { AnyFunction } from '../types/helper'

export default function safeInvoke(fn: AnyFunction, ...args: any[]) {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
