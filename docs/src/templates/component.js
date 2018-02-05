import React from 'react'
import PropTypes from 'prop-types'
import getComponent from '../utils/getComponent'
import TopBar from '../components/TopBar'
import ComponentsSidebar from '../components/ComponentsSidebar'
import ComponentReadme from '../components/ComponentReadme'

export default class ComponentTemplate extends React.PureComponent {
  static propTypes = {
    pathContext: PropTypes.object
  }

  render() {
    const {
      designGuidelines,
      appearanceOptions,
      components,
      title,
      subTitle,
      examples
    } = getComponent(this.props.pathContext.name)

    return (
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <ComponentReadme
              title={title}
              subTitle={subTitle}
              name={this.props.pathContext.name}
              designGuidelines={designGuidelines}
              appearanceOptions={appearanceOptions}
              components={components}
              examples={examples}
            />
          </div>
          <ComponentsSidebar />
        </main>
      </div>
    )
  }
}
