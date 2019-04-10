declare module 'lodash.debounce' {
  interface DebounceSettings {
    /**
     * Specify invoking on the leading edge of the timeout.
     */
    leading?: boolean

    /**
     * The maximum time func is allowed to be delayed before it’s invoked.
     */
    maxWait?: number

    /**
     * Specify invoking on the trailing edge of the timeout.
     */
    trailing?: boolean
  }

  interface Cancelable {
    cancel(): void
    flush(): void
  }

  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: DebounceSettings
  ): T & Cancelable

  export default debounce
}
