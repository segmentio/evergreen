import React from 'react'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import { Pane } from '../../layers'
import { Heading, Code } from '../../typography'
import { defaultTheme } from '../../theme'
import colors from './v3-colors'

const { palette, scales } = defaultTheme

const ColorCompare = ({
  oldColor,
  oldColorString,
  newColor,
  newColorString
}) => {
  return (
    <Pane display="flex" borderBottom paddingY={8}>
      <Pane width={400} display="flex" alignItems="center" marginRight={32}>
        <Pane style={{ backgroundColor: oldColor }} width={32} height={32} />
        <Code marginLeft={16}>{oldColorString}</Code>
      </Pane>
      <Pane width={800} display="flex" alignItems="center">
        <Pane style={{ backgroundColor: newColor }} width={32} height={32} />
        <Code marginLeft={16}>{newColorString}</Code>
      </Pane>
      <Pane display="flex">
        <Pane style={{ backgroundColor: oldColor }} width={32} height={32} />
        <Pane style={{ backgroundColor: newColor }} width={32} height={32} />
      </Pane>
    </Pane>
  )
}

ColorCompare.propTypes = {
  oldColor: PropTypes.string.isRequired,
  oldColorString: PropTypes.string.isRequired,
  newColor: PropTypes.string.isRequired,
  newColorString: PropTypes.string.isRequired
}

const CompareGroup = ({ colors }) => {
  return colors.map(color => <ColorCompare key={color.oldColor} {...color} />)
}

CompareGroup.propTypes = {
  colors: PropTypes.array
}

const Group = ({ title, colors }) => {
  return (
    <Pane marginTop={32}>
      <Heading size={800} marginBottom={16}>
        {title}
      </Heading>
      <Pane display="flex" borderBottom>
        <Pane width={400} display="flex" alignItems="center" marginRight={32}>
          <Heading>v3</Heading>
        </Pane>
        <Pane width={800} display="flex" alignItems="center">
          <Heading>v4</Heading>
        </Pane>
        <Pane width={80}>
          <Heading>Diff</Heading>
        </Pane>
      </Pane>
      <CompareGroup colors={colors} />
    </Pane>
  )
}

Group.propTypes = {
  title: PropTypes.string.isRequired,
  colors: PropTypes.array
}

export default class ColorMapping extends React.PureComponent {
  render() {
    return (
      <Pane padding={40}>
        <Group
          title="Base Colors"
          colors={[
            {
              oldColor: colors.red['500'],
              oldColorString: `colors.red['500']`,
              newColor: palette.red.base,
              newColorString: `palette.red.base`
            },
            {
              oldColor: colors.green['500'],
              oldColorString: `colors.green['500']`,
              newColor: palette.green.base,
              newColorString: `palette.green.base`
            },
            {
              oldColor: colors.blue['500'],
              oldColorString: `colors.blue['500']`,
              newColor: palette.blue.base,
              newColorString: `palette.blue.base`
            },
            {
              oldColor: colors.purple['500'],
              oldColorString: `colors.purple['500']`,
              newColor: palette.purple.base,
              newColorString: `palette.purple.base`
            },
            {
              oldColor: colors.turquoise['500'],
              oldColorString: `colors.turquoise['500']`,
              newColor: palette.teal.base,
              newColorString: `palette.teal.base`
            },
            {
              oldColor: colors.pink['500'],
              oldColorString: `colors.pink['500']`,
              newColor: palette.orange.base,
              newColorString: `palette.orange.base`
            },
            {
              oldColor: colors.neutral['500'],
              oldColorString: `colors.neutral['500']`,
              newColor: palette.neutral.base,
              newColorString: `palette.neutral.base`
            }
          ]}
        />
        <Group
          title="Dark Colors"
          colors={[
            {
              oldColor: colors.red['1000'],
              oldColorString: `colors.red['1000']`,
              newColor: palette.red.dark,
              newColorString: `palette.red.dark`
            },
            {
              oldColor: colors.green['1000'],
              oldColorString: `colors.green['1000']`,
              newColor: palette.green.dark,
              newColorString: `palette.green.dark`
            },
            {
              oldColor: colors.blue['1000'],
              oldColorString: `colors.blue['1000']`,
              newColor: palette.blue.dark,
              newColorString: `palette.blue.dark`
            },
            {
              oldColor: colors.purple['1000'],
              oldColorString: `colors.purple['1000']`,
              newColor: palette.purple.dark,
              newColorString: `palette.purple.dark`
            },
            {
              oldColor: colors.turquoise['1000'],
              oldColorString: `colors.turquoise['1000']`,
              newColor: palette.teal.dark,
              newColorString: `palette.teal.dark`
            },
            {
              oldColor: colors.pink['1000'],
              oldColorString: `colors.pink['1000']`,
              newColor: palette.orange.dark,
              newColorString: `palette.orange.dark`
            },
            {
              oldColor: colors.neutral['1000'],
              oldColorString: `colors.neutral['1000']`,
              newColor: palette.neutral.dark,
              newColorString: `palette.neutral.dark`
            }
          ]}
        />
        <Group
          title="Light Colors"
          colors={[
            {
              oldColor: colors.red['30'],
              oldColorString: `colors.red['30']`,
              newColor: palette.red.light,
              newColorString: `palette.red.light`
            },
            {
              oldColor: colors.green['30'],
              oldColorString: `colors.green['30']`,
              newColor: palette.green.light,
              newColorString: `palette.green.light`
            },
            {
              oldColor: colors.blue['30'],
              oldColorString: `colors.blue['30']`,
              newColor: palette.blue.light,
              newColorString: `palette.blue.light`
            },
            {
              oldColor: colors.purple['30'],
              oldColorString: `colors.purple['30']`,
              newColor: palette.purple.light,
              newColorString: `palette.purple.light`
            },
            {
              oldColor: colors.turquoise['30'],
              oldColorString: `colors.turquoise['30']`,
              newColor: palette.teal.light,
              newColorString: `palette.teal.light`
            },
            {
              oldColor: colors.pink['30'],
              oldColorString: `colors.pink['30']`,
              newColor: palette.orange.light,
              newColorString: `palette.orange.light`
            },
            {
              oldColor: colors.neutral['30'],
              oldColorString: `colors.neutral['30']`,
              newColor: palette.neutral.light,
              newColorString: `palette.neutral.light`
            }
          ]}
        />
        <Group
          title="Lightest Colors"
          colors={[
            {
              oldColor: colors.red['5'],
              oldColorString: `colors.red['5']`,
              newColor: palette.red.lightest,
              newColorString: `palette.red.lightest`
            },
            {
              oldColor: colors.green['5'],
              oldColorString: `colors.green['5']`,
              newColor: palette.green.lightest,
              newColorString: `palette.green.lightest`
            },
            {
              oldColor: colors.blue['5'],
              oldColorString: `colors.blue['5']`,
              newColor: palette.blue.lightest,
              newColorString: `palette.blue.lightest`
            },
            {
              oldColor: colors.purple['5'],
              oldColorString: `colors.purple['5']`,
              newColor: palette.purple.lightest,
              newColorString: `palette.purple.lightest`
            },
            {
              oldColor: colors.turquoise['5'],
              oldColorString: `colors.turquoise['5']`,
              newColor: palette.teal.lightest,
              newColorString: `palette.teal.lightest`
            },
            {
              oldColor: colors.pink['5'],
              oldColorString: `colors.pink['5']`,
              newColor: palette.orange.lightest,
              newColorString: `palette.orange.lightest`
            },
            {
              oldColor: colors.neutral['5'],
              oldColorString: `colors.neutral['5']`,
              newColor: palette.neutral.lightest,
              newColorString: `palette.neutral.lightest`
            }
          ]}
        />
        <Group
          title="Neutral Scale"
          colors={[
            {
              oldColor: colors.neutral['5'],
              oldColorString: `colors.neutral['5']`,
              newColor: scales.neutral.N1,
              newColorString: `scales.neutral.N1`
            },
            {
              oldColor: colors.neutral['7'],
              oldColorString: `colors.neutral['7']`,
              newColor: scales.neutral.N2,
              newColorString: `scales.neutral.N2`
            },
            {
              oldColor: colors.neutral['10'],
              oldColorString: `colors.neutral['10']`,
              newColor: scales.neutral.N3,
              newColorString: `scales.neutral.N3`
            },
            {
              oldColor: colors.neutral['15'],
              oldColorString: `colors.neutral['15']`,
              newColor: scales.neutral.N4,
              newColorString: `scales.neutral.N4`
            },
            {
              oldColor: colors.neutral['40'],
              oldColorString: `colors.neutral['40']`,
              newColor: scales.neutral.N5,
              newColorString: `scales.neutral.N5`
            },
            {
              oldColor: colors.neutral['80'],
              oldColorString: `colors.neutral['80']`,
              newColor: scales.neutral.N6,
              newColorString: `scales.neutral.N6`
            },
            {
              oldColor: colors.neutral['200'],
              oldColorString: `colors.neutral['200']`,
              newColor: scales.neutral.N7,
              newColorString: `scales.neutral.N7`
            },
            {
              oldColor: colors.neutral['300'],
              oldColorString: `colors.neutral['300']`,
              newColor: scales.neutral.N8,
              newColorString: `scales.neutral.N8`
            },
            {
              oldColor: colors.neutral['500'],
              oldColorString: `colors.neutral['500']`,
              newColor: scales.neutral.N9,
              newColorString: `scales.neutral.N9`
            },
            {
              oldColor: colors.neutral['800'],
              oldColorString: `colors.neutral['800']`,
              newColor: scales.neutral.N10,
              newColorString: `scales.neutral.N10`
            }
          ]}
        />
        <Group
          title="Blue Scale"
          colors={[
            {
              oldColor: colors.blue['5'],
              oldColorString: `colors.blue['5']`,
              newColor: scales.blue.B1,
              newColorString: `scales.blue.B1`
            },
            {
              oldColor: colors.blue['7'],
              oldColorString: `colors.blue['7']`,
              newColor: scales.blue.B2,
              newColorString: `scales.blue.B2`
            },
            {
              oldColor: colors.blue['10'],
              oldColorString: `colors.blue['10']`,
              newColor: scales.blue.B3,
              newColorString: `scales.blue.B3`
            },
            {
              oldColor: colors.blue['15'],
              oldColorString: `colors.blue['15']`,
              newColor: scales.blue.B4,
              newColorString: `scales.blue.B4`
            },
            {
              oldColor: colors.blue['40'],
              oldColorString: `colors.blue['40']`,
              newColor: scales.blue.B5,
              newColorString: `scales.blue.B5`
            },
            {
              oldColor: colors.blue['80'],
              oldColorString: `colors.blue['80']`,
              newColor: scales.blue.B6,
              newColorString: `scales.blue.B6`
            },
            {
              oldColor: colors.blue['200'],
              oldColorString: `colors.blue['200']`,
              newColor: scales.blue.B7,
              newColorString: `scales.blue.B7`
            },
            {
              oldColor: colors.blue['300'],
              oldColorString: `colors.blue['300']`,
              newColor: scales.blue.B8,
              newColorString: `scales.blue.B8`
            },
            {
              oldColor: colors.blue['500'],
              oldColorString: `colors.blue['500']`,
              newColor: scales.blue.B9,
              newColorString: `scales.blue.B9`
            },
            {
              oldColor: colors.blue['800'],
              oldColorString: `colors.blue['800']`,
              newColor: scales.blue.B10,
              newColorString: `scales.blue.B10`
            }
          ]}
        />

        <Group
          title="Mapping Out of System Colors"
          colors={[
            {
              oldColor: colors.green['3A'],
              oldColorString: `colors.green['3A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.025)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.025).toString()`
            },
            {
              oldColor: colors.green['5A'],
              oldColorString: `colors.green['5A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.041)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.041).toString()`
            },
            {
              oldColor: colors.green['7A'],
              oldColorString: `colors.green['7A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.057)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.057).toString()`
            },
            {
              oldColor: colors.green['10A'],
              oldColorString: `colors.green['10A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.079)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.079).toString()`
            },
            {
              oldColor: colors.green['15A'],
              oldColorString: `colors.green['15A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.114)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.114).toString()`
            },
            {
              oldColor: colors.green['20A'],
              oldColorString: `colors.green['20A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.146)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.146).toString()`
            },
            {
              oldColor: colors.green['30A'],
              oldColorString: `colors.green['30A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.204)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.204).toString()`
            },
            {
              oldColor: colors.green['40A'],
              oldColorString: `colors.green['40A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.255)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.255).toString()`
            },
            {
              oldColor: colors.green['50A'],
              oldColorString: `colors.green['50A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.301)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.301).toString()`
            },
            {
              oldColor: colors.green['60A'],
              oldColorString: `colors.green['60A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.342)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.342).toString()`
            },
            {
              oldColor: colors.green['70A'],
              oldColorString: `colors.green['70A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.38)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.38).toString()`
            },
            {
              oldColor: colors.green['80A'],
              oldColorString: `colors.green['80A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.415)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.415).toString()`
            },
            {
              oldColor: colors.green['90A'],
              oldColorString: `colors.green['90A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.447)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.447).toString()`
            },
            {
              oldColor: colors.green['100A'],
              oldColorString: `colors.green['100A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.477)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.477).toString()`
            },
            {
              oldColor: colors.green['125A'],
              oldColorString: `colors.green['125A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.544)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.544).toString()`
            },
            {
              oldColor: colors.green['150A'],
              oldColorString: `colors.green['150A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.602)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.602).toString()`
            },
            {
              oldColor: colors.green['175A'],
              oldColorString: `colors.green['175A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.653)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.653).toString()`
            },
            {
              oldColor: colors.green['200A'],
              oldColorString: `colors.green['200A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.699)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.699).toString()`
            },
            {
              oldColor: colors.green['300A'],
              oldColorString: `colors.green['300A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.845)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.845).toString()`
            },
            {
              oldColor: colors.green['400A'],
              oldColorString: `colors.green['400A']`,
              newColor: tinycolor(palette.green.base)
                .setAlpha(0.954)
                .toString(),
              newColorString: `tinycolor(palette.green.base).setAlpha(0.954).toString()`
            },
            {
              oldColor: colors.green['3'],
              oldColorString: `colors.green['3']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.025 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.025 * 100).toString()`
            },
            {
              oldColor: colors.green['5'],
              oldColorString: `colors.green['5']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.041 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.041 * 100).toString()`
            },
            {
              oldColor: colors.green['7'],
              oldColorString: `colors.green['7']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.057 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.057 * 100).toString()`
            },
            {
              oldColor: colors.green['10'],
              oldColorString: `colors.green['10']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.079 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.079 * 100).toString()`
            },
            {
              oldColor: colors.green['15'],
              oldColorString: `colors.green['15']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.114 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.114 * 100).toString()`
            },
            {
              oldColor: colors.green['20'],
              oldColorString: `colors.green['20']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.146 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.146 * 100).toString()`
            },
            {
              oldColor: colors.green['30'],
              oldColorString: `colors.green['30']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.204 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.204 * 100).toString()`
            },
            {
              oldColor: colors.green['40'],
              oldColorString: `colors.green['40']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.255 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.255 * 100).toString()`
            },
            {
              oldColor: colors.green['50'],
              oldColorString: `colors.green['50']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.301 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.301 * 100).toString()`
            },
            {
              oldColor: colors.green['60'],
              oldColorString: `colors.green['60']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.342 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.342 * 100).toString()`
            },
            {
              oldColor: colors.green['70'],
              oldColorString: `colors.green['70']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.38 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.38 * 100).toString()`
            },
            {
              oldColor: colors.green['80'],
              oldColorString: `colors.green['80']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.415 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.415 * 100).toString()`
            },
            {
              oldColor: colors.green['90'],
              oldColorString: `colors.green['90']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.447 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.447 * 100).toString()`
            },
            {
              oldColor: colors.green['100'],
              oldColorString: `colors.green['100']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.477 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.477 * 100).toString()`
            },
            {
              oldColor: colors.green['125'],
              oldColorString: `colors.green['125']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.544 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.544 * 100).toString()`
            },
            {
              oldColor: colors.green['150'],
              oldColorString: `colors.green['150']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.602 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.602 * 100).toString()`
            },
            {
              oldColor: colors.green['175'],
              oldColorString: `colors.green['175']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.653 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.653 * 100).toString()`
            },
            {
              oldColor: colors.green['200'],
              oldColorString: `colors.green['200']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.699 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.699 * 100).toString()`
            },
            {
              oldColor: colors.green['300'],
              oldColorString: `colors.green['300']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.845 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.845 * 100).toString()`
            },
            {
              oldColor: colors.green['400'],
              oldColorString: `colors.green['400']`,
              newColor: tinycolor
                .mix('white', palette.green.base, 0.954 * 100)
                .toString(),
              newColorString: `tinycolor.mix('white', palette.green.base, 0.954 * 100).toString()`
            },
            {
              oldColor: colors.green['500'],
              oldColorString: `colors.green['500']`,
              newColor: palette.green.base,
              newColorString: `palette.green.base`
            },
            {
              oldColor: colors.green['600'],
              oldColorString: `colors.green['600']`,
              newColor: tinycolor(palette.green.base)
                .darken(3)
                .toString(),
              newColorString: `tinycolor(palette.green.base).darken(3).toString()`
            },
            {
              oldColor: colors.green['700'],
              oldColorString: `colors.green['700']`,
              newColor: tinycolor(palette.green.base)
                .darken(5)
                .toString(),
              newColorString: `tinycolor(palette.green.base).darken(5).toString()`
            },
            {
              oldColor: colors.green['800'],
              oldColorString: `colors.green['800']`,
              newColor: tinycolor(palette.green.base)
                .darken(9)
                .toString(),
              newColorString: `tinycolor(palette.green.base).darken(9).toString()`
            },
            {
              oldColor: colors.green['900'],
              oldColorString: `colors.green['900']`,
              newColor: tinycolor(palette.green.base)
                .darken(13)
                .toString(),
              newColorString: `tinycolor(palette.green.base).darken(13).toString()`
            },
            {
              oldColor: colors.green['1000'],
              oldColorString: `colors.green['1000']`,
              newColor: tinycolor(palette.green.base)
                .darken(20)
                .toString(),
              newColorString: `tinycolor(palette.green.base).darken(20).toString()`
            }
          ]}
        />
      </Pane>
    )
  }
}
