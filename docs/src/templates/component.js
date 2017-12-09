import React from 'react'
import getComponent from '../utils/getComponent'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import ComponentReadme from '../components/ComponentReadme'

// Mock data for now
const data = {
  name: 'Buttons',
  packageJSON: {
    name: 'evergreen-buttons',
    version: '2.18.18',
    description: 'React components: Button',
    main: 'lib/index.js',
    keywords: [
      'evergreen',
      'segment',
      'ui',
      'react',
      'Button',
      'ButtonAppearances'
    ],
    author: 'Segment',
    license: 'MIT',
    peerDependencies: {
      'prop-types': '^15.0.0',
      react: '^16.0.0'
    },
    dependencies: {
      'evergreen-colors': '^2.18.14',
      'evergreen-icons': '^2.18.14',
      'evergreen-shared-styles': '^2.18.18',
      'evergreen-typography': '^2.18.14',
      'ui-box': '^0.5.4'
    },
    devDependencies: {
      'evergreen-layers': '^2.18.14'
    }
  }
}

export default stuff => {
  const docs = getComponent('buttons')
  console.log('stuff', docs)
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <Sidebar />
        <div className="MainLayout-content">
          <ComponentReadme {...data} designGuidelines={docs} />
        </div>
      </main>
    </div>
  )
}
