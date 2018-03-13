module.exports = [
  {
    name: 'Alert',
    path: '/components/alert'
  },
  {
    name: 'Buttons',
    path: '/components/buttons'
  },
  {
    name: 'Dialog',
    path: '/components/dialog'
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
  }
].sort((a, b) => {
  // Lazy way to sort this list so I don't have
  // to sing the alphabet everytime.
  return (b.sidebarOverride || b.name) > (a.sidebarOverride || a.name) ? -1 : 1
})
