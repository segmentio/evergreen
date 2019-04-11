import { renderStatic } from 'glamor/server'
import * as React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'

interface ScriptProps {
  type: string
  id: string
  dangerouslySetInnerHTML: any
  nonce?: any
}

export default function extractStyles(options: { nonce?: any } = {}) {
  const { styles, cache } = boxExtractStyles()
  const { ids, css } = renderStatic(
    () => 'let glamor believe there is some html here'
  )

  const evergreenCache = {
    uiBoxCache: cache,
    glamorIds: ids
  }

  const scriptProps: ScriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
  }

  if (options.nonce) {
    scriptProps.nonce = options.nonce
  }

  return {
    css: `${styles}\n${css}`,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
