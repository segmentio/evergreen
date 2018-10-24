/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react'
import Helmet from 'react-helmet'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'
import Layout from '../../components/Layout'
import PageFooter from '../../components/PageFooter'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Introduction · Evergreen</title>
      </Helmet>
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <section className="MainLayout-contentRight">
              <div
                className="Container-nextToSidebar"
                style={{ marginBottom: 160 }}
              >
                <div className="Content">
                  <h1>Introduction</h1>
                  <p className="p">
                    Evergreen is a pragmatic UI kit for building evolving
                    products on the web.
                    <br /> It is built and maintained open-source by{' '}
                    <NativeLink href="https://segment.com/">Segment</NativeLink>
                    .
                  </p>
                  <h2>Core beliefs of Evergreen</h2>
                  <p>
                    <strong>
                      Evergreen is built on the belief that you can never
                      predict all future requirements, only prepare for it.
                    </strong>
                    {` `}
                    Instead of creating fixed configurations that work today,
                    Evergreen promotes building systems that anticipate new and
                    changing design requirements.
                  </p>
                  <p>
                    <strong>
                      Evergreen is built on the belief that things should work
                      out of the box with smart defaults and offer full control
                      when needed.
                    </strong>
                    {` `}
                    For example, Evergreen implements most components on top of
                    a{' '}
                    <NativeLink href="https://github.com/segmentio/ui-box">
                      Box primitive
                    </NativeLink>{' '}
                    which allows for a lot of customization.
                  </p>
                  <p>
                    <strong>
                      Evergreen is built on the belief that using Evergreen and
                      contributing to Evergreen should be a pleasant experience.
                    </strong>{' '}
                    We prioritize documentation and all the tools for a solid
                    developer experience. We advocate respect and inclusivity in
                    our writings and interactions.
                  </p>
                  <h2>Install and use components</h2>
                  <p>
                    Evergreen is made up of multiple components and tools which
                    you can import one by one. All you need to do is install the{' '}
                    <code>evergreen-ui</code> package:
                  </p>
                </div>
                <SyntaxHighlighter>
                  {`
$ yarn add evergreen-ui
# or
$ npm install --save evergreen-ui
                `.trim()}
                </SyntaxHighlighter>
                <div className="Content">
                  <p>
                    A working version, assuming you are using something like{' '}
                    <NativeLink href="https://github.com/facebookincubator/create-react-app">
                      Create React App
                    </NativeLink>
                    , might look like this:
                  </p>
                </div>

                <SyntaxHighlighter>
                  {`
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-ui'

ReactDOM.render(
  <Button>I am using 🌲 Evergreen!</Button>,
  document.getElementById('root')
)`}
                </SyntaxHighlighter>
              </div>
            </section>
          </div>
          <GetStartedSidebar />
        </main>
      </div>
      <PageFooter />
    </Layout>
  )
}
