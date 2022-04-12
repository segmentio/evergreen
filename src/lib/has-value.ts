import isEmpty from 'lodash.isempty'

/**
 * Returns whether or not the value is non-nil and non-empty
 */
const hasValue = <T extends any>(value: string | T[] | null | undefined) => !isEmpty(value)

export default hasValue
