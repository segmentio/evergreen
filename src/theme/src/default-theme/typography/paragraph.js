import text from './text'

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
export default {
  '500': {
    ...text['500'],
    lineHeight: '24px'
  },
  '400': {
    ...text['400'],
    lineHeight: '21px'
  },
  '300': {
    ...text['300'],
    lineHeight: '18px'
  }
}
