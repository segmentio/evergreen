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
import TagInput from './images/illustrations/Tag Input.png'
import TextInput from './images/illustrations/Text Input.png'
import Textarea from './images/illustrations/Textarea.png'
import Toaster from './images/illustrations/Toaster.png'
import Tooltip from './images/illustrations/Tooltip.png'
import Typography from './images/illustrations/Typography.png'

const githubLink = str => {
  return `https://github.com/segmentio/evergreen/tree/master/src/${str}`
}

/**
 * Information Architecture.
 * - Foundation
 * - Components
 *
 * The `id` property is used for routing and also maps to the filename.
 */

export default {
  foundation: {
    title: 'Foundation',
    description: 'Styles and primitive components. Start here.',
    items: [
      {
        id: 'layout-primitives',
        github: githubLink('layers'),
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout'],
        image: LayoutPrimitive
      },
      {
        id: 'typography',
        github: githubLink('typography'),
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
        id: 'colors',
        github: githubLink('theme/src/default-theme'),
        name: 'Colors',
        tags: ['color'],
        image: Colors
      },
      {
        id: 'icons',
        github: githubLink('icon'),
        name: 'Icons',
        tags: ['icon'],
        image: Icons,
        related: ['button']
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
            id: 'button',
            github: githubLink('buttons'),
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: Button
          },
          {
            id: 'tab',
            github: githubLink('tabs'),
            name: 'Tab',
            tags: ['tab', 'tab list', 'tab navigation', 'navigation'],
            image: Tab
          },
          {
            id: 'badge-and-pill',
            github: githubLink('badges'),
            name: 'Badge & Pill',
            tags: ['badge', 'pills', 'tag'],
            image: BadgePill,
            related: ['tag-input']
          },
          {
            id: 'avatar',
            github: githubLink('avatar'),
            name: 'Avatar',
            tags: ['avatar', 'image', 'user'],
            image: Avatar
          }
        ]
      },

      {
        title: 'Text Inputs & File Uploading',
        items: [
          {
            id: 'text-input',
            github: githubLink('text-input'),
            name: 'Text Input',
            image: TextInput
          },
          {
            id: 'search-input',
            github: githubLink('search-input'),
            name: 'Search Input',
            image: SearchInput
          },
          {
            id: 'tag-input',
            github: githubLink('tag-input'),
            name: 'Tag Input',
            image: TagInput,
            tags: ['badge', 'pills', 'tag'],
            related: ['badge-and-pill']
          },
          {
            id: 'textarea',
            github: githubLink('textarea'),
            name: 'Textarea',
            image: Textarea
          },
          {
            id: 'autocomplete',
            github: githubLink('autocomplete'),
            name: 'Autocomplete',
            image: Autocomplete
          },
          {
            id: 'filepicker',
            github: githubLink('file-picker'),
            name: 'Filepicker',
            image: Filepicker
          }
        ]
      },
      {
        title: 'Selects & Dropdown Menus',
        items: [
          { id: 'select', name: 'Select', image: Select },
          {
            id: 'combobox',
            github: githubLink('combobox'),
            name: 'Combobox',
            tags: ['dropdown', 'menu'],
            image: Combobox
          },
          {
            id: 'select-menu',
            github: githubLink('select-menu'),
            name: 'Select Menu',
            tags: ['dropdown', 'menu'],
            image: SelectMenu
          },
          {
            id: 'popover',
            github: githubLink('popover'),
            name: 'Popover',
            tags: ['dropdown'],
            image: Popover
          },
          {
            id: 'menu',
            github: githubLink('menu'),
            name: 'Menu',
            tags: ['dropdown'],
            image: Menu
          }
        ]
      },
      {
        title: 'Toggles',
        items: [
          {
            id: 'checkbox',
            github: githubLink('checkbox'),
            name: 'Checkbox',
            image: Checkbox
          },
          {
            id: 'radio',
            github: githubLink('radio'),
            name: 'Radio',
            image: Radio
          },
          {
            id: 'segmented-control',
            github: githubLink('segmented-control'),
            name: 'Segmented Control',
            tags: ['button group'],
            image: SegmentedControl
          },
          {
            id: 'switch',
            github: githubLink('switch'),
            name: 'Switch',
            image: Switch
          }
        ]
      },
      {
        title: 'Feedback Indicators',
        items: [
          {
            id: 'toaster',
            github: githubLink('toaster'),
            name: 'Toaster',
            tags: ['notifications', 'messages'],
            image: Toaster
          },
          {
            id: 'alert',
            github: githubLink('alert'),
            name: 'Alert',
            tags: ['banners', 'notification', 'messages', 'inline alert'],
            image: Alert
          },
          {
            id: 'spinner',
            github: githubLink('spinner'),
            name: 'Spinner',
            tags: ['loading', 'indicator'],
            image: Spinner
          }
        ]
      },
      {
        title: 'Overlays',
        items: [
          {
            id: 'dialog',
            github: githubLink('dialog'),
            name: 'Dialog',
            tags: ['modal'],
            image: Dialog
          },
          {
            id: 'side-sheet',
            github: githubLink('side-sheet'),
            name: 'Side Sheet',
            tags: ['drawer', 'sheet'],
            image: SideSheet
          },
          {
            id: 'tooltip',
            github: githubLink('tooltip'),
            name: 'Tooltip',
            image: Tooltip
          },
          {
            id: 'corner-dialog',
            github: githubLink('corner-dialog'),
            name: 'Corner Dialog',
            tags: ['notification', 'message'],
            image: CornerDialog
          }
        ]
      },
      {
        title: 'Lists & Tables',
        items: [
          {
            id: 'table',
            github: githubLink('table'),
            name: 'Table',
            image: Table,
            tags: [
              'list',
              'row',
              'cell',
              'TH',
              'TR',
              'THEAD',
              'TBODY',
              'table body'
            ]
          }
        ]
      },
      {
        title: 'Utilities & Helpers',
        items: [
          {
            id: 'portal',
            github: githubLink('portal'),
            name: 'Portal',
            image: Portal
          },
          {
            id: 'positioner',
            github: githubLink('positioner'),
            name: 'Positioner',
            image: Positioner
          },
          {
            id: 'form-field',
            github: githubLink('form-field'),
            name: 'Form Field',
            image: FormField,
            tags: ['validation message', 'label']
          }
        ]
      }
    ]
  }
}
