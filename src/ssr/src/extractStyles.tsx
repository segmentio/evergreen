import React from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'glam... Remove this comment to see the full error message
import { renderStatic } from 'glamor/server'
import { extractStyles as boxExtractStyles } from 'ui-box'

export interface ExtractStylesInput {
  nonce?: React.ScriptHTMLAttributes<'script'>['nonce']
}

export interface ExtractStylesOutput {
  css: string
  cache: {
    uiBoxCache: ReturnType<typeof boxExtractStyles>['cache']
    glamorIds: string[]
  }
  hydrationScript: JSX.Element
}

export default function extractStyles(options: ExtractStylesInput = {}): ExtractStylesOutput {
  const { cache, styles } = boxExtractStyles()
  const { css, ids } = renderStatic(() => 'let glamor believe there is some html here')

  const evergreenCache = {
    uiBoxCache: cache,
    glamorIds: ids
  }

  const scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: { __html: JSON.stringify(evergreenCache) }
  }

  if (options.nonce) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'nonce' does not exist on type '{ type: s... Remove this comment to see the full error message
    scriptProps.nonce = options.nonce
  }

  return {
    css: styles + '\n' + css,
    cache: evergreenCache,
    hydrationScript: <script {...scriptProps} />
  }
}
