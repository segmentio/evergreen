import { rehydrate } from 'glamor'
import { hydrate as boxHydrate } from 'ui-box'
import canUseDom from '../../lib/canUseDom'
import { ExtractStylesOutput } from './extractStyles'

/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
export function hydrate(hydration: Pick<ExtractStylesOutput['cache'], 'glamorIds' | 'uiBoxCache'>) {
  if (hydration.uiBoxCache) {
    boxHydrate(hydration.uiBoxCache)
  }

  if (hydration.glamorIds) {
    rehydrate(hydration.glamorIds)
  }
}

export default function autoHydrate() {
  if (canUseDom) {
    const hydration = document.querySelector('#evergreen-hydrate')

    if (hydration) {
      try {
        const hydrationObject = JSON.parse(hydration.innerHTML)
        hydrate(hydrationObject)
      } catch (error) {
        console.error('Evergreen automatic hydration object is invalid JSON', error)
      }
    }
  }
}
