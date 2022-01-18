/**
 * Function to help with focus management for selectable table rows.
 * @param {Object} key - React `event.key`.
 * @param {Element} ref - the cell to manage focus interaction for.
 */
export default function manageTableRowFocusInteraction(key: any, ref: any) {
  let nextItemToFocus
  const tableBodyChildren = Array.from(ref.parentElement.children)
  const rowIndex = tableBodyChildren.indexOf(ref)

  if (key === 'ArrowUp' && rowIndex - 1 >= 0) {
    nextItemToFocus = tableBodyChildren[rowIndex - 1]
  } else if (key === 'ArrowDown' && rowIndex + 1 < tableBodyChildren.length) {
    nextItemToFocus = tableBodyChildren[rowIndex + 1]
  }

  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  if (nextItemToFocus && nextItemToFocus.hasAttribute('tabindex')) {
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    nextItemToFocus.focus()
  }
}
