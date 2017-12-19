import React from 'react'
import TopBar from '../components/TopBar'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Home">
            <div className="Home-inner">
              <h1>
                Evergreen is a pragmatic UI kit for building evolving products
                on the web.<br /> It is build an maintained open-source by
                {` `}
                <NativeLink href="https://segment.com/">Segment</NativeLink>.
              </h1>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
