/**
 * Credit to https://gist.github.com/tdukart/b87afb278c41245741ae7a0c355a0a0b
 *
 * @param {*} string
 */

export default function kebabCase(string) {
  let result = string

  // Convert camelCase capitals to kebab-case.
  result = result.replace(/([a-z][A-Z])/g, match => {
    return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase()
  })

  // Convert non-camelCase capitals to lowercase.
  result = result.toLowerCase()

  // Convert non-alphanumeric characters to hyphens
  result = result.replace(/[^-a-z0-9]+/g, '-')

  // Remove hyphens from both ends
  result = result.replace(/^-+/, '').replace(/-$/, '')

  return result
}
