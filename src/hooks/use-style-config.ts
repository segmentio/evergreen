import { useMemo, useRef } from 'react'
import { css, CSSProperties } from 'glamor'
import merge from 'lodash.merge'
import isEqual from 'react-fast-compare'
import { EnhancerProps, splitBoxProps } from 'ui-box'
import { useTheme, get, resolveThemeTokens } from '../theme'
import { Appearance } from '../types/theme/appearance'
import { Color } from '../types/theme/color'
import { ComponentStyle } from '../types/theme/component-style'
import { Components } from '../types/theme/components'
import { IntentTypes } from '../types/theme/intent-types'
import { PseudoSelectorKey, PseudoSelectorMap } from '../types/theme/pseudo-selectors'
import { Size } from '../types/theme/size'

type GlamorAndBoxStyle = EnhancerProps & CSSProperties
interface StyleModifiers {
  appearance?: Appearance
  color?: Color
  intent?: IntentTypes
  size?: Size
}

interface UseGlamorAndBoxOutput extends EnhancerProps {
  className: string
}

type UseStyleConfigOutput = UseGlamorAndBoxOutput

function maybeRun(value: any, ...args: any[]) {
  return typeof value === 'function' ? value(...args) : value
}

function maybeRunDeep(raw: any, ...args: any[]) {
  if (raw && typeof raw === 'object') {
    const result: Record<string, any> = {}

    for (const key of Object.keys(raw)) {
      result[key] = maybeRunDeep(raw[key], ...args)
    }

    return result
  }

  return maybeRun(raw, ...args)
}

/**
 * Combines styles from a styleConfig, with the given style modifiers (appearance, size, etc) and internal styles
 */
function combineStyles(
  theme: any,
  props: StyleModifiers,
  styleConfig: ComponentStyle,
  internalStyles: GlamorAndBoxStyle = {}
): ComponentStyle {
  const config = maybeRun(styleConfig, theme, props)
  const baseStyle = maybeRunDeep(config.baseStyle, theme, props)
  const sizeStyle = maybeRunDeep(get(config, `sizes.${props.size}`, {}), theme, props)
  const appearanceStyle = maybeRunDeep(get(config, `appearances.${props.appearance}`, {}), theme, props)

  return merge({}, internalStyles, baseStyle, sizeStyle, appearanceStyle)
}

/**
 * Combines a styleConfig object with internal styles based on the theme + style modifiers (props)
 * and returns a memoized style object
 */
function useMergedStyles(
  theme: any,
  props: StyleModifiers,
  styleConfig: ComponentStyle,
  internalStyles: GlamorAndBoxStyle
): ComponentStyle {
  const styleRef = useRef({})

  return useMemo(() => {
    const combinedStyles = combineStyles(theme, props, styleConfig, internalStyles)
    if (!isEqual(styleRef.current, combinedStyles)) {
      styleRef.current = combinedStyles
    }

    return styleRef.current
  }, [theme, props, styleConfig, internalStyles])
}

/**
 * Split up the style props into glamor-ready and box-ready props (className + spreadable props)
 */
function useGlamorAndBox(styles: any, pseudoSelectors: PseudoSelectorMap): UseGlamorAndBoxOutput {
  const glamorStylesRef = useRef({})
  const classNameRef = useRef<string | undefined>()

  return useMemo(() => {
    // Split the resulting style object into ui-box-compatible props and the rest
    const { matchedProps, remainingProps } = splitBoxProps(styles)

    const glamorStyles: GlamorAndBoxStyle = {}

    // Swap out pseudo selector placeholders for their actual css selector strings
    for (const placeholderKey of Object.keys(remainingProps)) {
      const key =
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        placeholderKey in pseudoSelectors ? pseudoSelectors[placeholderKey as PseudoSelectorKey] : placeholderKey
      glamorStyles[key] = remainingProps[placeholderKey]
    }

    // Take all the "non-compatible" props and give those to glamor (since ui-box doesn't know how to handle them yet)
    if (!isEqual(glamorStylesRef.current, glamorStyles)) {
      const className = css(glamorStyles).toString()
      glamorStylesRef.current = glamorStyles
      classNameRef.current = className === 'css-nil' ? undefined : className
    }

    return {
      className: classNameRef.current as string,
      ...matchedProps
    }
  }, [styles, pseudoSelectors])
}

/**
 * Takes a styleConfig object and outputs a `className` and `boxProps` that can be spread on a Box component
 * @param componentKey the name of the component in the theme
 * @param props props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param pseudoSelectors mapping for the component between states and actual pseudo selectors
 * @param additional styles that are specified internally, separate from the visual styles
 */
export function useStyleConfig<T extends Components>(
  componentKey: T,
  props: StyleModifiers,
  pseudoSelectors: PseudoSelectorMap,
  internalStyles: GlamorAndBoxStyle
): UseStyleConfigOutput {
  const theme = useTheme()

  // Get the component style object from the theme
  const componentStyles = get(theme, `components.${componentKey}`, {})

  // Merges the theme styles with the modifiers/props (appearance, size, etc)
  const mergedStyles = useMergedStyles(theme, props, componentStyles, internalStyles)

  // Resolve theme token strings found throughout the style object
  const styles = useMemo(() => resolveThemeTokens(theme, mergedStyles), [theme, mergedStyles])

  // Finally, split up the styles based which ones Box supports and the rest construct a glamor className
  return useGlamorAndBox(styles, pseudoSelectors)
}
