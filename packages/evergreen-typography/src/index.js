import UnorderedList from './components/UnorderedList'
import OrderedList from './components/OrderedList'
import ListItem from './components/ListItem'

export { default as Text } from './components/Text'
export { default as Paragraph } from './components/Paragraph'
export { default as Heading } from './components/Heading'
export { default as SubHeading } from './components/SubHeading'
export { default as Code } from './components/Code'
export { default as Pre } from './components/Pre'
export { default as Label } from './components/Label'
export { default as Link } from './components/Link'
export { default as Small } from './components/Small'
export { default as Strong } from './components/Strong'
export { default as TextStyles } from './styles/TextStyles'
export { default as FontFamilies } from './styles/FontFamilies'
export { default as TextColors } from './styles/TextColors'
export { default as LinkAppearances } from './styles/LinkAppearances'

const Ul = UnorderedList
const Ol = OrderedList
const Li = ListItem
export { UnorderedList, Ul, OrderedList, Ol, ListItem, Li }
