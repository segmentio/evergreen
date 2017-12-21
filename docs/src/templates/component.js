import React from 'react'
import getComponent from '../utils/getComponent'
import TopBar from '../components/TopBar'
import ComponentsSidebar from '../components/ComponentsSidebar'
import ComponentReadme from '../components/ComponentReadme'

export default () => {
  const {
    designGuidelines,
    appearanceOptions,
    packageJSON,
    components,
    title,
    subTitle
  } = getComponent('buttons')
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <ComponentReadme
            title={title}
            subTitle={subTitle}
            packageJSON={packageJSON}
            designGuidelines={designGuidelines}
            appearanceOptions={appearanceOptions}
            components={components}
          />
        </div>
        <ComponentsSidebar />
      </main>
    </div>
  )
}
