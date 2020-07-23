import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Button, ArrowLeftIcon, Pane } from '../../../src'
import DocsMDXProvider from './DocsMDXProvider'
import TopBar from './TopBar'
import Layout from './Layout'
import PageFooter from './PageFooter'

const PageLayout = ({ children }) => (
  <Layout>
    <Helmet>
      <title>Migration Guide · Evergreen</title>
    </Helmet>
    <div className="MainLayout">
      <TopBar />
      <Pane
        width={1024}
        marginX="auto"
        marginBottom={160}
        paddingY={24}
        paddingX={48}>
        <Button
          appearance="minimal"
          is="a"
          href="/whats-new"
          iconBefore={<ArrowLeftIcon size={12} marginRight={8} />}
          marginTop={30}
        >
          Back to What&apos;s New
        </Button>
        <DocsMDXProvider>{children}</DocsMDXProvider>
      </Pane>
    </div>
    <PageFooter />
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
