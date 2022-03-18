export interface DefaultTheme extends Theme {
  colors: { [color in DefaultThemeColors]: Color } & {
    border: Color<{ default: string; muted: string }>
    icon: Color<{
      default: string
      muted: string
      disabled: string
      selected: string
    }>
    text: Color<{ danger: string; success: string; info: string }>
  }
  fills: { [fill in DefaultThemeFill]: Fill }
  intents: { [intent in DefaultThemeIntent]: Intent }
  components: {
    [Component in Components]: {
      baseStyle: StyleProps<Component>
      appearances: Record<string & ComponentAppearances<Component>, Partial<StyleProps<Component>>>
      sizes: Record<Size & ComponentSizes<Component>, Partial<StyleProps<Component>>>
    }
  }
}
