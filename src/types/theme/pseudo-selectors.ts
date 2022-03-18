import { EnhancerProps } from "ui-box"

/**
 * Placeholders for pseudoselectors should all be prefixed with an underscore
 */
 export type PseudoSelectorKey = `_${string}`
 export type PseudoSelectors<T extends string | EnhancerProps = string> = {
   [key: PseudoSelectorKey]: T
 }