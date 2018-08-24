import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { Button, Tab } from 'evergreen-ui'
import IA from '../IA'
import DocsMDXProvider from './DocsMDXProvider'
import TopBar from './TopBar'
import Layout from './Layout'
import OverviewItem from './OverviewItem'

const flatItems = [
  ...IA.foundation.items.map(item => {
    return {
      ...item,
      related: [
        ...(item.related || []),
        ...IA.foundation.items.map(x => x.id).filter(id => id !== item.id)
      ]
    }
  }),
  ...IA.components.items.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.items.map(item => {
        return {
          ...item,
          related: [
            ...(item.related || []),
            ...curr.items.map(item => item.id).filter(id => id !== item.id)
          ]
        }
      })
    ]
  }, [])
]

/**
 * Used for component pages.
 */
class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired
  }

  state = {
    currentTab: 'guide'
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  getMetaInfo = () => {
    const id = this.props.location.pathname.split('/')[2]
    return flatItems.find(item => item.id === id)
  }

  getRelatedItems = metaInfo => {
    return (metaInfo.related || []).map(id => {
      return flatItems.find(item => item.id === id)
    })
  }

  handleSelect = tab => {
    this.setState({
      currentTab: tab
    })
  }

  render() {
    const metaInfo = this.getMetaInfo()
    const relatedItems = this.getRelatedItems(metaInfo)
    return (
      <Layout>
        <div className="MainLayout">
          <TopBar />
          <main className="MainLayout-main">
            <div className="MainLayout-content">
              <article className="MDXPage">
                <header className="MDXPage-header">
                  <div className="bg-tint1">
                    <Button
                      is={Link}
                      to="/components/overview"
                      position="absolute"
                      appearance="minimal"
                      iconBefore="arrow-left"
                      height={40}
                      marginTop={16}
                      marginLeft={16}
                    >
                      Back to Overview
                    </Button>
                    <div className="MDXPage-headerContent Container-noMargins">
                      <h1>{metaInfo.name} </h1>
                      <Button
                        is="a"
                        height={40}
                        href={`https://github.com/segmentio/evergreen/tree/master/src/${metaInfo.name.toLowerCase()}`}
                        target="_blank"
                      >
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                  <div
                    className="MDXPage-headerTabs Container-noMargins border-bottom-default"
                    style={{ paddingBottom: 12 }}
                  >
                    <Tab
                      isSelected={this.state.currentTab === 'guide'}
                      onSelect={this.handleSelect.bind(null, 'guide')}
                      marginLeft={0}
                      height={36}
                    >
                      Guide
                    </Tab>
                    <Tab
                      isSelected={this.state.currentTab === 'guide'}
                      onSelect={this.handleSelect.bind(null, 'api')}
                      height={36}
                    >
                      Props API
                    </Tab>
                  </div>
                </header>
                <div className="Content Container">
                  <DocsMDXProvider>{this.props.children}</DocsMDXProvider>
                </div>
              </article>

              <div className="Overview-group Container">
                <h3 className="Overview-groupTitle">Related</h3>
                <div className="Overview-groupItems">
                  {relatedItems.map(item => {
                    return (
                      <OverviewItem
                        key={item.name}
                        id={item.id}
                        image={item.image}
                      >
                        {item.name}
                      </OverviewItem>
                    )
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default class PageContainer extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          return <Page location={location} {...this.props} />
        }}
      </Location>
    )
  }
}
