import SectionHeading from './renderers/SectionHeading'
import Code from './renderers/Code'
import InlineCode from './renderers/InlineCode'
import Blockquote from './renderers/Blockquote'
import RuleCard from './renderers/RuleCard'
import RuleLayout from './renderers/RuleLayout'
import ColorSwatch from '../ColorSwatch'
import IconSearch from '../IconSearch'
import { Paragraph, Strong, Ol, Ul, Li, majorScale, Link as EvergreenLink } from 'evergreen-ui'

const componentMapping = {
  h1: (props: any) => <SectionHeading size={800} {...props} />,
  h2: (props: any) => <SectionHeading size={700} {...props} />,
  h3: (props: any) => <SectionHeading size={600} {...props} />,
  h4: (props: any) => <SectionHeading size={500} {...props} />,
  h5: (props: any) => <SectionHeading size={300} {...props} />,
  h6: (props: any) => <SectionHeading size={200} {...props} />,
  code: (props: { className: string; metastring: string; children: any }) => <Code {...props} />,
  p: (props: any) => <Paragraph marginBottom={majorScale(3)} {...props} />,
  a: (props: any) => <EvergreenLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ol: (props: any) => <Ol {...props} />,
  ul: (props: any) => <Ul {...props} marginTop="-16px" />,
  li: (props: any) => <Li {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
  blockquote: Blockquote,
  ColorSwatch,
  IconSearch,
  RuleCard,
  RuleLayout,
}

export default componentMapping
