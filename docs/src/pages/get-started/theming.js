import React from 'react'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'

export default () => {
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Container">
            <div className="Content">
              <h1>Theming</h1>
              <p>Evergreen currently does not support theming.</p>
              <h2>Is theming support on the roadmap?</h2>
              <p>
                This project is originally build to support the development of
                product at{' '}
                <a
                  href="https://segment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Segment
                </a>. This is also the reason theming is not our short term
                priority. It is on our longer term priority list and hopefully
                will be supported later in 2018. Expect a clearer roadmap
                available before that.
              </p>
            </div>
          </section>
        </div>
        <GetStartedSidebar />
      </main>
    </div>
  )
}
