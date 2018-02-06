import { TextStyles } from '../../../typography'
import getTextSizeForControlHeight from './getTextSizeForControlHeight'

const getTextStyleForControlHeight = ({ height }) =>
  TextStyles[getTextSizeForControlHeight({ height })]

export default getTextStyleForControlHeight
