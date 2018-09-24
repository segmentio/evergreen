/* eslint-disable react/no-danger */
const React = require('react')
const { extractStyles } = require('../esm')

exports.onRenderBody = ({ setHeadComponents }) => {
  // Get the css and hydration script from Evergreen.
  const { css, hydrationScript } = extractStyles()

  // Takes an array of components as its first argument which are added to
  // the headComponents array which is passed to the html.js component.
  setHeadComponents([
    // We need a key here for Gatsby to stop complaining.
    <React.Fragment key="evergreen-ssr">
      <style id="evergreen-css" dangerouslySetInnerHTML={{ __html: css }} />
      {hydrationScript}
    </React.Fragment>
  ])
}
