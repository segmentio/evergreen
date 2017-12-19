import React from 'react'
import getComponent from '../utils/getComponent'
import TopBar from '../components/TopBar'
import ComponentsSidebar from '../components/ComponentsSidebar'
import ComponentReadme from '../components/ComponentReadme'
import ComponentBlock from '../components/ComponentBlock'

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
        <ComponentsSidebar />
        <div className="MainLayout-content">
          <ComponentReadme
            title={title}
            subTitle={subTitle}
            packageJSON={packageJSON}
          >
            {designGuidelines && (
              <div>
                <h2>Design Guidelines</h2>
                {designGuidelines}
              </div>
            )}
            {appearanceOptions && (
              <div>
                <h2>Appearance Options</h2>
                {appearanceOptions}
              </div>
            )}
            {components && (
              <div>
                <h2>Code & Examples</h2>
                <p>
                  The <code>{packageJSON.name}</code> package exports the
                  following documented components:
                </p>
                <ul>
                  {components.map(component => {
                    return (
                      <li key={component.name}>
                        <code>{component.name}</code>
                      </li>
                    )
                  })}
                </ul>

                {components.map(component => (
                  <ComponentBlock
                    key={component.name}
                    name={component.name}
                    description={component.description}
                    examples={component.examples}
                  />
                ))}
              </div>
            )}
          </ComponentReadme>
        </div>
      </main>
    </div>
  )
}
