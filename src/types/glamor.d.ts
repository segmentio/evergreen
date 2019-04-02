declare module 'glamor/server' {
  // Partially taken from aphrodite's typedef since glamor extends a lot from there. Not 100% about css and rules.
  interface StaticRendererResult {
    html: string;
    ids: string;
    css: {
      content: string;
      renderedClassNames: string[];
    }
    rules: any;
  }

  export function renderStatic(fn: () => string): StaticRendererResult;
}
