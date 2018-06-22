import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Pane } from '../../layers'
import { ThemeConsumer } from '../../theme'
import Text from '../src/Text'
import Paragraph from '../src/Paragraph'
import Heading from '../src/Heading'
import Link from '../src/Link'
import Strong from '../src/Strong'
import Small from '../src/Small'
import Label from '../src/Label'
import Code from '../src/Code'
import Pre from '../src/Pre'
import UnorderedList from '../src/UnorderedList'
import OrderedList from '../src/OrderedList'
import ListItem from '../src/ListItem'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceText from '!raw-loader!../src/Text'
import sourceParagraph from '!raw-loader!../src/Paragraph'
import sourceHeading from '!raw-loader!../src/Heading'
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
      Typography in Evergreen uses the system font stack, fonts are different on
      Windows, Mac and Linux. This makes the experience feel native to the OS
      and font rendering is fast.
    </p>
    <h3>Font Families</h3>
    <p>
      Evergreen uses three font family stacks, ui, display and mono. Text
      components will set the font family accordingly to their use case. For
      example, <code>Heading</code> components will use display and{' '}
      <code>Code</code> components will use mono.
    </p>
    <ThemeConsumer>
      {theme => (
        <div>
          {Object.keys(theme.typography.fontFamilies).map(key => {
            return (
              <p key={key}>
                <code>{key}:</code>{' '}
                <pre>{theme.typography.fontFamilies[key]}</pre>
              </p>
            )
          })}
        </div>
      )}
    </ThemeConsumer>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      There a number of components in Evergreen for Typography. The most notable
      components are the <code>Heading</code>, <code>Text</code> and{' '}
      <code>Paragraph</code> components. The styles for these components are
      loaded from the theme.
    </p>
    <p>
      Most other components such as <code>Strong</code>, <code>Label</code>
      implement the <code>Text</code> component with a bunch of properties set.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Text,
  Paragraph,
  Heading,
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

class TextStylePreview extends React.Component {
  static propTypes = {
    renderComponent: PropTypes.func.isRequired,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    lineHeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    marginTop: PropTypes.number,
    fontFamilies: PropTypes.object,
    fontFamily: PropTypes.string,
    color: PropTypes.string
  }

  getFontFamilyVariable() {
    return (
      Object.keys(this.props.fontFamilies).find(key => {
        return this.props.fontFamilies[key] === this.props.fontFamily
      }) || this.props.fontFamily
    )
  }

  render() {
    return (
      <Pane display="flex" marginTop={24} paddingTop={24} borderTop>
        <Box flexShrink={0} flexGrow={1} flex={1} paddingRight={12}>
          {this.props.renderComponent()}
        </Box>
        <Box flexShrink={0} flexGrow={1} flex={1} className="Content">
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            Font family: <strong>{this.getFontFamilyVariable()}</strong>
            <br />
            Font size: <strong>{this.props.fontSize}</strong>
            <br />
            Font weight: <strong>{this.props.fontWeight}</strong>
            <br />
            Line height: <strong>{this.props.lineHeight}</strong>
            <br />
            Letter spacing: <strong>{this.props.letterSpacing}</strong>
            <br />
            {this.props.color && (
              <React.Fragment>
                color: <strong>{this.props.color}</strong>
                <br />
              </React.Fragment>
            )}
            {this.props.marginTop && (
              <React.Fragment>
                Default margin top: <strong>{this.props.marginTop}px</strong>
                <br />
              </React.Fragment>
            )}
          </p>
        </Box>
      </Pane>
    )
  }
}

const customExample = (
  <ThemeConsumer>
    {theme => (
      <div>
        <Pane marginTop={48} className="Content">
          <h2>Heading Styles</h2>
        </Pane>
        <Pane borderBottom paddingBottom={24}>
          {Object.keys(theme.typography.headings).map(size => {
            return (
              <TextStylePreview
                key={size}
                size={size}
                renderComponent={() => {
                  return <Heading size={size}>Heading {size}</Heading>
                }}
                fontFamilies={theme.typography.fontFamilies}
                {...theme.typography.headings[size]}
              />
            )
          })}
        </Pane>
        <Pane marginTop={48} v className="Content">
          <h2>Text Styles</h2>
        </Pane>
        <Pane borderBottom paddingBottom={24}>
          {Object.keys(theme.typography.text).map(size => {
            return (
              <TextStylePreview
                key={size}
                size={size}
                renderComponent={() => {
                  return <Text size={size}>Text {size}</Text>
                }}
                fontFamilies={theme.typography.fontFamilies}
                fontFamily="ui"
                {...theme.typography.text[size]}
              />
            )
          })}
        </Pane>
        <Pane marginTop={48} v className="Content">
          <h2>Paragraph Styles</h2>
        </Pane>
        <Pane borderBottom paddingBottom={24}>
          {Object.keys(theme.typography.text).map(size => {
            return (
              <TextStylePreview
                key={size}
                size={size}
                renderComponent={() => {
                  return (
                    <Paragraph size={size}>
                      Paragraph {size}. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Paragraph>
                  )
                }}
                fontFamilies={theme.typography.fontFamilies}
                fontFamily="ui"
                {...theme.typography.text[size]}
              />
            )
          })}
        </Pane>
      </div>
    )}
  </ThemeConsumer>
)

const components = [
  {
    name: 'Heading',
    source: sourceHeading,
    description: (
      <div>
        <p>
          The <code>Heading</code> component is used for titles and headings.
        </p>
        <h4>Supported Sizes</h4>
        <ul>
          <li>
            <code>100</code>
          </li>
          <li>
            <code>200</code>
          </li>
          <li>
            <code>300</code>
          </li>
          <li>
            <code>400</code>
          </li>
          <li>
            <code>500</code> — default
          </li>
          <li>
            <code>600</code>
          </li>
          <li>
            <code>700</code>
          </li>
          <li>
            <code>800</code>
          </li>
          <li>
            <code>900</code>
          </li>
        </ul>
      </div>
    ),
    examples: [
      {
        title: 'Heading Examples',
        codeText: exampleHeadingBasic,
        scope
      }
    ]
  },
  {
    name: 'Text',
    source: sourceText,
    description: (
      <div>
        <p>
          The <code>Text</code> component is a <code>span</code> by default. It
          is used for single line text. This component is generally used as the
          base of other components. If you need a multiline paragraph use the{' '}
          <code>Paragraph</code> component.
        </p>
        <h4>Supported Sizes</h4>
        <ul>
          <li>
            <code>300</code>
          </li>
          <li>
            <code>400</code> — default
          </li>
          <li>
            <code>500</code>
          </li>
        </ul>
      </div>
    ),
    examples: [
      {
        title: 'Text Examples',
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
        title: 'Paragraph Examples',
        codeText: exampleParagraphBasic,
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
  },
  {
    name: 'Small',
    source: sourceSmall,
    description: (
      <p>
        The <code>Small</code> component works only inside other text
        components.
      </p>
    ),
    examples: [
      {
        title: 'Basic Small Example',
        codeText: exampleSmallBasic,
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
  components,
  customExample
}
