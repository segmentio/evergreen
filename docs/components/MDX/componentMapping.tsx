import SectionHeading, { SectionHeadingProps } from './renderers/SectionHeading'
import SourceCode, { SourceCodeProps } from './renderers/SourceCode'
import InlineCode from './renderers/InlineCode'
import Blockquote from './renderers/Blockquote'
import RuleCard from './renderers/RuleCard'
import RuleLayout from './renderers/RuleLayout'
import ColorSwatch from '../ColorSwatch'
import IconSearch from '../IconSearch'
import {
  InlineAlert,
  Table,
  Pane,
  Paragraph,
  Strong,
  Ol,
  Ul,
  Li,
  majorScale,
  Link as EvergreenLink,
  PaneProps,
  TableProps,
  TableHeadProps,
  TextTableCellProps,
  TableRowProps,
  AlertProps,
  Alert,
  InlineAlertProps,
  ParagraphProps,
  LinkProps,
  StrongProps,
  OrderedListProps,
  UnorderedListProps,
  ListItemProps,
  CodeProps,
} from 'evergreen-ui'

const componentMapping = {
  h1: (props: SectionHeadingProps) => <SectionHeading size={800} {...props} />,
  h2: (props: SectionHeadingProps) => <SectionHeading size={700} {...props} />,
  h3: (props: SectionHeadingProps) => <SectionHeading size={600} {...props} />,
  h4: (props: SectionHeadingProps) => <SectionHeading size={500} {...props} />,
  h5: (props: SectionHeadingProps) => <SectionHeading size={300} {...props} />,
  h6: (props: SectionHeadingProps) => <SectionHeading size={200} {...props} />,
  code: (props: SourceCodeProps) => <SourceCode {...props} />,
  p: (props: ParagraphProps) => <Paragraph marginBottom={majorScale(3)} {...props} />,
  a: (props: LinkProps) => <EvergreenLink {...props} />,
  strong: (props: StrongProps) => <Strong {...props} />,
  ol: (props: OrderedListProps) => <Ol {...props} />,
  ul: (props: UnorderedListProps) => <Ul {...props} marginTop="-16px" />,
  li: (props: ListItemProps) => <Li {...props} />,
  inlineCode: (props: CodeProps) => <InlineCode {...props} />,
  Alert: (props: AlertProps) => <Alert {...props} />,
  InlineAlert: (props: InlineAlertProps) => <InlineAlert marginBottom={majorScale(3)} {...props} />,
  Pane: (props: PaneProps) => <Pane {...props} />,
  Table: (props: TableProps) => <Table {...props} />,
  TableHead: (props: TableHeadProps) => <Table.Head {...props} />,
  TableRow: (props: TableRowProps) => <Table.Row {...props} />,
  TableTextHeaderCell: (props: TextTableCellProps) => <Table.TextHeaderCell {...props} />,
  TableTextCell: (props: TextTableCellProps) => <Table.TextCell {...props} />,
  blockquote: Blockquote,
  ColorSwatch,
  IconSearch,
  RuleCard,
  RuleLayout,
}

export default componentMapping
