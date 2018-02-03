import { TextStyles } from 'evergreen-typography'
import getTextSizeForControlHeight from './getTextSizeForControlHeight'

const getTextStyleForControlHeight = ({ height }) =>
  TextStyles[getTextSizeForControlHeight({ height })]

export default getTextStyleForControlHeight
