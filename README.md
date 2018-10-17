<div align="center">
  <a href="https://evergreen.segment.com/">
    <img src="https://raw.githubusercontent.com/segmentio/evergreen/master/evergreen-github-hero.png" alt="Evergreen, A Design System for the Web. Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.">
	<br>
  <br>
  <a href="https://circleci.com/gh/segmentio/evergreen/tree/master">
    <img src="https://circleci.com/gh/segmentio/evergreen.svg?style=svg" alt="Build Status">
  </a>
	<br>
  <br>
</div>

- **Works out of the box.** Evergreen contains a set of polished React components that work out of the box.

- **Flexible & composable.** Evergreen components are built on top of a React UI Primitive for endless composability.

- **Enterprise-grade.** Evergreen features a UI design language for enterprise-grade web applications.

## Documentation & Community

- [Documentation](https://evergreen.segment.com/)
- [Spectrum Chat](https://spectrum.chat/evergreen)

## Evergreen v3 to v4 Migration guide

Evergreen v3 to v4 [migration guide](https://github.com/segmentio/evergreen/pull/200)

## Install and use components

🌲 Evergreen is made up of multiple components and tools which you can import one by one. All you need to do is install the `evergreen-ui` package:

```sh
$ yarn add evergreen-ui
# or
$ npm install --save evergreen-ui
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app), might look like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-ui'

ReactDOM.render(
  <Button>I am using 🌲 Evergreen!</Button>,
  document.getElementById('root')
)
```

## Core values of 🌲 Evergreen

- **Evergreen is built on the belief that you can never predict all future requirements,
  only prepare for it.** Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements.

- **Evergreen is built on the belief that things should work out of the box with smart defaults, but also offer full control when needed.** For example, Evergreen uses CSS-in-JS and builds on top of the Box component in [ui-box](https://github.com/segmentio/ui-box).

- **Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.** We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions.

## FAQ

### Theming support?

Evergreen v4 supports theming partially. It is still complex to theme Evergreen. We have done exploratory work to make theming more powerful and accessible. The progress is available in the `v4-create-theme` branch.

### How does Server Side Rendering (SSR) work?

Evergreen offers easy Server Side Rendering (SSR) and automatic hydration.

Evergreen bundles 2 CSS-in-JS solutions, from glamor and ui-box. To make it super easy to do server side rendering and hydration, Evergreen exposes a `extractStyles()` function that will do SSR for both at once.

- How to use it with Next.js in the [ssr-next example app](examples/ssr-next).
- [How to use it with GatsbyJS](https://github.com/segmentio/evergreen/issues/154)

## Contributing to Evergreen

### ⚙ Step 1. Configuring your editor

If you are using Atom, make sure to install the [`prettier-atom`](https://atom.io/packages/prettier-atom), [`linter`](https://github.com/AtomLinter/linter) and [`linter-xo`](https://github.com/sindresorhus/atom-linter-xo) packages.

All the configuration for prettier and xo is in the `package.json`.
You shouldn't have to configure things separately, please file a issue if there's a problem.

### 📖 Step 2. Get storybook up and running

To actually start seeing the components you have to run React Storybook:

```
$ yarn dev
```

## 🤓 Scripts explained

Inside the `package.json` there are a bunch of scripts that this repo uses
to run the project in development and to build the project.

Below you can read a description of each script.

- `yarn dev`: Starts the development React Storybook.

- `yarn test`: Lints the JavaScript files using XO and then runs the unit tests using AVA.

- `yarn build`: Builds all of the JavaScript files using Babel.

- `yarn clean`: removes all untracked files (`git clean -Xdf`).

- `yarn release`: Releases new version of Evergreen (requires `np` to be installed globally).

- `yarn create-package`: This command scaffolds a package with no specific boilerplate. It's useful for creating utilities.

For the following command:

```
yarn create-package utils
```

The following file tree will be generated:

```
/src/utils
├── /src/
└── index.js
```

- `yarn create-package:components`: This command scaffolds a package with React component(s) boilerplate.

You can pass one or more components to this command.

For the following command:

```
yarn create-package:components typography Text Heading
```

The following file tree will be generated:

```
/src/typography
├── /src/
|   │── Text.js
|   └── Heading.js
├── /stories/
│   └── index.stories.js
└── index.js
```

## 🎉 Contributors

We will add you to the list if you make any meaningful contribution!

- Jeroen Ransijn
- Roland Warmerdam
- Ben McMahon
- Matt Shwery
- ... many other on the Segment team and open-source contributors

This project is maintained by [Segment](https://segment.com/)

Please take a look at the [contributing guide](.github/CONTRIBUTING.md) and [roadmap](ROADMAP.md) to better understand what to work on.

## 👏 Respect earns Respect

Please respect our [Code of Conduct](.github/CODE_OF_CONDUCT.md), in short:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## License

Evergreen is released under the MIT license.
The BlueprintJS icons are licensed under a [custom Apache 2.0 license](https://github.com/palantir/blueprint/blob/develop/LICENSE).

Copyright © 2017 Segment.io, Inc.
