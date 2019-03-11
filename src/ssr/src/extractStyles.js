import React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'
import { renderStatic } from 'glamor/server'

export default function extractStyles(options = {}) {
  const { styles, cache } = boxExtractStyles()
  const { ids, css } = renderStatic(
    () => 'let glamor believe there is some html here'
  )

  const evergreenCache = {
    uiBoxCache: cache,
    glamorIds: ids
  }

  const scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    nonce: options.nonce,
    dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
  }

  return {
    css: styles + '\n' + css,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
