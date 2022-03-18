import { EnhancerProps } from 'ui-box'
import { PseudoSelectorMap } from './pseudo-selectors'

export type StyleProps = EnhancerProps & Partial<PseudoSelectorMap<EnhancerProps>>
