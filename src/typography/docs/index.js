import React from 'react'
import Box from 'ui-box'
import Text from '../src/Text'
import Paragraph from '../src/Paragraph'
import Heading from '../src/Heading'
import SubHeading from '../src/SubHeading'
import Link from '../src/Link'
import Strong from '../src/Strong'
import Small from '../src/Small'
import Label from '../src/Label'
import Code from '../src/Code'
import Pre from '../src/Pre'
import UnorderedList from '../src/UnorderedList'
import OrderedList from '../src/OrderedList'
import ListItem from '../src/ListItem'

import FontFamilies from '../src/styles/FontFamilies'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceText from '!raw-loader!../src/Text'
import sourceParagraph from '!raw-loader!../src/Paragraph'
import sourceHeading from '!raw-loader!../src/Heading'
import sourceSubHeading from '!raw-loader!../src/SubHeading'
import sourceLink from '!raw-loader!../src/Link'
import sourceStrong from '!raw-loader!../src/Strong'
import sourceSmall from '!raw-loader!../src/Small'
import sourceLabel from '!raw-loader!../src/Label'
import sourceCode from '!raw-loader!../src/Code'
import sourcePre from '!raw-loader!../src/Pre'
import sourceUnorderedList from '!raw-loader!../src/UnorderedList'
import sourceOrderedList from '!raw-loader!../src/OrderedList'
import sourceListItem from '!raw-loader!../src/ListItem'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleTextBasic from './examples/Text-basic.example'
import exampleParagraphBasic from './examples/Paragraph-basic.example'
import exampleHeadingBasic from './examples/Heading-basic.example'
import exampleSubHeadingBasic from './examples/SubHeading-basic.example'
import exampleLinkBasic from './examples/Link-basic.example'
import exampleStrongBasic from './examples/Strong-basic.example'
import exampleSmallBasic from './examples/Small-basic.example'
import exampleLabelBasic from './examples/Label-basic.example'
import exampleCodeBasic from './examples/Code-basic.example'
import examplePreBasic from './examples/Pre-basic.example'
import exampleUnorderedListBasic from './examples/UnorderedList-basic.example'
import exampleOrderedListBasic from './examples/OrderedList-basic.example'
import exampleListItemBasic from './examples/ListItem-basic.example'

const title = 'Typography'
const subTitle = 'A set of components for typography.'

const designGuidelines = (
  <div>
    <p>
      Typography in Evergreen uses the system font stack, that means that it is
      using different fonts on Windows, Mac and Linux. This makes the experience
      feel native to the OS and font rendering is fast.
    </p>
    <h3>Font Families</h3>
    <p>
      Evergreen uses three font family stacks, ui, display and mono. Text
      components willy set the font family accordingly to their use case. For
      example, <code>Heading</code> components will use display and{' '}
      <code>Code</code> components will use mono.
    </p>
    <br />
    {Object.keys(FontFamilies).map(key => {
      return (
        <div key={key}>
          <code>{key}</code>
          <br /> <br /> <pre>{FontFamilies[key]}</pre>
          <br /> <br />
        </div>
      )
    })}
  </div>
)

const implementationDetails = (
  <div>
    <p>
      Typography in Evergreen is currently a very flexible system. In the future
      some of the APIs might slightly change and be more locked down.
    </p>
    <p>
      The idea behind the type system in Evergreen is that each typography
      component composes the base <code>Text</code> component. For example, the{' '}
      <code>Strong</code> component composes the <code>Text</code> component and
      sets the font weight property.
    </p>
    <h3>Available Text Sizes</h3>
    <p>
      Because all the typography components compose the <code>Text</code>{' '}
      component, the <code>size</code> property is available on all of those
      components. The <code>size</code> property supports the following values.
    </p>
    <ul>
      <li>100</li>
      <li>200</li>
      <li>300</li>
      <li>400</li>
      <li>500</li>
      <li>600</li>
      <li>700</li>
      <li>800</li>
      <li>900</li>
    </ul>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Text,
  Paragraph,
  Heading,
  SubHeading,
  Link,
  Strong,
  Small,
  Label,
  Code,
  Pre,
  UnorderedList,
  OrderedList,
  ListItem
}

const components = [
  {
    name: 'Text',
    source: sourceText,
    description: (
      <p>
        The <code>Text</code> component is a <code>span</code> by default. This
        component is generally used as the base of other components. If you need{' '}
        <code>Text</code> to be a block use <code>{`<Text is="p" />`}</code> or
        a <code>Paragraph</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Text Example',
        codeText: exampleTextBasic,
        scope
      }
    ]
  },
  {
    name: 'Paragraph',
    source: sourceParagraph,
    description: (
      <p>
        The <code>Paragraph</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Paragraph Example',
        codeText: exampleParagraphBasic,
        scope
      }
    ]
  },
  {
    name: 'Heading',
    source: sourceHeading,
    description: (
      <p>
        The <code>Heading</code> component is used for titles and headings. Make
        sure to use <code>isUppercase</code> when using sizes 100 and 200.
      </p>
    ),
    examples: [
      {
        title: 'Basic Heading Example',
        codeText: exampleHeadingBasic,
        scope
      }
    ]
  },
  {
    name: 'SubHeading',
    source: sourceSubHeading,
    description: (
      <p>
        The <code>SubHeading</code> component is currently rarely used and might
        get deprecated in the future. Make sure to use <code>isUppercase</code>{' '}
        when using sizes 100 and 200.
      </p>
    ),
    examples: [
      {
        title: 'Basic SubHeading Example',
        codeText: exampleSubHeadingBasic,
        scope
      }
    ]
  },
  {
    name: 'Link',
    source: sourceLink,
    description: (
      <p>
        The <code>Link</code> component is a anchor element by default.
      </p>
    ),
    examples: [
      {
        title: 'Basic Link Example',
        codeText: exampleLinkBasic,
        scope
      }
    ]
  },
  {
    name: 'Strong',
    source: sourceStrong,
    description: (
      <p>
        The <code>Strong</code> component. Make sure to set the{' '}
        <code>size</code> property if you are using this within a other text
        component such as a <code>Paragraph</code>.
      </p>
    ),
    examples: [
      {
        title: 'Basic Strong Example',
        codeText: exampleStrongBasic,
        scope
      }
    ]
  },
  {
    name: 'Small',
    source: sourceSmall,
    description: (
      <p>
        The <code>Small</code> component. Make sure to set the <code>size</code>{' '}
        property if you are using this within a other text component such as a{' '}
        <code>Paragraph</code>.
      </p>
    ),
    examples: [
      {
        title: 'Basic Small Example',
        codeText: exampleSmallBasic,
        scope
      }
    ]
  },
  {
    name: 'Label',
    source: sourceLabel,
    description: (
      <p>
        The <code>Label</code> component is the same as the <code>Text</code>{' '}
        component but is a <code>label</code> element by default. Make sure to
        use the <code>for</code> attribute when using this component in forms.
      </p>
    ),
    examples: [
      {
        title: 'Basic Label Example',
        codeText: exampleLabelBasic,
        scope
      }
    ]
  },
  {
    name: 'Code',
    source: sourceCode,
    description: (
      <p>
        The <code>Code</code> component is the same as the <code>Text</code>{' '}
        component but is a <code>code</code> element by default. This component
        sets the the font family to <code>mono</code>.
      </p>
    ),
    examples: [
      {
        title: 'Basic Code Example',
        codeText: exampleCodeBasic,
        scope
      }
    ]
  },
  {
    name: 'Pre',
    source: sourcePre,
    description: (
      <p>
        The <code>Pre</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Pre Example',
        codeText: examplePreBasic,
        scope
      }
    ]
  },
  {
    name: 'UnorderedList',
    source: sourceUnorderedList,
    description: (
      <p>
        The <code>UnorderedList</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic UnorderedList Example',
        codeText: exampleUnorderedListBasic,
        scope
      }
    ]
  },
  {
    name: 'OrderedList',
    source: sourceOrderedList,
    description: (
      <p>
        The <code>OrderedList</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic OrderedList Example',
        codeText: exampleOrderedListBasic,
        scope
      }
    ]
  },
  {
    name: 'ListItem',
    source: sourceListItem,
    description: (
      <p>
        The <code>ListItem</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic ListItem Example',
        codeText: exampleListItemBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  designGuidelines,
  implementationDetails,
  appearanceOptions,
  components
}
