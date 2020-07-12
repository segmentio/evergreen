import React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'
import { extractCritical } from 'emotion-server'

export default function extractStyles(options = {}) {
  const { styles, cache } = boxExtractStyles()
  const { ids, css } = extractCritical(
    'let emotion believe there is some html here'
  )

  const evergreenCache = {
    uiBoxCache: cache,
    emotionIds: ids
  }

  const scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
  }

  if (options.nonce) {
    scriptProps.nonce = options.nonce
  }

  return {
    css: styles + '\n' + css,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
