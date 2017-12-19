import React, { Component } from 'react'
// import favicon from './images/favicon.ico'

const DESCRIPTION = 'Evergreen Design System by Segment'

let STYLES
if (process.env.NODE_ENV === `production`) {
  try {
    STYLES = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: STYLES }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          {/* <link rel="icon" href={favicon} /> */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Evergreen</title>
          {css}
          <meta type="description" content={DESCRIPTION} />
          <meta type="keywords" content={DESCRIPTION} />

          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"
          />
          <script
            type="text/javascript"
            src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.js"
          />
          <script
            type="text/javascript"
            src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/mode/javascript/javascript.min.js"
          />
          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
