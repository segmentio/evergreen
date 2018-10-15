# 🎉 Thanks for taking the time to contribute to 🌲 Evergreen! 🎉

It is highly appreciated that you take the time to help improve 🌲 Evergreen.

Please see our [issue template](ISSUE_TEMPLATE.md) for issues specifically.

## Creating new components

Preferably we like to introduce new components by following these steps.

### Submit an issue

To better understand if your component is wanted by 🌲 Evergreen,
submit a component request first as an issue.
Explain why you want the component.
Potentially include a design or component API.

**Smaller atoms and primitives are favored over bigger complex components.**

### Design

This can be a wireframe or high fidelity mockup.
Include this in your issue if possible.

We hope to formalize the 🌲 Evergreen design language more as we go.
As a general rule of thumb try to follow these constraints:

- Use `color` and the `typography` components.
- 8px soft grid, (4px under 40px is also good).
- Don't force line heights on grid if it looks poorly.

### Component API

- Write down how you would like to use this component.
- Write down the component API and prop types.
- Try to use `ui-box` for your components.
- Try to make all heights possible.
- Base the text style (font size) on the height.

Include this in your issue if possible.

## Write the code and storybook

Use a scaffolding scripts to bootstrap your component:

```
$ yarn create-package:components package-name ComponentName
```

Make sure to write stories to document your component.

## Submit a PR when you are ready

Finally submit a PR with your new feature or component.

## Celebrate! 🎉

We'll add you to the contributors section.
