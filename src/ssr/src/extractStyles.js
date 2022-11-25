import React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'

export default function extractStyles(options = {}) {
  const { cache, styles } = boxExtractStyles()

  const evergreenCache = {
    uiBoxCache: cache
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
    css: styles,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
