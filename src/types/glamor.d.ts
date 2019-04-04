/* eslint import/export: 0 */

declare module 'glamor' {
  export interface ICSSProperties {
    /**
     * In dev mode, adding a `label` string prop will reflect its value in devtools. Useful
     * when debugging, and a good alternative to 'semantic' classnames.
     */
    label?: string
    // for now just allow everything
    [propertyName: string]: any
  }

  export interface IStyleAttribute {
    [attributeName: string]: ''
  }

  type FalsyValues = null | undefined | false
  type Rule = IStyleAttribute | ICSSProperties | FalsyValues

  /**
   * Defines a `rule` with the given key-value pairs. Returns an object (of shape
   * `{'data-css-<id>': ''}`), to be added to an element's attributes. This is not the same
   * as element's style, and doesn't interfere with the element's `className` / `class`.
   */
  export function style(props: ICSSProperties): IStyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function active(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function any(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function checked(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function _default(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function disabled(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function empty(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function enabled(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function first(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstChild(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstOfType(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function fullscreen(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function focus(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function hover(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function indeterminate(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function inRange(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function invalid(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lastChild(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lastOfType(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function left(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function link(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function onlyChild(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function onlyOfType(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function optional(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function outOfRange(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function readOnly(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function readWrite(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function required(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function right(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function root(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function scope(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function target(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function valid(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function visited(props: ICSSProperties): IStyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function dir(param: string, props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lang(param: string, props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function not(param: string, props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthChild(
    param: string | number,
    props: ICSSProperties
  ): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthLastChild(
    param: string | number,
    props: ICSSProperties
  ): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthLastOfType(
    param: string | number,
    props: ICSSProperties
  ): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthOfType(
    param: string | number,
    props: ICSSProperties
  ): IStyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function after(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function before(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstLetter(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstLine(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function selection(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function backdrop(props: ICSSProperties): IStyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function placeholder(props: ICSSProperties): IStyleAttribute

  /**
   * An escape hatch to define styles for arbitrary CSS selectors. Your selector is appended
   * directly to the css rule, letting you define 'whatever' you want. Use sparingly!
   *
   * (nb1: don't forget to add a leading space for 'child' selectors. eg - `$(' .item', {...}`).
   * (nb2: `simulate()` does not work on these selectors yet.)
   */
  export function select(
    selector: string,
    props: ICSSProperties
  ): IStyleAttribute
  /**
   * An escape hatch to define styles for arbitrary CSS selectors. Your selector is appended
   * directly to the css rule, letting you define 'whatever' you want. Use sparingly!
   *
   * (nb1: don't forget to add a leading space for 'child' selectors. eg - `$(' .item', {...}`).
   * (nb2: `simulate()` does not work on these selectors yet.)
   */
  export function $(selector: string, props: ICSSProperties): IStyleAttribute

  /**
   * An escape hatch to target elements based on it's parent.
   */
  export function parent(
    selector: string,
    props: ICSSProperties
  ): IStyleAttribute

  /**
   * Combine rules, with latter styles taking precedence over previous ones.
   */
  export function compose(...rules: Rule[]): IStyleAttribute
  /**
   * Combine rules, with latter styles taking precedence over previous ones.
   */
  export function merge(...rules: Rule[]): IStyleAttribute

  /**
   * Loads the given font-face at most once into the document, returns the font family name.
   */
  export interface IFontProperties {
    [propertyName: string]: any
  }

  export function fontFace(font: IFontProperties): string

  /**
   * Adds animation keyframes into the document, with an optional name.
   */
  export function keyframes(timeline: ITimeLine): string
  /**
   * Adds animation keyframes into the document, with an optional name.
   */
  export function keyframes(name: string, timeline: ITimeLine): string

  /**
   * In glamor, css rules are treated as values. The css function lets you define these values.
   */
  export function css(...rules: Rule[]): IStyleAttribute

  export namespace css {
    export function insert(css: string): void
    export function global(selector: string, style: ICSSProperties): void

    // Aliasing keyframes
    export function keyframes(timeline: ITimeLine): string
    export function keyframes(name: string, timeline: ITimeLine): string

    // Aliasing fontFace
    export function fontFace(font: IFontProperties): string
  }

  /**
   * Define plugins
   */
  type PluginProperties = {
    selector: string
    style: ICSSProperties
  }

  type PluginFn = (arg: PluginProperties) => PluginProperties

  export interface IPluginSet {
    fns: PluginFn[]
    add(...fns: PluginFn[]): void
    remove(fn: PluginFn): void
    clear(): void
    transform(arg: PluginProperties): PluginProperties
  }

  export namespace plugins {
    export const keyframes: IPluginSet
    export const fontFace: IPluginSet
    export const media: IPluginSet

    export const fns: PluginFn[]
    export function add(...fns: PluginFn[]): void
    export function remove(fn: PluginFn): void
    export function clear(): void
    export function transform(arg: PluginProperties): PluginProperties
  }

  /**
   * Media queries!
   */
  export function media(query: string, ...rules: Rule[]): IStyleAttribute

  /**
   * Included Media query presets.
   */
  export const presets: {
    mobile: '(min-width: 400px)'
    phablet: '(min-width: 550px)'
    tablet: '(min-width: 750px)'
    desktop: '(min-width: 1000px)'
    hd: '(min-width: 1200px)'
  }

  /**
   * In development, lets you trigger any pseudoclass on an element.
   */
  export function simulate(...pseudoclasses: string[]): IStyleAttribute

  export interface ITimeLine {
    [timelineValue: string]: ICSSProperties
  }

  /**
   * Append a raw css rule at most once to the stylesheet. The ultimate escape hatch.
   */
  export function insertRule(css: string): void

  /**
   * Append a css rule as a key-value object at most once to the stylesheet. The ultimate escape hatch.
   */
  export function insertGlobal(selector: string, style: ICSSProperties): void

  /**
   * A helper to extract the css for given rules. useful for debugging, and webcomponents.
   */
  export function cssFor(...rules: IStyleAttribute[]): string

  /**
   * Another helper for webcomponents, this generates the attributes to be included when
   * constructing an element's html.
   */
  export function attribsFor(...rules: IStyleAttribute[]): string

  /**
   * Rehydrate with server-side rendered rule IDs
   */
  export function rehydrate(ids: string[]): void

  /**
   * Toggle speedy mode
   */
  export function speedy(mode: boolean): void

  /**
   * Clears out the cache and empties the stylesheet
   */
  export function flush(): void
}
