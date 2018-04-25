import { Themer } from '../../../themer'
import { colors } from '../../../colors'

const LinkAppearances = {}

LinkAppearances.blue = Themer.createLinkAppearance({
  base: {
    color: colors.blue['500']
  },
  hover: {
    color: colors.blue['300']
  },
  active: {
    color: colors.blue['900']
  },
  focus: {
    boxShadow: `0 0 0 2px ${colors.blue['100A']}`
  }
})

LinkAppearances.green = Themer.createLinkAppearance({
  base: {
    color: colors.green['500']
  },
  hover: {
    color: colors.green['300']
  },
  active: {
    color: colors.green['900']
  },
  focus: {
    boxShadow: `0 0 0 2px ${colors.green['100A']}`
  }
})

LinkAppearances.neutral = Themer.createLinkAppearance({
  base: {
    color: colors.neutral['500']
  },
  hover: {
    color: colors.neutral['300']
  },
  active: {
    color: colors.neutral['900']
  },
  focus: {
    boxShadow: `0 0 0 2px ${colors.neutral['100A']}`
  }
})

export default LinkAppearances
