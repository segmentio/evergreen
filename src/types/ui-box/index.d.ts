declare module 'ui-box' {
  // Type definitions for ui-box 1.4
  // Project: https://github.com/segmentio/ui-box
  // Definitions by: Netto Farah <https://github.com/nettofarah>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
  // TypeScript Version: 2.8

  import * as PropTypes from 'prop-types'
  import { Component, ComponentClass, ReactNode } from 'react'
  import * as CSS from 'csstype'

  export { css } from 'glamor'

  /** Placeholder type for UI box props */
  type UIBoxProp = string | number | boolean | null | undefined

  /** A prop defining which */
  type UIBoxIsProp = string | ReactNode

  type CSSProps = CSS.StandardProperties

  type TStringOrNumber =
    | PropTypes.Requireable<string>
    | PropTypes.Requireable<number>

  export const background: {
    propTypes: {
      background: PropTypes.Requireable<string>
      backgroundBlendMode: PropTypes.Requireable<string>
      backgroundClip: PropTypes.Requireable<string>
      backgroundColor: PropTypes.Requireable<string>
      backgroundImage: PropTypes.Requireable<string>
      backgroundOrigin: PropTypes.Requireable<string>
      backgroundPosition: PropTypes.Requireable<string>
      backgroundRepeat: PropTypes.Requireable<string>
      backgroundSize: PropTypes.Requireable<string>
    }
  }

  export type TBackground = {
    background?: string
    backgroundBlendMode?: string
    backgroundClip?: string
    backgroundColor?: string
    backgroundImage?: string
    backgroundOrigin?: string
    backgroundPosition?: string
    backgroundRepeat?: string
    backgroundSize?: string
  }

  export const borderRadius: {
    propTypes: {
      borderBottomLeftRadius: TStringOrNumber
      borderBottomRightRadius: TStringOrNumber
      borderTopLeftRadius: TStringOrNumber
      borderTopRightRadius: TStringOrNumber
    }
  }

  export type TBorderRadius = {
    borderBottomLeftRadius?: string | number
    borderBottomRightRadius?: string | number
    borderTopLeftRadius?: string | number
    borderTopRightRadius?: string | number
  }

  export const borders: {
    propTypes: {
      border: PropTypes.Requireable<string>
      borderBottom: PropTypes.Requireable<string>
      borderBottomColor: PropTypes.Requireable<string>
      borderBottomStyle: PropTypes.Requireable<string>
      borderBottomWidth: TStringOrNumber
      borderColor: PropTypes.Requireable<string>
      borderLeft: PropTypes.Requireable<string>
      borderLeftColor: PropTypes.Requireable<string>
      borderLeftStyle: PropTypes.Requireable<string>
      borderLeftWidth: TStringOrNumber
      borderRight: PropTypes.Requireable<string>
      borderRightColor: PropTypes.Requireable<string>
      borderRightStyle: PropTypes.Requireable<string>
      borderRightWidth: TStringOrNumber
      borderStyle: PropTypes.Requireable<string>
      borderTop: PropTypes.Requireable<string>
      borderTopColor: PropTypes.Requireable<string>
      borderTopStyle: PropTypes.Requireable<string>
      borderTopWidth: TStringOrNumber
      borderWidth: TStringOrNumber
    }
  }

  export type TBorders = {
    border?: string
    borderBottom?: string
    borderBottomColor?: string
    borderBottomStyle?: string
    borderBottomWidth?: string | number
    borderColor?: string
    borderLeft?: string
    borderLeftColor?: string
    borderLeftStyle?: string
    borderLeftWidth?: string | number
    borderRight?: string
    borderRightColor?: string
    borderRightStyle?: string
    borderRightWidth?: string | number
    borderStyle?: string
    borderTop?: string
    borderTopColor?: string
    borderTopStyle?: string
    borderTopWidth?: string | number
    borderWidth?: string | number
  }

  export const boxShadow: {
    propTypes: {
      boxShadow: PropTypes.Requireable<string>
    }
  }

  export type TBoxShadow = {
    boxShadow?: string
  }

  export const dimensions: {
    propTypes: {
      height: TStringOrNumber
      maxHeight: TStringOrNumber
      maxWidth: TStringOrNumber
      minHeight: TStringOrNumber
      minWidth: TStringOrNumber
      width: TStringOrNumber
    }
  }

  export type TDimensions = {
    height?: string | number
    maxHeight?: string | number
    maxWidth?: string | number
    minHeight?: string | number
    minWidth?: string | number
    width?: string | number
  }

  export const flex: {
    propTypes: {
      alignContent: PropTypes.Requireable<string>
      alignItems: PropTypes.Requireable<string>
      alignSelf: PropTypes.Requireable<string>
      flex: TStringOrNumber
      flexBasis: TStringOrNumber
      flexDirection: PropTypes.Requireable<string>
      flexFlow: PropTypes.Requireable<string>
      flexGrow: TStringOrNumber
      flexShrink: TStringOrNumber
      flexWrap: PropTypes.Requireable<string>
      justifyContent: PropTypes.Requireable<string>
      justifyItems: PropTypes.Requireable<string>
      justifySelf: PropTypes.Requireable<string>
      order: TStringOrNumber
      placeContent: PropTypes.Requireable<string>
      placeItems: PropTypes.Requireable<string>
      placeSelf: PropTypes.Requireable<string>
    }
  }

  export type TFlex = {
    alignContent?: string
    alignItems?: string
    alignSelf?: string
    flex?: string | number
    flexBasis?: string | number
    flexDirection?: string
    flexFlow?: string
    flexGrow?: string | number
    flexShrink?: string | number
    flexWrap?: string
    justifyContent?: string
    justifyItems?: string
    justifySelf?: string
    order?: string | number
    placeContent?: string
    placeItems?: string
    placeSelf?: string
  }

  export const grid: {
    propTypes: {
      columnGap: TStringOrNumber
      gap: TStringOrNumber
      grid: PropTypes.Requireable<string>
      gridArea: PropTypes.Requireable<string>
      gridAutoColumns: TStringOrNumber
      gridAutoFlow: PropTypes.Requireable<string>
      gridAutoRows: TStringOrNumber
      gridColumn: TStringOrNumber
      gridColumnEnd: TStringOrNumber
      gridColumnGap: TStringOrNumber
      gridColumnStart: TStringOrNumber
      gridGap: TStringOrNumber
      gridRow: TStringOrNumber
      gridRowEnd: TStringOrNumber
      gridRowGap: TStringOrNumber
      gridRowStart: TStringOrNumber
      gridTemplate: PropTypes.Requireable<string>
      gridTemplateAreas: PropTypes.Requireable<string>
      gridTemplateColumns: PropTypes.Requireable<string>
      gridTemplateRows: PropTypes.Requireable<string>
      rowGap: TStringOrNumber
    }
  }

  export type TGrid = {
    columnGap?: string | number
    gap?: string | number
    grid?: string
    gridArea?: string
    gridAutoColumns?: string | number
    gridAutoFlow?: string
    gridAutoRows?: string | number
    gridColumn?: string | number
    gridColumnEnd?: string | number
    gridColumnGap?: string | number
    gridColumnStart?: string | number
    gridGap?: string | number
    gridRow?: string | number
    gridRowEnd?: string | number
    gridRowGap?: string | number
    gridRowStart?: string | number
    gridTemplate?: string
    gridTemplateAreas?: string
    gridTemplateColumns?: string
    gridTemplateRows?: string
    rowGap?: string | number
  }

  export const interaction: {
    propTypes: {
      cursor: PropTypes.Requireable<string>
      pointerEvents: PropTypes.Requireable<string>
      userSelect: PropTypes.Requireable<string>
      visibility: PropTypes.Requireable<string>
    }
  }

  export type TInteraction = {
    cursor?: string
    pointerEvents?: string
    userSelect?: string
    visibility?: string
  }

  export const layout: {
    propTypes: {
      boxSizing: PropTypes.Requireable<string>
      clear: PropTypes.Requireable<string>
      clearfix: PropTypes.Requireable<boolean>
      display: PropTypes.Requireable<string>
      float: PropTypes.Requireable<string>
      zIndex: TStringOrNumber
    }
  }

  export type TLayout = {
    boxSizing?: string | UIBoxProp
    clear?: string
    clearfix?: boolean
    display?: string
    float?: string
    zIndex?: string | number
  }

  export const list: {
    propTypes: {
      listStyle: PropTypes.Requireable<string>
      listStyleType: PropTypes.Requireable<string>
      listStyleImage: PropTypes.Requireable<string>
      listStylePosition: PropTypes.Requireable<string>
    }
  }

  export type TList = {
    listStyle?: string
    listStyleType?: string
    listStyleImage?: string
    listStylePosition?: string
  }

  export const opacity: {
    propTypes: {
      opacity: TStringOrNumber
    }
  }

  export type TOpacity = {
    opacity?: string | number
  }

  export const overflow: {
    propTypes: {
      overflow: PropTypes.Requireable<string>
      overflowX: PropTypes.Requireable<string>
      overflowY: PropTypes.Requireable<string>
    }
  }

  export type TOverflow = {
    overflow?: string
    overflowX?: string
    overflowY?: string
  }

  export const position: {
    propTypes: {
      bottom: TStringOrNumber
      left: TStringOrNumber
      position: PropTypes.Requireable<string>
      right: TStringOrNumber
      top: TStringOrNumber
    }
  }

  export type PositionType = {
    bottom?: string | number
    left?: string | number
    position?: string
    right?: string | number
    top?: string | number
  }

  export const spacing: {
    propTypes: {
      margin: TStringOrNumber
      marginBottom: TStringOrNumber
      marginLeft: TStringOrNumber
      marginRight: TStringOrNumber
      marginTop: TStringOrNumber
      marginX: TStringOrNumber
      marginY: TStringOrNumber
      padding: TStringOrNumber
      paddingBottom: TStringOrNumber
      paddingLeft: TStringOrNumber
      paddingRight: TStringOrNumber
      paddingTop: TStringOrNumber
      paddingX: TStringOrNumber
      paddingY: TStringOrNumber
    }
  }

  export type TSpacing = {
    margin?: string | number
    marginBottom?: string | number
    marginLeft?: string | number
    marginRight?: string | number
    marginTop?: string | number
    marginX?: string | number | UIBoxProp
    marginY?: string | number | UIBoxProp
    padding?: string | number
    paddingBottom?: string | number
    paddingLeft?: string | number
    paddingRight?: string | number
    paddingTop?: string | number
    paddingX?: string | number | UIBoxProp
    paddingY?: string | number | UIBoxProp
  }

  export const text: {
    propTypes: {
      color: PropTypes.Requireable<string>
      font: PropTypes.Requireable<string>
      fontFamily: PropTypes.Requireable<string>
      fontSize: TStringOrNumber
      fontStyle: PropTypes.Requireable<string>
      fontVariant: PropTypes.Requireable<string>
      fontWeight: TStringOrNumber
      letterSpacing: TStringOrNumber
      lineHeight: TStringOrNumber
      textAlign: PropTypes.Requireable<string>
      textDecoration: PropTypes.Requireable<string>
      textOverflow: PropTypes.Requireable<string>
      textShadow: PropTypes.Requireable<string>
      textTransform: PropTypes.Requireable<string>
      whiteSpace: PropTypes.Requireable<string>
      wordBreak: PropTypes.Requireable<string>
      wordWrap: PropTypes.Requireable<string>
    }
  }

  export type TText = {
    color?: string
    font?: string
    fontFamily?: string
    fontSize?: string | number
    fontStyle?: string
    fontVariant?: string
    fontWeight?: string | number
    letterSpacing?: string | number
    lineHeight?: string | number
    textAlign?: string
    textDecoration?: string
    textOverflow?: string
    textShadow?: string
    textTransform?: string
    whiteSpace?: string
    wordBreak?: string
    wordWrap?: string
  }

  export const transform: {
    propTypes: {
      transform?: PropTypes.Requireable<string>
      transformOrigin?: PropTypes.Requireable<string>
    }
  }

  export type TTransform = {
    transform?: string
    transformOrigin?: string
  }

  export const transition: {
    propTypes: {
      transition?: PropTypes.Requireable<string>
      transitionDelay?: PropTypes.Requireable<string>
      transitionDuration?: PropTypes.Requireable<string>
      transitionProperty?: PropTypes.Requireable<string>
      transitionTimingFunction?: PropTypes.Requireable<string>
    }
  }

  export type TTransition = {
    transition?: string
    transitionDelay?: string
    transitionDuration?: string
    transitionProperty?: string
    transitionTimingFunction?: string
  }

  export type BoxCSSTypes = TBackground &
    TBorderRadius &
    TBorders &
    TBoxShadow &
    TDimensions &
    TFlex &
    TGrid &
    TInteraction &
    TLayout &
    TList &
    TOpacity &
    TOverflow &
    PositionType &
    TSpacing &
    TText &
    TTransform &
    TTransition

  export interface BoxProps extends BoxCSSTypes {
    /**
     * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
     * React component type).
     */
    innerRef?(node: ReactNode): any

    /**
     * Lets you change the underlying element type.
     * You can pass either a string to change the DOM element type, or a React component type to
     * inherit another component. The component just needs to accept a className prop to work.
     * A good example is inheriting the react-router Link component
     */
    is?: UIBoxIsProp

    /**
     * The className prop you know and love. Internally it gets enhanced with additional class
     * names for the CSS properties you specify.
     */
    className?: string

    /** Set to border - box by default. */
    boxSizing?: UIBoxProp

    /** Sets marginLeft and marginRight to the same value */
    marginX?: UIBoxProp

    /** Sets marginTop and marginBottom to the same value */
    marginY?: UIBoxProp

    /** Sets paddingLeft and paddingRight to the same value */
    paddingX?: UIBoxProp

    /** Sets paddingTop and paddingBottom to the same value */
    paddingY?: UIBoxProp

    /** Utility property for easily adding clearfix styles to the element. */
    clearfix?: boolean

    // accept any other arbitrary prop
    [key: string]: any
  }

  export type Box = Component<BoxProps>
  export const Box: ComponentClass<BoxProps>
  export default Box

  type CacheEntry = ReadonlyArray<[/** key */ string, /** value */ string]>

  /**
   * Returns a { cache, styles } object which contains the cache entries and rendered styles
   * for server rendering. The styles can be output in a <style> tag or an external stylesheet (however you want).
   * The cache should be passed to hydrate() on the client-side before mounting the app.
   * Also useful for doing snapshot unit testing (make sure to call clearStyles() after each test though).
   */
  export function extractStyles(): {
    cache: ReadonlyArray<CacheEntry>
    styles: string
  }

  /**
   * Hydrates the cache using the cache value returned from extractStyles().
   * This is used to prevent needing to recalculate all the class names and re-render
   * all the styles on page load when server rendering.
   */
  export function hydrate(cache: ReadonlyArray<CacheEntry>): void

  /**
   * Clears the cache and removes the rendered styles.
   * Mainly useful for resetting the global state when using extractStyles() in unit tests.
   */
  export function clearStyles(): void

  /**
   * Utility function for filtering out props based on an array of keys.
   * Returns an { matchedProps, remainingProps } object.
   */
  export function splitProps(
    props: object,
    keys: ReadonlyArray<string>
  ): { matchedProps: object; remainingProps: object }

  export function splitBoxProps(
    props: object
  ): { matchedProps: object; remainingProps: object }
}
