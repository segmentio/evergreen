/**
 * Cleans an object of undefined values
 */
export default function removeUndefined(input = {}) {
  const obj = { ...input }

  Object.keys(obj).forEach((key) => {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (obj[key] === undefined) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      delete obj[key]
    }
  })

  return obj
}
