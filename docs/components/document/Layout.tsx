import React, { ReactNode } from 'react'
import PageFooter from '../PageFooter'
import Head from './Head'
import TopNav from '../TopNav'
import { Pane } from 'evergreen-ui'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '' }: Props) => (
  <div>
    <Head title={title} />
    <Pane width="100vw" display="flex" flexDirection="column" minHeight="100vh">
      <TopNav />
      <Pane flex={1} height="100%">
        {children}
      </Pane>
      <PageFooter />
    </Pane>
  </div>
)

export default Layout
