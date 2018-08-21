import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { Button } from 'evergreen-ui'
import { MDXProvider } from '@mdx-js/tag'
import IA from '../IA'
import MDXPlayground from './MDXPlayground'
import TopBar from './TopBar'
import Layout from './Layout'
import OverviewItem from './OverviewItem'

const flatItems = [
  ...IA.foundation.items.map(item => {
    console.log(item.id)
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

  render() {
    const metaInfo = this.getMetaInfo()
    const relatedItems = this.getRelatedItems(metaInfo)
    return (
      <Layout>
        <div className="MainLayout">
          <TopBar />
          <main className="MainLayout-main">
            <div className="MainLayout-content">
              <Button
                is={Link}
                to="/components/overview"
                appearance="minimal"
                iconBefore="arrow-left"
                marginTop={16}
                marginLeft={16}
              >
                Back to Overview
              </Button>
              <article
                className="Container Content MDXPage"
                style={{ marginTop: 80 }}
              >
                <header className="MDXPage-header">
                  <h1>{metaInfo.name} </h1>
                  <p>
                    <a
                      href={`https://github.com/segmentio/evergreen/tree/master/src/${metaInfo.name.toLowerCase()}`}
                      target="_blank"
                    >
                      View on GitHub
                    </a>.
                  </p>
                </header>
                <div>
                  <MDXProvider components={{ code: MDXPlayground }}>
                    {this.props.children}
                  </MDXProvider>
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
