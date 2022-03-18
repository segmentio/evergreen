import { EnhancerProps } from 'ui-box'
import { PseudoSelectors } from './pseudo-selectors'

export type StyleProps = EnhancerProps & Partial<PseudoSelectors<EnhancerProps>>
