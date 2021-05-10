import SectionHeading from './renderers/SectionHeading'
import Code from './renderers/Code'
import InlineCode from './renderers/InlineCode'
import Blockquote from './renderers/Blockquote'
import ColorSwatch from '../ColorSwatch'
import { Paragraph, Strong, Ol, Ul, Li, majorScale } from 'evergreen-ui'

const componentMapping = {
  h1: (props: any) => <SectionHeading size={800} {...props} />,
  h2: (props: any) => <SectionHeading size={700} {...props} />,
  h3: (props: any) => <SectionHeading size={600} {...props} />,
  h4: (props: any) => <SectionHeading size={500} {...props} />,
  h5: (props: any) => <SectionHeading size={300} {...props} />,
  h6: (props: any) => <SectionHeading size={200} {...props} />,
  code: (props: { className: string; metastring: string; children: any }) => <Code {...props} />,
  p: (props: any) => <Paragraph marginBottom={majorScale(3)} {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ol: (props: any) => <Ol {...props} />,
  ul: (props: any) => <Ul {...props} />,
  li: (props: any) => <Li {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
  blockquote: Blockquote,
  ColorSwatch,
}

export default componentMapping
