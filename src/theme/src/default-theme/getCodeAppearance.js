import scales from './scales'

const getCodeAppearance = appearance => {
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

export default getCodeAppearance
