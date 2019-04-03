declare module 'glamor' {
  export interface CSSProperties {
    /**
     * In dev mode, adding a `label` string prop will reflect its value in devtools. Useful
     * when debugging, and a good alternative to 'semantic' classnames.
     */
    label?: string
    // for now just allow everything
    [propertyName: string]: any
  }

  export interface StyleAttribute {
    [attributeName: string]: ''
  }

  type FalsyValues = null | undefined | false
  type Rule = StyleAttribute | CSSProperties | FalsyValues

  /**
   * Defines a `rule` with the given key-value pairs. Returns an object (of shape
   * `{'data-css-<id>': ''}`), to be added to an element's attributes. This is not the same
   * as element's style, and doesn't interfere with the element's `className` / `class`.
   */
  export function style(props: CSSProperties): StyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function active(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function any(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function checked(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function _default(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function disabled(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function empty(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function enabled(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function first(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstChild(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstOfType(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function fullscreen(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function focus(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function hover(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function indeterminate(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function inRange(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function invalid(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lastChild(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lastOfType(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function left(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function link(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function onlyChild(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function onlyOfType(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function optional(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function outOfRange(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function readOnly(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function readWrite(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function required(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function right(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function root(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function scope(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function target(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function valid(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function visited(props: CSSProperties): StyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function dir(param: string, props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function lang(param: string, props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function not(param: string, props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthChild(
    param: string | number,
    props: CSSProperties
  ): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthLastChild(
    param: string | number,
    props: CSSProperties
  ): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthLastOfType(
    param: string | number,
    props: CSSProperties
  ): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function nthOfType(
    param: string | number,
    props: CSSProperties
  ): StyleAttribute

  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function after(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function before(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstLetter(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function firstLine(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function selection(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function backdrop(props: CSSProperties): StyleAttribute
  /**
   * Defines a rule for the given pseudoclass selector.
   */
  export function placeholder(props: CSSProperties): StyleAttribute

  /**
   * An escape hatch to define styles for arbitrary CSS selectors. Your selector is appended
   * directly to the css rule, letting you define 'whatever' you want. Use sparingly!
   *
   * (nb1: don't forget to add a leading space for 'child' selectors. eg - `$(' .item', {...}`).
   * (nb2: `simulate()` does not work on these selectors yet.)
   */
  export function select(selector: string, props: CSSProperties): StyleAttribute
  /**
   * An escape hatch to define styles for arbitrary CSS selectors. Your selector is appended
   * directly to the css rule, letting you define 'whatever' you want. Use sparingly!
   *
   * (nb1: don't forget to add a leading space for 'child' selectors. eg - `$(' .item', {...}`).
   * (nb2: `simulate()` does not work on these selectors yet.)
   */
  export function $(selector: string, props: CSSProperties): StyleAttribute

  /**
   * An escape hatch to target elements based on it's parent.
   */
  export function parent(selector: string, props: CSSProperties): StyleAttribute

  /**
   * Combine rules, with latter styles taking precedence over previous ones.
   */
  export function compose(...rules: Array<Rule>): StyleAttribute
  /**
   * Combine rules, with latter styles taking precedence over previous ones.
   */
  export function merge(...rules: Array<Rule>): StyleAttribute

  /**
   * Loads the given font-face at most once into the document, returns the font family name.
   */
  export interface FontProperties {
    [propertyName: string]: any
  }

  export function fontFace(font: FontProperties): string

  /**
   * Adds animation keyframes into the document, with an optional name.
   */
  export function keyframes(timeline: TimeLine): string
  /**
   * Adds animation keyframes into the document, with an optional name.
   */
  export function keyframes(name: string, timeline: TimeLine): string

  /**
   * In glamor, css rules are treated as values. The css function lets you define these values.
   */
  export function css(...rules: Array<Rule>): StyleAttribute

  export namespace css {
    export function insert(css: string): void
    export function global(selector: string, style: CSSProperties): void

    // Aliasing keyframes
    export function keyframes(timeline: TimeLine): string
    export function keyframes(name: string, timeline: TimeLine): string

    // Aliasing fontFace
    export function fontFace(font: FontProperties): string
  }

  /**
   * Define plugins
   */
  type PluginProperties = {
    selector: string
    style: CSSProperties
  }

  type PluginFn = (arg: PluginProperties) => PluginProperties

  export interface PluginSet {
    fns: PluginFn[]
    add(...fns: PluginFn[]): void
    remove(fn: PluginFn): void
    clear(): void
    transform(arg: PluginProperties): PluginProperties
  }

  export namespace plugins {
    export const keyframes: PluginSet
    export const fontFace: PluginSet
    export const media: PluginSet

    export const fns: PluginFn[]
    export function add(...fns: PluginFn[]): void
    export function remove(fn: PluginFn): void
    export function clear(): void
    export function transform(arg: PluginProperties): PluginProperties
  }

  /**
   * Media queries!
   */
  export function media(query: string, ...rules: Array<Rule>): StyleAttribute

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
  export function simulate(...pseudoclasses: Array<string>): StyleAttribute

  export interface TimeLine {
    [timelineValue: string]: CSSProperties
  }

  /**
   * Append a raw css rule at most once to the stylesheet. The ultimate escape hatch.
   */
  export function insertRule(css: string): void

  /**
   * Append a css rule as a key-value object at most once to the stylesheet. The ultimate escape hatch.
   */
  export function insertGlobal(selector: string, style: CSSProperties): void

  /**
   * A helper to extract the css for given rules. useful for debugging, and webcomponents.
   */
  export function cssFor(...rules: Array<StyleAttribute>): string

  /**
   * Another helper for webcomponents, this generates the attributes to be included when
   * constructing an element's html.
   */
  export function attribsFor(...rules: Array<StyleAttribute>): string

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
