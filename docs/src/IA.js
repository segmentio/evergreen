import Alert from './images/illustrations/Alert.png'
import Autocomplete from './images/illustrations/Autocomplete.png'
import Avatar from './images/illustrations/Avatar.png'
import BadgePill from './images/illustrations/Badge & Pill.png'
import Button from './images/illustrations/Button.png'
import Checkbox from './images/illustrations/Checkbox.png'
import Colors from './images/illustrations/Colors.png'
import Combobox from './images/illustrations/Combobox.png'
import CornerDialog from './images/illustrations/Corner Dialog.png'
import Dialog from './images/illustrations/Dialog.png'
import Filepicker from './images/illustrations/Filepicker.png'
import FormField from './images/illustrations/Form Field.png'
import Icons from './images/illustrations/Icons.png'
import LayoutPrimitive from './images/illustrations/Layout Primitive.png'
import Menu from './images/illustrations/Menu.png'
import Popover from './images/illustrations/Popover.png'
import Portal from './images/illustrations/Portal.png'
import Positioner from './images/illustrations/Positioner.png'
import Radio from './images/illustrations/Radio.png'
import SearchInput from './images/illustrations/Search Input.png'
import SegmentedControl from './images/illustrations/Segmented Control.png'
import SelectMenu from './images/illustrations/Select Menu.png'
import Select from './images/illustrations/Select.png'
import SideSheet from './images/illustrations/Side Sheet.png'
import Spinner from './images/illustrations/Spinner.png'
import Switch from './images/illustrations/Switch.png'
import Tab from './images/illustrations/Tab.png'
import Table from './images/illustrations/Table.png'
import TextInput from './images/illustrations/Text Input.png'
import Textarea from './images/illustrations/Textarea.png'
import Toaster from './images/illustrations/Toaster.png'
import Tooltip from './images/illustrations/Tooltip.png'
import Typography from './images/illustrations/Typography.png'

/**
 * Information Architecture.
 * - Foundation
 * - Components
 */

export default {
  foundation: {
    title: 'Foundation',
    description: 'Styles and primitive components. Start here.',
    items: [
      {
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout'],
        image: LayoutPrimitive
      },
      {
        name: 'Typography',
        tags: [
          'heading',
          'paragraph',
          'text',
          'link',
          'list',
          'ordered list',
          'unordered list',
          'strong',
          'small'
        ],
        image: Typography
      },
      {
        name: 'Colors',
        tags: ['color'],
        image: Colors
      },
      {
        name: 'Icons',
        tags: ['icon'],
        image: Icons
      }
    ]
  },

  components: {
    title: 'Components',
    items: [
      {
        title: 'Buttons & Atomic Elements',
        items: [
          {
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: Button
          },
          {
            name: 'Tab',
            tags: ['tab'],
            image: Tab
          },
          {
            name: 'Badge & Pill',
            tags: ['badge', 'pills'],
            image: BadgePill
          },
          {
            name: 'Avatar',
            tags: ['avatar'],
            image: Avatar
          }
        ]
      },

      {
        title: 'Text Inputs & File Uploading',
        items: [
          { name: 'Text Input', image: TextInput },
          { name: 'Search Input', image: SearchInput },
          { name: 'Textarea', image: Textarea },
          { name: 'Autocomplete', image: Autocomplete },
          { name: 'Filepicker', image: Filepicker }
        ]
      },
      {
        title: 'Selects & Dropdown Menus',
        items: [
          { name: 'Select', image: Select },
          { name: 'Combobox', tags: ['dropdown', 'menu'], image: Combobox },
          {
            name: 'Select Menu',
            tags: ['dropdown', 'menu'],
            image: SelectMenu
          },
          { name: 'Popover', tags: ['dropdown'], image: Popover },
          { name: 'Menu', tags: ['dropdown'], image: Menu }
        ]
      },
      {
        title: 'Toggles',
        items: [
          { name: 'Checkbox', image: Checkbox },
          { name: 'Radio', image: Radio },
          {
            name: 'Segmented Control',
            tags: ['button group'],
            image: SegmentedControl
          },
          { name: 'Switch', image: Switch }
        ]
      },
      {
        title: 'Feedback Indicators',
        items: [
          {
            name: 'Toaster',
            tags: ['notifications', 'messages'],
            image: Toaster
          },
          {
            name: 'Alert',
            tags: ['banners', 'notification', 'messages', 'inline alert'],
            image: Alert
          },
          { name: 'Spinner', tags: ['loading', 'indicator'], image: Spinner }
        ]
      },
      {
        title: 'Overlays',
        items: [
          { name: 'Dialog', tags: ['modal'], image: Dialog },
          { name: 'Side Sheet', tags: ['drawer', 'sheet'], image: SideSheet },
          { name: 'Tooltip', image: Tooltip },
          {
            name: 'Corner Dialog',
            tags: ['notification', 'message'],
            image: CornerDialog
          }
        ]
      },
      {
        title: 'Lists & Tables',
        items: [{ name: 'Table', image: Table }]
      },
      {
        title: 'Utilities & Helpers',
        items: [
          {
            name: 'Portal',
            image: Portal
          },
          { name: 'Positioner', image: Positioner },
          { name: 'Form Field', image: FormField }
        ]
      }
    ]
  }
}
