const githubLink = (str: string) => {
  return `https://github.com/segmentio/evergreen/tree/master/src/${str}`
}

/**
 * Information Architecture.
 * - Introduction
 * - Foundations
 * - Components
 * - Patterns
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
  imageHighlight?: string
  inProgress?: boolean
  related?: string[]
  tags?: string[]
}

interface Parent {
  title: string
  description?: string
  items: Item[]
}

type ParentKeys = 'introduction' | 'foundations' | 'components' | 'patterns'
type IA = Record<ParentKeys, Parent>

const IA: IA = {
  introduction: {
    title: 'Introduction',
    description:
      'Evergreen is a pragmatic UI kit for building evolving products on the web.It is built and maintained open-source by Segment.',
    items: [
      {
        id: 'getting-started',
        name: 'Getting started',
        description: 'About Evergreen, and getting set up with the package locally.',
      },
      {
        id: 'v6-migration-guide',
        name: 'Migrating from v5 to v6',
        description: 'Guide about migrating from previous version of Evergreen into the current one.',
      },
      {
        id: 'theming',
        name: 'Theming',
        description: 'A primer into the (new!) theming architecture behind Evergreen.',
      },
      {
        id: 'what-is-new',
        name: 'What is new',
        description:
          'Evergreen is a living system, which means we are constently making updates to it. You can learn more about those changes and upcoming ones here.',
      },
    ],
  },

  foundations: {
    title: 'Foundations',
    description: 'Styles and primitive components. Start here.',
    items: [
      {
        id: 'typography',
        github: githubLink('typography'),
        name: 'Typography',
        tags: ['heading', 'paragraph', 'text', 'link', 'list', 'ordered list', 'unordered list', 'strong', 'small'],
        image: '/Typography.png',
        imageHighlight: '/Typography-highlight.png',
      },
      {
        id: 'colors',
        github: githubLink('theme/src/default-theme'),
        name: 'Colors',
        tags: ['color'],
        image: '/Colors.png',
        imageHighlight: '/Colors-highlight.png',
      },
      {
        id: 'icons',
        github: githubLink('icon'),
        name: 'Icons',
        tags: ['icon'],
        image: '/Icons.png',
        imageHighlight: '/Icons-highlight.png',
        related: ['button'],
      },
      {
        id: 'layers',
        github: githubLink('layers'),
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout'],
        image: '/Layout.png',
        imageHighlight: '/Layout-highlight.png',
      },
    ],
  },

  components: {
    title: 'Components',
    description:
      'Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.',
    items: [
      {
        id: 'buttons',
        github: githubLink('buttons'),
        name: 'Button',
        description: 'A Button triggers an action or an event.',
        image: '/Button.png',
        imageHighlight: '/Button-highlight.png',
        tags: ['icon button', 'button', 'action'],
      },

      {
        id: 'badges',
        github: githubLink('badges'),
        name: 'Badge & Pill',
        description: 'The Badge and Pill components are labels with a background color.',
        image: '/Badge & Pill.png',
        imageHighlight: '/Badge & Pill-highlight.png',
        tags: ['badge', 'pills', 'tag'],
        related: ['tag-input'],
      },
      {
        id: 'alert',
        github: githubLink('alert'),
        image: '/Alert.png',
        imageHighlight: '/Alert-highlight.png',
        name: 'Alert',
        description: 'The Alert component is used to show feedback to the user about an action or state.',
        tags: ['banners', 'notification', 'messages', 'inline alert'],
      },
      {
        id: 'avatar',
        github: githubLink('avatar'),
        name: 'Avatar',
        description: 'The Avatar component is used to represent users. And should only be used for users.',
        image: '/Avatar.png',
        imageHighlight: '/Avatar-highlight.png',
        tags: ['avatar', 'image', 'user'],
      },
      {
        id: 'tabs',
        github: githubLink('tabs'),
        name: 'Tab',
        description: 'Use Tabs to organize your content in logical groupings.',
        image: '/Tab.png',
        imageHighlight: '/Tab-highlight.png',
        tags: ['tab', 'tab list', 'tab navigation', 'navigation'],
      },
      {
        id: 'text-input',
        github: githubLink('text-input'),
        image: '/Text Input.png',
        imageHighlight: '/Text Input-highlight.png',
        name: 'Text Input',
        description: 'The Text Input component allows user to type in text.',
      },
      {
        id: 'search-input',
        github: githubLink('search-input'),
        name: 'Search Input',
        image: '/Search Input.png',
        imageHighlight: '/Search Input-highlight.png',
        description: 'The Search Input component allows user to search via typing in text.',
      },
      {
        id: 'tag-input',
        github: githubLink('tag-input'),
        image: '/Tag Input.png',
        imageHighlight: '/Tag Input-highlight.png',
        name: 'Tag Input',
        description: 'The Tag Input component allow user to type in multiple values as tags.',
        tags: ['badge', 'pills', 'tag'],
        related: ['badge-and-pill'],
      },
      {
        id: 'textarea',
        github: githubLink('textarea'),
        image: '/Textarea.png',
        imageHighlight: '/Textarea-highlight.png',
        name: 'Textarea',
        description: 'The Text Area component allow user to type in longer content.',
      },
      {
        id: 'autocomplete',
        github: githubLink('autocomplete'),
        image: '/Autocomplete.png',
        imageHighlight: '/Autocomplete-highlight.png',
        name: 'Autocomplete',
        description: 'The Autocomplete component allow user to type and select from a list of options.',
      },
      {
        id: 'file-picker',
        github: githubLink('file-picker'),
        image: '/Filepicker.png',
        imageHighlight: '/Filepicker-highlight.png',
        name: 'Filepicker',
        description: 'The Filepicker component is used to select one or multiple files from the file system.',
      },
      {
        id: 'select',
        name: 'Select',
        description: 'The Select component allow user to click and select from a list of options.',
        image: '/Select.png',
        imageHighlight: '/Select-highlight.png',
        github: githubLink('select'),
      },
      {
        id: 'combobox',
        github: githubLink('combobox'),
        name: 'Combobox',
        description: 'The Combobox component is used for selecting an option from a predefined list of options.',
        image: '/Combobox.png',
        imageHighlight: '/Combobox-highlight.png',
        tags: ['dropdown', 'menu'],
      },
      {
        id: 'select-menu',
        github: githubLink('select-menu'),
        name: 'Select Menu',
        description: 'The Select Menu component allows selection of multiple items from a dropdown list.',
        image: '/Select Menu.png',
        imageHighlight: '/Select Menu-highlight.png',
        tags: ['dropdown', 'menu'],
      },
      {
        id: 'popover',
        github: githubLink('popover'),
        image: '/Popover.png',
        imageHighlight: '/Popover-highlight.png',
        name: 'Popover',
        description: 'The Popover component shows floating content in relation to a target.',
        tags: ['dropdown'],
      },
      {
        id: 'menu',
        github: githubLink('menu'),
        image: '/Menu.png',
        imageHighlight: '/Menu-highlight.png',
        name: 'Menu',
        description: 'The Menu component shows a list of actions that user can take.',
        tags: ['dropdown'],
      },
      {
        id: 'checkbox',
        github: githubLink('checkbox'),
        image: '/Checkbox.png',
        imageHighlight: '/Checkbox-highlight.png',
        name: 'Checkbox',
        description: 'The Checkbox component allows user to select multiple items from a list.',
      },
      {
        id: 'radio',
        image: '/Radio.png',
        imageHighlight: '/Radio-highlight.png',
        github: githubLink('radio'),
        name: 'Radio',
        description: 'The Radio component allows user to select a single item from a list.',
      },
      {
        id: 'pagination',
        image: '/Pagination.png',
        imageHighlight: '/Pagination-highlight.png',
        github: githubLink('pagination'),
        name: 'Pagination',
        description:
          'The Pagination component is used to split up content into several pages and navigate between pages.',
      },
      {
        id: 'pulsar',
        image: '/Pulsar.png',
        imageHighlight: '/Pulsar-highlight.png',
        inProgress: true,
        github: githubLink('pulsar'),
        name: 'Pulsar',
        description:
          'The Pulsar component is a user education UI used to indicate to a user where they should take a particular action.',
      },
      {
        id: 'segmented-control',
        github: githubLink('segmented-control'),
        image: '/Segmented Control.png',
        imageHighlight: '/Segmented Control-highlight.png',
        name: 'Segmented Control',
        tags: ['button group'],
        description: 'The Segmented Control is a component that lets users toggle between up-to-4 options in a row. ',
      },
      {
        id: 'switch',
        image: '/Switch.png',
        imageHighlight: '/Switch-highlight.png',
        github: githubLink('switch'),
        name: 'Switch',
        description:
          'The Switch component is used to switch between two options and the result of the change is immediate.',
      },
      {
        id: 'toaster',
        github: githubLink('toaster'),
        image: '/Toaster.png',
        imageHighlight: '/Toaster-highlight.png',
        name: 'Toaster',
        description: 'The Toaster component is used to show an ephemeral message as an overlay.',
        tags: ['notifications', 'messages'],
      },
      {
        id: 'status-indicator',
        github: githubLink('status-indicator'),
        image: '/Status Indicator.png',
        imageHighlight: '/Status Indicator-highlight.png',
        name: 'Status Indicator',
        description: 'The Status indicator is used to indicate the status of an item.',
        tags: ['status', 'indicator', 'inline'],
      },
      {
        id: 'spinner',
        github: githubLink('spinner'),
        image: '/Spinner.png',
        imageHighlight: '/Spinner-highlight.png',
        name: 'Spinner',
        description: 'The Spinner component is used to indicate a loading state.',
        tags: ['loading', 'indicator'],
      },
      {
        id: 'dialog',
        github: githubLink('dialog'),
        image: '/Dialog.png',
        imageHighlight: '/Dialog-highlight.png',
        name: 'Dialog',
        description:
          'The Dialog component is used to show content on top of an overlay that requires user interaction.',
        tags: ['modal'],
      },
      {
        id: 'side-sheet',
        github: githubLink('side-sheet'),
        image: '/Side Sheet.png',
        imageHighlight: '/Side Sheet-highlight.png',
        name: 'Side Sheet',
        description: 'The Sidesheet component is used to show more details about an object.',
        tags: ['drawer', 'sheet'],
      },
      {
        id: 'tooltip',
        image: '/Tooltip.png',
        imageHighlight: '/Tooltip-highlight.png',
        github: githubLink('tooltip'),
        name: 'Tooltip',
        description: 'The Tooltip component is used to show more content of a target.',
      },
      {
        id: 'corner-dialog',
        image: '/Corner Dialog.png',
        imageHighlight: '/Corner Dialog-highlight.png',
        github: githubLink('corner-dialog'),
        name: 'Corner Dialog',
        description: 'The CornerDialog component is used for announcements such as new features and feedback requests.',
        tags: ['notification', 'message'],
      },
      {
        id: 'table',
        github: githubLink('table'),
        name: 'Table',
        description: 'The Table component is used to show all information from a data set.',
        image: '/Table.png',
        imageHighlight: '/Table-highlight.png',
        tags: ['list', 'row', 'cell', 'TH', 'TR', 'THEAD', 'TBODY', 'table body'],
      },
      {
        id: 'portal',
        github: githubLink('portal'),
        image: '/Portal.png',
        imageHighlight: '/Portal-highlight.png',
        name: 'Portal',
      },
      {
        id: 'positioner',
        image: '/Positioner.png',
        imageHighlight: '/Positioner-highlight.png',
        github: githubLink('positioner'),
        name: 'Positioner',
      },
      {
        id: 'form-field',
        image: '/Form Field.png',
        imageHighlight: '/Form Field-highlight.png',
        github: githubLink('form-field'),
        name: 'Form Field',
        tags: ['validation message', 'label'],
      },
    ],
  },

  patterns: {
    title: 'Patterns',
    description:
      'Patterns are reusable combinations of components that solve common user problems. These best practice solutions help users achieve their goals and help ensure consistency across experiences.',
    items: [
      {
        id: 'empty-states',
        name: 'Empty States',
        inProgress: true,
        description: 'Empty States are a UI affordance for when there is no data available to display to an end-user.',
        image: '/Empty State.png',

        imageHighlight: '/Empty State-highlight.png',
      },
      {
        id: 'table-layout',
        name: 'Table Layout',
        description: 'Coming soon!',
        image: '/Table Layout.png',
        inProgress: true,
        imageHighlight: '/Table Layout-highlight.png',
      },
      {
        id: 'error-messages',
        name: 'Error Messages',
        description: 'Coming soon!',
        image: '/Error Messages.png',
        inProgress: true,
        imageHighlight: '/Error Messages-highlight.png',
      },
    ],
  },
}

export default IA
