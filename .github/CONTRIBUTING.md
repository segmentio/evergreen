# 🎉 Thanks for taking the time to contribute to 🌲Evergreen! 🎉

It is highly appreciated that you take the time to help improve 🌲Evergreen.

Please see our [ISSUE_TEMPLATE](./ISSUE_TEMPLATE.md) for issues specifically.

## Creating new components

Preferably we like to introduce new components by following these steps.

### Submit an issue

To better understand if your component is wanted by evergreen,
submit a component request first as an issue.
Explain why you want the component.
Potentially include a design or component api.

**Smaller atoms and primitives are favored over bigger complex components.**

### Design

This can be a wireframe or high fidelity mockup.
Include this in your issue if possible.

We hope to formalize the 🌲Evergreen design language more as we go.
As a general rule of thumb try to include the follow these constraints:

* Use `evergreen-color` and `evergreen-typography`
* 8px soft grid, (4px under 40px is also good)
* Don't force line heights on grid if it looks poorly

### Component API

* Use `evergreen-color` and `evergreen-typography`
* Write down how you would like to use this component.
* Write down the component api and prop types.
* Try to implement `ui-box` for you components.
* Try to make all different heights possible.
* Base the text style (font size) on the height

Include this in your issue if possible.

## Write the code and storybook

Use a scaffolding scripts to bootstrap your component:

```
$ yarn create-package:component ComponentName
```

Make sure to write stories to document your component.

## Submit a PR when you are ready

Finally submit a PR with your new feature or component.

## Celebrate! 🎉

We'll add you to the contributors section
