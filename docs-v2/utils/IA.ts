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
    items: [
      {
        title: 'Buttons & Atomic Elements',
        items: [
          {
            id: 'button',
            github: githubLink('buttons'),
            name: 'Button',
            image: '/Button.png',
            tags: ['icon button', 'button', 'action']
          },
          {
            id: 'tab',
            github: githubLink('tabs'),
            name: 'Tab',
            image: '/Tab.png',
            tags: ['tab', 'tab list', 'tab navigation', 'navigation']
          },
          {
            id: 'badge-and-pill',
            github: githubLink('badges'),
            name: 'Badge & Pill',
            image: '/Badge & Pill.png',
            tags: ['badge', 'pills', 'tag'],
            related: ['tag-input']
          },
          {
            id: 'avatar',
            github: githubLink('avatar'),
            name: 'Avatar',
            image: '/Avatar.png',
            tags: ['avatar', 'image', 'user']
          }
        ]
      },

      {
        title: 'Text Inputs & File Uploading',
        items: [
          {
            id: 'text-input',
            github: githubLink('text-input'),
            image: '/Text Input.png',
            name: 'Text Input'
          },
          {
            id: 'search-input',
            github: githubLink('search-input'),
            name: 'Search Input',
            image: '/Search Input.png'
          },
          {
            id: 'tag-input',
            github: githubLink('tag-input'),
            image: '/Tag Input.png',
            name: 'Tag Input',

            tags: ['badge', 'pills', 'tag'],
            related: ['badge-and-pill']
          },
          {
            id: 'textarea',
            github: githubLink('textarea'),
            image: '/Textarea.png',
            name: 'Textarea'
          },
          {
            id: 'autocomplete',
            github: githubLink('autocomplete'),
            image: '/Autocomplete.png',
            name: 'Autocomplete'
          },
          {
            id: 'filepicker',
            github: githubLink('file-picker'),
            image: '/Filepicker.png',
            name: 'Filepicker'
          }
        ]
      },
      {
        title: 'Selects & Dropdown Menus',
        items: [
          {
            id: 'select',
            name: 'Select',
            image: '/Select.png',
            github: githubLink('select')
          },
          {
            id: 'combobox',
            github: githubLink('combobox'),
            name: 'Combobox',
            image: '/Combobox.png',
            tags: ['dropdown', 'menu']
          },
          {
            id: 'select-menu',
            github: githubLink('select-menu'),
            name: 'Select Menu',
            image: '/Select Menu.png',
            tags: ['dropdown', 'menu']
          },
          {
            id: 'popover',
            github: githubLink('popover'),
            image: '/Popover.png',
            name: 'Popover',
            tags: ['dropdown']
          },
          {
            id: 'menu',
            github: githubLink('menu'),
            image: '/Menu.png',
            name: 'Menu',
            tags: ['dropdown']
          }
        ]
      },
      {
        title: 'Toggles',
        items: [
          {
            id: 'checkbox',
            github: githubLink('checkbox'),
            image: '/Checkbox.png',
            name: 'Checkbox'
          },
          {
            id: 'radio',
            image: '/Radio.png',
            github: githubLink('radio'),
            name: 'Radio'
          },
          {
            id: 'segmented-control',
            github: githubLink('segmented-control'),
            image: '/Segmented Control.png',
            name: 'Segmented Control',
            tags: ['button group']
          },
          {
            id: 'switch',
            image: '/Switch.png',
            github: githubLink('switch'),
            name: 'Switch'
          }
        ]
      },
      {
        title: 'Feedback Indicators',
        items: [
          {
            id: 'toaster',
            github: githubLink('toaster'),
            image: '/Toaster.png',
            name: 'Toaster',
            tags: ['notifications', 'messages']
          },
          {
            id: 'alert',
            github: githubLink('alert'),
            image: '/Alert.png',
            name: 'Alert',
            tags: ['banners', 'notification', 'messages', 'inline alert']
          },
          {
            id: 'status-indicator',
            github: githubLink('status-indicator'),
            image: '/StatusIndicator.png',
            name: 'Status Indicator',
            tags: ['status', 'indicator', 'inline']
          },
          {
            id: 'spinner',
            github: githubLink('spinner'),
            image: '/Spinner.png',
            name: 'Spinner',
            tags: ['loading', 'indicator']
          }
        ]
      },
      {
        title: 'Overlays',
        items: [
          {
            id: 'dialog',
            github: githubLink('dialog'),
            image: '/Dialog.png',
            name: 'Dialog',
            tags: ['modal']
          },
          {
            id: 'side-sheet',
            github: githubLink('side-sheet'),
            image: '/Side Sheet.png',
            name: 'Side Sheet',
            tags: ['drawer', 'sheet']
          },
          {
            id: 'tooltip',
            image: '/Tooltip.png',
            github: githubLink('tooltip'),
            name: 'Tooltip'
          },
          {
            id: 'corner-dialog',
            image: '/Corner Dialog.png',
            github: githubLink('corner-dialog'),
            name: 'Corner Dialog',
            tags: ['notification', 'message']
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
          }
        ]
      },
      {
        title: 'Utilities & Helpers',
        items: [
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
    ]
  }
}

export default IA
