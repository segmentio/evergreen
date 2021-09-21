/**
 * Generates a token valie for `aria-describedby`
 * @param {String} id
 * @param {Object} helperTextCandidates
 * @param {String | React.ReactNode} [helperTextCandidates.description]
 * @param {String | React.ReactNode} [helperTextCandidates.hint]
 * @param {String | React.ReactNode} [helperTextCandidates.validationMessage]
 * @returns {String | null}
 */
export function generateAriaDescribedBy(id, { description, hint, validationMessage }) {
  let tokens = ''

  // Only add each of the following to tokens if it is a non-empty string.
  // When the user provides a React element, we assume they
  // want to manage aria-describedby themselves.

  if (typeof description === 'string' && description.length) {
    tokens += ' ' + id + '__description'
  }

  if (typeof hint === 'string' && hint.length) {
    tokens += ' ' + id + '__hint'
  }

  if (typeof validationMessage === 'string' && validationMessage.length) {
    tokens += ' ' + id + '__validation-message'
  }

  if (tokens.length) {
    return tokens.trim()
  }
  return null
}
