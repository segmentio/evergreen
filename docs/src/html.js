/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const DESCRIPTION = 'Evergreen Design System by Segment'

let STYLES
if (process.env.NODE_ENV === `production`) {
  try {
    STYLES = require(`!raw-loader!../public/styles.css`)
  } catch (err) {
    console.log(err)
  }
}

export default class HTML extends Component {
  static propTypes = {
    headComponents: PropTypes.node,
    body: PropTypes.string,
    postBodyComponents: PropTypes.node
  }

  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: STYLES }}
          id="gatsby-inlined-css"
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

          {this.props.headComponents}
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id="___gatsby"
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
