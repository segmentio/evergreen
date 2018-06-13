/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
export default {
  '500': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  '400': {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 12
  },
  '300': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 12
  }
}
