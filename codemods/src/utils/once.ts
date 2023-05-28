type Function<TThis, TArgs extends any[], TReturnType> = (this: TThis, ...args: TArgs) => TReturnType

/**
 * Ensures a function is only called once. Subsequent calls will return the initial result.
 */
const once = <TThis, TArgs extends any[], TReturnType>(
  fn: Function<TThis, TArgs, TReturnType>
): Function<TThis, TArgs, TReturnType> => {
  let called = false
  let result: TReturnType
  return function(this: TThis, ...args: TArgs) {
    if (called) {
      return result
    }

    result = fn.apply(this, args)
    called = true
    return result
  }
}

export { once }
