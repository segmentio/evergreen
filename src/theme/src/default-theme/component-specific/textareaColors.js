import scales from '../foundational-styles/scales'

export default {
  default: {
    base: {
      backgroundColor: 'white'
    },
    focus: {
      shadowColor1: scales.blue.B7,
      shadowColor2: scales.blue.B4A
    }
  },
  neutral: {
    focus: {
      shadowColor: scales.blue.B6A
    }
  },
  editableCell: {
    focus: {
      shadowColor: scales.blue.B7
    }
  }
}
