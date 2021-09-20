export function generateAriaDescribedBy(id, { description, hint, validationMessage }) {
  if (!id || (!description && !hint && !validationMessage)) {
    return null
  }

  let tokens = ''

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
