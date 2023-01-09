// eslint-disable-next-line no-console
const info = (fn: (...args: any[]) => any, message: string, ...values: any[]) =>
  console.log(`[${fn.name}] ${message}`, ...values)

const log = {
  info
}

export { log }
