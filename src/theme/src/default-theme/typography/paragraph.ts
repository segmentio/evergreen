import text from './text'

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
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
