/**
 * Helper function to be used across multiple  components to preserve
 * backwards-compat height behavior with the previous Evergreen.
 * @param {number} height
 */

const text = {
  500: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px'
  },
  400: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px'
  },
  300: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0'
  }
}

export const getTextPropsForControlHeight = height => {
  if (height <= 32) return text['300']
  if (height <= 40) return text['400']
  return text['500']
}

export default getTextPropsForControlHeight
