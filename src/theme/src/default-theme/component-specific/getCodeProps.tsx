import Box from 'ui-box'
import scales from '../foundational-styles/scales'

/**
 * Get the themed properties for a `Code` text component.
 * @param appearance - default, minimal.
 * @return the themd properties.
 */
const getCodeProps = (appearance: string): React.ComponentProps<typeof Box> => {
  switch (appearance) {
    case 'minimal':
      return {}
    case 'default':
    default:
      // Passing padding and border radius is non-ideal here.
      return {
        backgroundColor: scales.blue.B2A,
        boxShadow: `inset 0 0 0 1px ${scales.blue.B4A}`,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      }
  }
}

export default getCodeProps
