import React from 'react'
import Box from 'ui-box'
import colors from '../src/colors'

const title = 'Colors'
const subTitle = 'The Evergreen color system.'

const designGuidelines = (
  <div>
    <p>
      The color system in Evergreen is based on a custom palette generator tool.
      There are currently a lot of tints and shades in each color group, in the
      short future we will simplify the raw color system.
    </p>
    <h3>Loosely Based On Material Design</h3>
    <p>
      The color system is based on some of the concepts of{' '}
      <a
        rel="noreferrer noopener"
        href="https://material.io/guidelines/style/color.html#color-color-palette"
        target="_blank"
      >
        Material Design
      </a>, meaning that 500 is the base color, everything below 500 is lighter
      (tints), and everything above 500 is darker (shades).
    </p>
    <h2>Base Colors</h2>
    <p>
      In the color system the <code>500</code> number represents the base
      system. Below you can see all of the base colors for each color scale.
    </p>
    <Box marginTop={32}>
      {Object.keys(colors).map(groupKey => {
        const color = colors[groupKey]['500']
        return (
          <Box
            key={color}
            display="flex"
            alignItems="center"
            marginBottom={16}
            paddingBottom={16}
            borderBottom={`1px solid ${colors.neutral['15A']} `}
          >
            <Box style={{ backgroundColor: color }} width={48} height={48} />
            <Box paddingLeft={12} flex={1}>
              <Box lineHeight="1.5" opacity="0.7" fontSize={12}>
                {capitalizeFirstLetter(groupKey)} 500
              </Box>
              <Box lineHeight="1.5">{color}</Box>
            </Box>
            <Box flexBasis={220}>
              <code>
                colors.{groupKey}
                {`['500']`}
              </code>
            </Box>
          </Box>
        )
      })}
    </Box>
    <h2>Tints</h2>
    <p>
      In the color system all colors under <code>500</code> are tints of the
      base color.
    </p>
    <h3>Opaque and Transparent Tints</h3>
    <p>
      For each tint there are two variations, one opaque and one transparent.
      Below is an example for the neutral 100A and 100 color. The <code>A</code>{' '}
      is appended to signify <code>Alpha</code>, which is unlike Material Design
      conventions.
    </p>
    <ul>
      <li>
        Transparent: <code>colors.neutral{`['100A']`}</code> is{' '}
        <code>rgba(67,90,111,0.477)</code>
      </li>
      <li>
        Opaque: <code>colors.neutral{`['100']`}</code> is <code>#9cb1c3</code>
      </li>
    </ul>
    <p>
      The benefit of having both a transparent version and a opaque version is
      that you can explicitly pick one. In most cases the transparent color is
      more useful because it will blend itself with whatever is behind it. This
      is useful for layering background colors. The opaque color is useful if
      you explicitly need exactly that color — often you wouldn’t need this.
    </p>
    <h3>Planned Improvements</h3>
    <p>
      As you might be able to tell there are a ton of colors and the transparent
      and opaque tints don’t always match a 100%. Going forward we are going to
      drastically reduce the amount of colors in the color scale for our colors.
    </p>
    <Box marginTop={32}>
      {Object.keys(colors).map(groupKey => {
        return (
          <Box
            key={groupKey}
            marginBottom={16}
            paddingBottom={16}
            borderTop={`1px solid ${colors.neutral['15A']} `}
          >
            <h3>{capitalizeFirstLetter(groupKey)} Tints</h3>
            {Object.keys(colors[groupKey])
              // Trickery to make the white show up.
              .filter(number => !Number(number))
              .map(number => Number(number.replace('A', '')))
              .filter(number => Number(number) < 500)
              .map(number => {
                return (
                  <Box
                    key={number}
                    display="flex"
                    marginY={12}
                    alignItems="center"
                  >
                    {groupKey !== 'white' && (
                      <React.Fragment>
                        <Box
                          style={{ backgroundColor: colors[groupKey][number] }}
                          width={48}
                          height={48}
                        />
                        <Box paddingLeft={12} flex={1}>
                          <Box lineHeight="1.5" opacity="0.7" fontSize={12}>
                            {capitalizeFirstLetter(groupKey)} {number}
                          </Box>
                          <Box lineHeight="1.5">{colors[groupKey][number]}</Box>
                        </Box>
                      </React.Fragment>
                    )}
                    <Box
                      style={{
                        backgroundColor: colors[groupKey][`${number}A`]
                      }}
                      width={48}
                      height={48}
                    />

                    <Box paddingLeft={12} flex={1}>
                      <Box lineHeight="1.5" opacity="0.7" fontSize={12}>
                        {capitalizeFirstLetter(groupKey)} {number}A
                      </Box>
                      <Box lineHeight="1.5">
                        {colors[groupKey][`${number}A`].split(',').join(', ')}
                      </Box>
                    </Box>
                  </Box>
                )
              })}
          </Box>
        )
      })}
    </Box>

    <h2>Shades</h2>
    <p>
      In the color system all colors above <code>500</code> are shades of the
      base color.
    </p>
    <Box marginTop={32}>
      {Object.keys(colors)
        .filter(groupKey => groupKey !== 'white')
        .map(groupKey => {
          return (
            <Box
              key={groupKey}
              marginBottom={16}
              borderTop={`1px solid ${colors.neutral['15A']} `}
            >
              <h3>{capitalizeFirstLetter(groupKey)} Shades</h3>
              {Object.keys(colors[groupKey])
                .filter(number => Number(number) > 500)
                .map(number => {
                  return (
                    <Box
                      key={number}
                      display="flex"
                      marginY={12}
                      alignItems="center"
                    >
                      <Box
                        style={{ backgroundColor: colors[groupKey][number] }}
                        width={48}
                        height={48}
                      />
                      <Box paddingLeft={12} flex={1}>
                        <Box lineHeight="1.5" opacity="0.7" fontSize={12}>
                          {capitalizeFirstLetter(groupKey)} {number}
                        </Box>
                        <Box lineHeight="1.5">{colors[groupKey][number]}</Box>
                      </Box>
                    </Box>
                  )
                })}
            </Box>
          )
        })}
    </Box>
  </div>
)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const appearanceOptions = null

const components = null

export default {
  title,
  subTitle,
  designGuidelines,
  appearanceOptions,
  components
}
