/**
 * Stacking order contains z-index values that are used through.
 * Note that the Stack component might increase the z-index for certain components.
 */
const zIndices = {
  focused: 2,
  stack: 5,
  positioner: 10,
  overlay: 20,
  toaster: 30
}

export default zIndices
