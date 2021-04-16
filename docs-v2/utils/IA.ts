const githubLink = (str: string) => {
  return `https://github.com/segmentio/evergreen/tree/master/src/${str}`
}

/**
 * Information Architecture.
 * - Foundation
 * - Components
 *
 * The `id` property is used for routing and also maps to the filename.
 */

export interface Item {
  id?: string
  github?: string
  name?: string
  title?: string
  description?: string
  image?: string
  items?: Item[]
  related?: string[]
  tags?: string[]
}

interface Parent {
  title: string
  description?: string
  items: Item[]
}

type ParentKeys = 'foundation' | 'components'
type IA = Record<ParentKeys, Parent>

const IA: IA = {
  foundation: {
    title: 'Foundation',
    description: 'Styles and primitive components. Start here.',
    items: [
      {
        id: 'layout-primitives',
        github: githubLink('layers'),
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout']
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
        image: '/Typography.png'
      },
      {
        id: 'colors',
        github: githubLink('theme/src/default-theme'),
        name: 'Colors',
        tags: ['color'],
        image: '/Colors.png'
      },
      {
        id: 'icons',
        github: githubLink('icon'),
        name: 'Icons',
        tags: ['icon'],
        image: '/Icons.png',
        related: ['button']
      }
    ]
  },

  components: {
    title: 'Components',
    description: 'Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.',
    items: [
      {
        id: 'button',
        github: githubLink('buttons'),
        name: 'Button',
        description: 'A Button triggers an action or an event.',
        image: '/Button.png',
        tags: ['icon button', 'button', 'action']
      },
      {
        id: 'tab',
        github: githubLink('tabs'),
        name: 'Tab',
        description: 'Use Tabs to organize your content in logical groupings.',
        image: '/Tab.png',
        tags: ['tab', 'tab list', 'tab navigation', 'navigation']
      },
      {
        id: 'badge-and-pill',
        github: githubLink('badges'),
        name: 'Badge & Pill',
        description: 'The Badge and Pill components are labels with a background color.',
        image: '/Badge & Pill.png',
        tags: ['badge', 'pills', 'tag'],
        related: ['tag-input']
      },
      {
        id: 'avatar',
        github: githubLink('avatar'),
        name: 'Avatar',
        description: 'The Avatar component is used to represent users. And should only be used for users.',
        image: '/Avatar.png',
        tags: ['avatar', 'image', 'user']
      },
      {
        id: 'text-input',
        github: githubLink('text-input'),
        image: '/Text Input.png',
        name: 'Text Input',
        description: 'The Text Input component allows user to type in text.'
      },
      {
        id: 'search-input',
        github: githubLink('search-input'),
        name: 'Search Input',
        image: '/Search Input.png',
        description: 'The Search Input component allows user to search via typing in text.'
      },
      {
        id: 'tag-input',
        github: githubLink('tag-input'),
        image: '/Tag Input.png',
        name: 'Tag Input',
        description: 'The Tag Input component allow user to type in multiple values as tags.',
        tags: ['badge', 'pills', 'tag'],
        related: ['badge-and-pill']
      },
      {
        id: 'textarea',
        github: githubLink('textarea'),
        image: '/Textarea.png',
        name: 'Textarea',
        description: 'The Text Area component allow user to type in longer content.',
      },
      {
        id: 'autocomplete',
        github: githubLink('autocomplete'),
        image: '/Autocomplete.png',
        name: 'Autocomplete',
        description: 'The Autocomplete component allow user to type and select from a list of options.',
      },
      {
        id: 'filepicker',
        github: githubLink('file-picker'),
        image: '/Filepicker.png',
        name: 'Filepicker',
        description: 'The Filepicker component is used to select one or multiple files from the file system.',
      },
      {
        id: 'select',
        name: 'Select',
        description: 'The Select component allow user to click and select from a list of option.',
        image: '/Select.png',
        github: githubLink('select')
      },
      {
        id: 'combobox',
        github: githubLink('combobox'),
        name: 'Combobox',
        description: 'The Combobox component is used for selecting an option from a predefined list of options.',
        image: '/Combobox.png',
        tags: ['dropdown', 'menu']
      },
      {
        id: 'select-menu',
        github: githubLink('select-menu'),
        name: 'Select Menu',
        description: 'The Select Menu component allows selection of multiple items from a dropdown list.',
        image: '/Select Menu.png',
        tags: ['dropdown', 'menu']
      },
      {
        id: 'popover',
        github: githubLink('popover'),
        image: '/Popover.png',
        name: 'Popover',
        description: 'The Popover component shows floating content in relation to a target.',
        tags: ['dropdown']
      },
      {
        id: 'menu',
        github: githubLink('menu'),
        image: '/Menu.png',
        name: 'Menu',
        description: 'The Menu component shows a list of actions that user can take.',
        tags: ['dropdown']
      },
      {
        id: 'checkbox',
        github: githubLink('checkbox'),
        image: '/Checkbox.png',
        name: 'Checkbox',
        description: 'The Checkbox component allows user to select multiple items from a list.'
      },
      {
        id: 'radio',
        image: '/Radio.png',
        github: githubLink('radio'),
        name: 'Radio',
        description: 'The Radio component allows user to select a single item from a list.'
      },
      {
        id: 'segmented-control',
        github: githubLink('segmented-control'),
        image: '/Segmented Control.png',
        name: 'Segmented Control',
        tags: ['button group'],
        description: 'I am a lonely component. Don not use me.'
      },
      {
        id: 'switch',
        image: '/Switch.png',
        github: githubLink('switch'),
        name: 'Switch',
        description: 'The Switch component is used to switch between two options and the result of the change is immediate.'
      },
      {
        id: 'toaster',
        github: githubLink('toaster'),
        image: '/Toaster.png',
        name: 'Toaster',
        description: 'The Toaster component is used to show an ephemeral message as an overlay.',
        tags: ['notifications', 'messages']
      },
      {
        id: 'alert',
        github: githubLink('alert'),
        image: '/Alert.png',
        name: 'Alert',
        description: 'The Alert component is used to show feedback to the user about an action or state.',
        tags: ['banners', 'notification', 'messages', 'inline alert']
      },
      {
        id: 'status-indicator',
        github: githubLink('status-indicator'),
        image: '/StatusIndicator.png',
        name: 'Status Indicator',
        description: 'The Status indicator is used to indicate the status of an item.',
        tags: ['status', 'indicator', 'inline']
      },
      {
        id: 'spinner',
        github: githubLink('spinner'),
        image: '/Spinner.png',
        name: 'Spinner',
        description: 'The Spinner component is used to indicate a loading state.',
        tags: ['loading', 'indicator']
      },
      {
        id: 'dialog',
        github: githubLink('dialog'),
        image: '/Dialog.png',
        name: 'Dialog',
        description: 'The Dialog component is used to show content on top of an overlay that requires user interaction.',
        tags: ['modal']
      },
      {
        id: 'side-sheet',
        github: githubLink('side-sheet'),
        image: '/Side Sheet.png',
        name: 'Side Sheet',
        description: 'The Sidesheet component is used to show more details about an object.',
        tags: ['drawer', 'sheet']
      },
      {
        id: 'tooltip',
        image: '/Tooltip.png',
        github: githubLink('tooltip'),
        name: 'Tooltip',
        description: 'The Tooltip component is used to show more content of a target.'
      },
      {
        id: 'corner-dialog',
        image: '/Corner Dialog.png',
        github: githubLink('corner-dialog'),
        name: 'Corner Dialog',
        description: 'The CornerDialog component is used for announcements such as new features and feedback requests.',
        tags: ['notification', 'message']
      },
      {
        id: 'table',
        github: githubLink('table'),
        name: 'Table',
        description: 'The Table component is used to show all information from a data set.',
        image: '/Table.png',
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
      },
      {
        id: 'portal',
        github: githubLink('portal'),
        image: '/Portal.png',
        name: 'Portal'
      },
      {
        id: 'positioner',
        image: '/Positioner.png',
        github: githubLink('positioner'),
        name: 'Positioner'
      },
      {
        id: 'form-field',
        image: '/Form Field.png',
        github: githubLink('form-field'),
        name: 'Form Field',
        tags: ['validation message', 'label']
      }
    ]
  }
}

export default IA
