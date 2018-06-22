import React from 'react'
import ColorExamples from './ColorExamples'

const title = 'Colors'
const subTitle = 'The Evergreen default theme color system.'

const designGuidelines = (
  <div>
    <p>
      The color system for a product has many requirements and constraints.
      There is a need to be intentional and functional with color use. Although
      the Evergreen color system has a bit of overlap with the Segment brand.
      There are also many other colors not found in the Segment brand.
    </p>
    <h3>Design Values</h3>
    <ul>
      <li>
        <strong>Intentional:</strong> use colors in a functional way to show
        intent when needed.
      </li>
      <li>
        <strong>Accessible:</strong> use colors with as much contrast as
        possible while still being beautiful. Break this rule for the green
        brand color. Prevent muddy neutral colors.
      </li>
      <li>
        <strong>High Dynamic Range:</strong> use very light neutral colors for
        background colors. Allow for a wide range of the color spectrum.
      </li>
    </ul>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The color system in Evergreen is located in the theme and is used
      throughout the theme. There is no real dependency on any of the colors
      directly within components. Components always access a theme color or
      property through a get function. For example,{` `}
      <code>theme.getTextColor</code> is a required function in the Evergreen
      theme, <code>theme.colors</code> is not a required property.
    </p>
  </div>
)

const customExample = <ColorExamples marginTop={40} />

const appearanceOptions = null

const components = null

export default {
  title,
  subTitle,
  designGuidelines,
  implementationDetails,
  appearanceOptions,
  components,
  customExample
}
