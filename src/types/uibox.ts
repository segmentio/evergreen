export interface IDimensionsProps {
  height?: string | number
  maxHeight?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  minWidth?: string | number
  width?: string | number
}

export interface ISpacingProps {
  margin?: string | number
  marginBottom?: string | number
  marginLeft?: string | number
  marginRight?: string | number
  marginTop?: string | number
  marginX?: string | number
  marginY?: string | number
  padding?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingX?: string | number
  paddingY?: string | number
}

export interface IPositionProps {
  bottom?: string | number
  left?: string | number
  position?: string
  right?: string | number
  top?: string | number
}

export interface ILayoutProps {
  boxSizing?: string
  clear?: string
  clearfix?: boolean
  display?: string
  float?: string
  zIndex?: string | number
}
