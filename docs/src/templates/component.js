import React from 'react'
import PropTypes from 'prop-types'
import getComponent from '../utils/getComponent'
import TopBar from '../components/TopBar'
import ComponentsSidebar from '../components/ComponentsSidebar'
import ComponentReadme from '../components/ComponentReadme'
import Layout from '../components/Layout'

export default class ComponentTemplate extends React.PureComponent {
  static propTypes = {
    pageContext: PropTypes.object
  }

  render() {
    const {
      introduction,
      designGuidelines,
      implementationDetails,
      appearanceOptions,
      components,
      title,
      subTitle,
      examples,
      customExample
    } = getComponent(this.props.pageContext.name.toLowerCase())

    return (
      <Layout>
        <div className="MainLayout">
          <TopBar />
          <main className="MainLayout-main">
            <div className="MainLayout-content">
              <ComponentReadme
                title={title}
                subTitle={subTitle}
                name={this.props.pageContext.name}
                introduction={introduction}
                implementationDetails={implementationDetails}
                designGuidelines={designGuidelines}
                appearanceOptions={appearanceOptions}
                components={components}
                examples={examples}
                customExample={customExample}
              />
            </div>
            <ComponentsSidebar />
          </main>
        </div>
      </Layout>
    )
  }
}
