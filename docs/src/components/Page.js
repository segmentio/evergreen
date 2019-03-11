import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location, navigate } from '@reach/router'
// eslint-disable-next-line import/no-unresolved
import { Button, IconButton, Tooltip } from 'evergreen-ui'
import IA from '../IA'
import DocsMDXProvider from './DocsMDXProvider'
import TopBar from './TopBar'
import Layout from './Layout'
import OverviewItem from './OverviewItem'
import PageFooter from './PageFooter'

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
    if (!metaInfo) return null
    const relatedItems = this.getRelatedItems(metaInfo)
    return (
      <React.Fragment>
        <Helmet>
          <title>{metaInfo.name} · Evergreen</title>
          <meta property="og:title" content={`${metaInfo.name} · Evergreen`} />
          <meta
            property="twitter:title"
            content={`${metaInfo.name} · Evergreen`}
          />
        </Helmet>
        <div>
          <TopBar />
          <main>
            <article className="MDXPage">
              <header className="MDXPage-header">
                <div className="bg-tint1">
                  <div className="MDXPage-headerContent Container Container--narrow">
                    <div className="MDXPage-headerContentLeft">
                      <Tooltip content="Back to Overview">
                        <IconButton
                          autoFocus
                          onClick={() => {
                            // Non-ideal, but Tooltip doesn't play nice when using is={Link}
                            navigate('/components')
                          }}
                          marginLeft={-54}
                          marginRight={16}
                          display="inline-flex"
                          icon="arrow-left"
                          height={40}
                        />
                      </Tooltip>

                      <h1>{metaInfo.name}</h1>
                    </div>

                    <Button
                      is="a"
                      height={40}
                      href={metaInfo.github}
                      target="_blank"
                    >
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </header>
              <div
                className="Container Container--narrow"
                style={{ marginBottom: 120 }}
              >
                <DocsMDXProvider>{this.props.children}</DocsMDXProvider>
              </div>
            </article>

            {relatedItems.length > 0 && (
              <div
                className="Overview-group Container Container--narrow"
                style={{ marginBottom: 120 }}
              >
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
            )}

            <div
              className="Container Container--narrow"
              style={{ marginBottom: 120 }}
            >
              <Button
                is={Link}
                to="/components"
                display="inline-flex"
                iconBefore="arrow-left"
                height={40}
              >
                Back to Overview
              </Button>
            </div>
          </main>
        </div>
        <PageFooter />
      </React.Fragment>
    )
  }
}

export default class PageContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Location>
          {({ location }) => {
            return <Page location={location} {...this.props} />
          }}
        </Location>
      </Layout>
    )
  }
}
