import React, { ReactNode } from 'react'

import PageFooter from './PageFooter'
import Head from 'next/head'
import TopNav from './TopNav'
import { Pane } from 'evergreen-ui'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Pane width="100vw" display="flex" flexDirection="column" minHeight="100vh">
      <TopNav />
      <Pane flex={1}>
        {children}
        <PageFooter />
      </Pane>
    </Pane>
  </div>
)

export default Layout
