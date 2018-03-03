import React from 'react'
import {
  extractStyles as boxExtractStyles,
  hydrate as boxHydrate
} from 'ui-box'
import { rehydrate } from 'glamor'
import { renderStatic } from 'glamor/server'

const EVERGREEN_SCRIPT_ID = 'evergreen-hydrate'
const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
export function hydrate(hydration) {
  if (hydration.uiBoxCache) {
    boxHydrate(hydration.uiBoxCache)
  }

  if (hydration.glamorIds) {
    rehydrate(hydration.glamorIds)
  }
}

function autoHydrate() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const hydration = document.getElementById(EVERGREEN_SCRIPT_ID)

    if (hydration) {
      try {
        const hydrationObject = JSON.parse(hydration.innerHTML)
        hydrate(hydrationObject)
      } catch (err) {
        if (isDev) {
          console.log(
            'Evergreen automatic hydration object is invalid JSON',
            err
          )
        }
      }
    }
  }
}

autoHydrate()

export default function extractStyles() {
  const { styles, cache } = boxExtractStyles()
  const { ids, css } = renderStatic(
    () => 'let glamor believe there is some html here'
  )

  const manualHydrateCache = {
    uiBoxCache: cache,
    glamorIds: ids
  }

  const scriptProps = {
    type: 'application/json',
    id: EVERGREEN_SCRIPT_ID,
    dangerouslySetInnerHTML: { __html: JSON.stringify(manualHydrateCache) }
  }

  return {
    css: `${styles} ${css}`,
    manualHydrateCache,
    evergreenHydrateScript: <script {...scriptProps} />
  }
}
