module.exports = [
  {
    name: 'Segmented Control',
    path: '/components/segmented-control'
  },
  {
    name: 'Radio',
    path: '/components/radio'
  },
  {
    name: 'Alert',
    path: '/components/alert'
  },
  {
    name: 'Badges',
    path: '/components/badges'
  },
  {
    name: 'Buttons',
    path: '/components/buttons'
  },
  {
    name: 'Combobox',
    path: '/components/combobox'
  },
  {
    name: 'Dialog',
    path: '/components/dialog'
  },
  {
    name: 'Corner Dialog',
    path: '/components/corner-dialog'
  },
  {
    name: 'Table',
    path: '/components/table'
  },
  {
    name: 'Toaster',
    path: '/components/toaster'
  },
  {
    name: 'Layers',
    sidebarOverride: 'Pane & Card',
    path: '/components/layers'
  },
  {
    name: 'Typography',
    path: '/components/typography'
  },
  {
    name: 'Colors',
    path: '/components/colors'
  },
  {
    name: 'Select',
    path: '/components/select'
  },
  {
    name: 'Select Menu',
    path: '/components/select-menu'
  },
  {
    name: 'Side Sheet',
    path: '/components/side-sheet'
  },
  {
    name: 'Text Input',
    path: '/components/text-input'
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip'
  },
  {
    name: 'Search Input',
    path: '/components/search-input'
  },
  {
    name: 'Autocomplete',
    path: '/components/autocomplete'
  },
  {
    name: 'Popover',
    path: '/components/popover'
  },
  {
    name: 'Icon',
    path: '/components/icon'
  }
].sort((a, b) => {
  // Lazy way to sort this list so I don't have
  // to sing the alphabet everytime.
  return (b.sidebarOverride || b.name) > (a.sidebarOverride || a.name) ? -1 : 1
})
