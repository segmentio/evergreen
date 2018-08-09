import React from 'react'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'
import Layout from '../../components/Layout'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'

export default props => {
  console.log(props)
  return (
    <Layout>
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <section className="Container">
              <div className="Content">
                <h1>Theming</h1>
                <p>
                  {"Support for theming is currrently in it's early stages."}
                </p>

                <h2>Two types of themes</h2>

                <p>
                  {'Themes are composed of two parts: a "style" and a "base".'}
                </p>

                <p>
                  A <b>style</b> contains colors and fonts that you can use to
                  easily insert your own branding into Evergreen.
                </p>

                <SyntaxHighlighter>
                  {`// Example styles

const style = {
  primaryColor: "#016cd1",
  ...
}
`}
                </SyntaxHighlighter>

                <p>
                  A <b>base</b> is an optional piece that allows you to override
                  several utility functions within evergreen.
                  {
                    "It's not recommended to use a base for something a style can acomplish."
                  }
                </p>

                <SyntaxHighlighter>
                  {`// Example Base

const base = {
  getCodeProps: myGetCodePropsFunction,
  getSelectClassName: myGetSelectClassNameFunction,
  ...
}
`}
                </SyntaxHighlighter>

                <h3>Usage</h3>
                <p>
                  Combined, these two pieces let you change small details or
                  rewrite some of the more opinionated pieces of Evergreen.
                </p>

                <SyntaxHighlighter>
                  {`import { createTheme, ThemeProvider } from 'evergreen-ui'

const theme = createTheme(style, base)

export default (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
)
`}
                </SyntaxHighlighter>
              </div>
            </section>
          </div>
          <GetStartedSidebar />
        </main>
      </div>
    </Layout>
  )
}
