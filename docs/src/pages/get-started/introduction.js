import React from 'react'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Container">
            <div className="Content">
              <h1>Introduction</h1>
              <p>
                Evergreen is a pragmatic UI kit for building evolving products
                on the web.<br /> It is build and maintained open-source by{' '}
                <NativeLink href="https://segment.com/">Segment</NativeLink>.
              </p>
              <h2>Core beliefs of Evergreen</h2>
              <p>
                <strong>
                  Evergreen is built on the belief that you can never predict
                  all future requirements, only prepare for it.
                </strong>
                {` `}
                Instead of creating fixed configurations that work today,
                Evergreen promotes building systems that anticipate new and
                changing design requirements.
              </p>
              <p>
                <strong>
                  Evergreen is built on the belief that things should work out
                  of the box with smart defaults and offer full control when
                  needed.
                </strong>
                {` `}
                For example, Evergreen implements most components on top of a{' '}
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
                developer experience. We advocate respect and inclusivity in our
                writings and interactions.
              </p>
              <h2>Install and use components</h2>
              <p>
                Evergreen is a mono-repo, which means it consists of multiple
                packages. Most packages will contain React components, to start
                using them in your React projects you have to install them one
                by one.
              </p>
              <p>
                For example, getting the button component will require you to
                install <code>evergreen-buttons</code>.
              </p>

              <pre>
                <code>$ yarn install evergreen-buttons</code>
              </pre>

              <p>
                A working version might look like this, assuming you are using
                something like{' '}
                <NativeLink href="https://github.com/facebookincubator/create-react-app">
                  Create React App
                </NativeLink>:
              </p>

              <pre>
                <code>{`import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-buttons'

ReactDOM.render(
  <Button>I am using 🌲Evergreen!</Button>,
  document.getElementById('root')
)`}</code>
              </pre>
            </div>
          </section>
        </div>
        <GetStartedSidebar />
      </main>
    </div>
  )
}
