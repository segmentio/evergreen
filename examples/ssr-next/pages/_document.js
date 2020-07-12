/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractStyles } from 'evergreen-ui'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    // `css` is a string with css from both emotion and ui-box.
    //
    // `hydrationScript` is a script you should render on the server.
    // It contains a stringified version of the emotion and ui-box caches.
    // Evergreen will look for that script on the client and automatically hydrate
    // both emotion and ui-box.
    const { css, hydrationScript } = extractStyles()

    return {
      ...page,
      css,
      hydrationScript
    }
  }

  render() {
    const { css, hydrationScript } = this.props

    return (
      <html>
        <Head>
          <title>SSR in Next.js</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    )
  }
}
