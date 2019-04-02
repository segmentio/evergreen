import * as React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'
import { renderStatic } from 'glamor/server'

interface IScriptProps {
  type: string;
  id: string;
  dangerouslySetInnerHTML: any;
  nonce?: any;
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

  const scriptProps: IScriptProps = {
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
