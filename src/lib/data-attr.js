
/**
 * Converts a condition into a data-attribute value
 * Use this when *the presence of the data attribute* is semantically meaningful.
 * If you need to parse specific data attribute strings do not use this.
 */
export function dataAttr(condition) {
  return condition ? '' : undefined
}
