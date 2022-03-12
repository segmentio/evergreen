const first = <T>(values?: T[]): T | undefined => values?.[0]
const last = <T>(values?: T[]): T | undefined => values?.reverse()[0]

export { first, last }
