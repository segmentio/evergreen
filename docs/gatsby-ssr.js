/* eslint-disable react/no-danger */
const React = require('react')
const { min: createSnippet } = require('@segment/snippet')
const { extractStyles } = require('../esm')
const segmentWriteKey = require('./segmentWriteKey')

const getSnippet = ({ writeKey }) => {
  // In development, stub out all analytics.js methods
  // this prevents "dirtying" your real analytics with local testing/traffic
  const { NODE_ENV = 'development' } = process.env
  if (NODE_ENV === 'development') {
    return `
      (function () {
        // analytics.js stub
        const analytics = window.analytics = {}
        const methods = [
          'trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview',
          'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug',
          'page', 'once', 'off', 'on', 'load'
        ]
        methods.forEach(method =>
          analytics[method] = (...args) => console.log(\`analytics.\${method}\`, ...args)
        )
      })()
    `
  }

  return createSnippet({
    apiKey: writeKey,
    page: false,
    load: false
  })
}

exports.onRenderBody = ({ setHeadComponents }) => {
  // Get the css and hydration script from Evergreen.
  const { css, hydrationScript } = extractStyles()

  const snippet = getSnippet({ writeKey: segmentWriteKey })

  // Takes an array of components as its first argument which are added to
  // the headComponents array which is passed to the html.js component.
  setHeadComponents([
    // We need a key here for Gatsby to stop complaining.
    <React.Fragment key="evergreen-ssr">
      <style id="evergreen-css" dangerouslySetInnerHTML={{ __html: css }} />
      {hydrationScript}
    </React.Fragment>,
    <script
      key="segment-snippet"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  ])
}
