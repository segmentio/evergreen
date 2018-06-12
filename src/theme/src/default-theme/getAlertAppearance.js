import scales from './scales'

const getAlertAppearance = appearance => {
  switch (appearance) {
    case 'card':
      return { elevation: 1, borderRadius: 3 }
    case 'default':
    default:
      return { boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}` }
  }
}

export default getAlertAppearance
