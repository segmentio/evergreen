import { Components } from '../../../types/theme/components'
import { PseudoSelectorKeys } from '../../../types/theme/pseudo-selectors'
import Alert from './alert'
import Avatar from './avatar'
import Badge from './badge'
import Button from './button'
import Card from './card'
import Checkbox from './checkbox'
import Code from './code'
import DialogBody from './dialog-body'
import DialogFooter from './dialog-footer'
import DialogHeader from './dialog-header'
import FileCard from './file-card'
import FileUploader from './file-uploader'
import Group from './group'
import Heading from './heading'
import Icon from './icon'
import InlineAlert from './inline-alert'
import Input from './input'
import Label from './label'
import Link from './link'
import List from './list'
import MenuItem from './menu-item'
import Option from './option'
import Pane from './pane'
import Paragraph from './paragraph'
import Radio from './radio'
import Select from './select'
import Spinner from './spinner'
import Switch from './switch'
import Tab from './tab'
import Table from './table'
import TableCell from './table-cell'
import TableHead from './table-head'
import TableRow from './table-row'
import TagInput from './tag-input'
import Text from './text'
import TextDropdownButton from './text-dropdown-button'
import Tooltip from './tooltip'

export type DefaultThemeAppearances<T extends Components> = keyof typeof components[T]['appearances']
export type DefaultThemeSizes<T extends Components> = keyof typeof components[T]['sizes']
export type DefaultThemePseudoSelectors<T extends Components> = PseudoSelectorKeys<
  keyof typeof components[T]['baseStyle']
>

const components = {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Code,
  DialogBody,
  DialogFooter,
  DialogHeader,
  FileCard,
  FileUploader,
  Group,
  Heading,
  Icon,
  InlineAlert,
  Input,
  Label,
  List,
  Link,
  MenuItem,
  Option,
  Pane,
  Paragraph,
  Radio,
  Select,
  Spinner,
  Switch,
  Tab,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TagInput,
  Text,
  TextDropdownButton,
  Tooltip
}

export default components
