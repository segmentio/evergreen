import React from 'react'
import { Link } from 'gatsby'
import { Button } from '../../../src'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default class Root extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return (
      <Layout>
        <div className="MainLayout">
          <TopBar />
          <main className="MainLayout-main">
            <div className="MainLayout-content">
              <section className="Home">
                <div className="Home-inner">
                  <h1>React Based UI Framework</h1>
                  <p>
                    It is build and maintained open&#8209;source&nbsp;by&nbsp;
                    <NativeLink className="Link" href="https://segment.com/">
                      Segment
                    </NativeLink>.
                  </p>
                  <div>
                    <Button
                      is={Link}
                      to="/components/"
                      appearance="primary"
                      height={40}
                      marginRight={12}
                    >
                      Components
                    </Button>
                    <NativeLink
                      href="https://github.com/segmentio/evergreen"
                      style={{
                        width: 136
                      }}
                    >
                      GitHub
                    </NativeLink>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}
