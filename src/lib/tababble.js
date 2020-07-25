/**
 * Sets of tababble selectors in order of priority
 * querySelectorAll reflects DOM order, not selector order
 * so we have to maintain order ourselves
 */
const tababbles = [
  ['[autofocus]'],
  ['[tabindex]:not([tabindex="-1"])'],
  [
    'button:enabled:not([readonly])',
    'select:enabled:not([readonly])',
    'input:enabled:not([readonly])',
    'textarea:enabled:not([readonly])',
    'a[href]',
    '[role="menuitem"]',
    '[role="menuitemradio"]',
    'area[href]',
    '[contenteditable]'
  ]
]

/**
 * Gets the first keyboard-focusable element within a specified element
 * @param {HTMLElement} element element
 * @returns {HTMLElement|null}
 */
export function findTababble(node) {
  const elements = tababbles
    .map(tababble => node.querySelector(tababble.join(' ')))
    .filter(el => el && !el.hasAttribute('disabled'))
  return elements[0] || null
}
