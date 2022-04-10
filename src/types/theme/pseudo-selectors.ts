import { EnhancerProps } from "ui-box"

/**
 * Placeholders for pseudoselectors should all be prefixed with an underscore
 */
 export type PseudoSelectorKey = `_${string}`
 export type PseudoSelectorKeys<T> = T extends PseudoSelectorKey ? T : never;
 export type PseudoSelectorMap<T extends string | EnhancerProps = string> = {
   // @ts-expect-error ts-migrate(1023) FIXME: An index signature parameter type must be either '... Remove this comment to see the full error message
   [key: PseudoSelectorKey]: T
 }