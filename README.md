<div align="center">
    <a href="https://evergreen.segment.com/">
        <img src="https://raw.githubusercontent.com/segmentio/evergreen/master/evergreen-github-hero.png" alt="Evergreen, A Design System for the Web. Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.">
    </a>
    <br>
    <br>
    <a href="https://github.com/segmentio/evergreen/actions">
        <img src="https://github.com/segmentio/evergreen/actions/workflows/ci.yml/badge.svg">
    </a>
    <br>
    <br>
</div>

- **Works out of the box.** Evergreen contains a set of polished React components that work out of the box.

- **Flexible & composable.** Evergreen components are built on top of a React UI Primitive for endless composability.

- **Enterprise-grade.** Evergreen features a UI design language for enterprise-grade web applications.

## Documentation & Community

- [Documentation](https://evergreen.segment.com/)
- [GitHub Discussions](https://github.com/segmentio/evergreen/discussions)

## Evergreen v7 Migration guide

Evergreen v7 [migration guide](https://evergreen.segment.com/introduction/migrations)

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

ReactDOM.render(<Button>I am using 🌲 Evergreen!</Button>, document.getElementById('root'))
```

## Core values of 🌲 Evergreen

- **Evergreen is built on the belief that you can never predict all future requirements,
  only prepare for it.** Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements.

- **Evergreen is built on the belief that things should work out of the box with smart defaults, but also offer full control when needed.** For example, Evergreen uses CSS-in-JS and builds on top of the Box component in [ui-box](https://github.com/segmentio/ui-box).

- **Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.** We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions.

## FAQ

### Theming support?

Evergreen supports a robust theming layer out of the box. You can check out [these docs](https://evergreen.segment.com/introduction/theming) for more information regarding theming in Evergreen.

### How does Server Side Rendering (SSR) work?

Evergreen offers easy Server Side Rendering (SSR) and automatic hydration.

Evergreen bundles its own CSS-in-JS solution from [ui-box](https://github.com/segmentio/ui-box). To make it super easy to do server side rendering and hydration, Evergreen exposes a `extractStyles()` function.

- How to use it with Next.js in the [ssr-next example app](examples/ssr-next).
- [How to use it with GatsbyJS](https://github.com/segmentio/evergreen/issues/154)

## Contributing to Evergreen

Please see [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more information on how to contribute!

## 🎉 Contributors

We will add you to the list if you make any meaningful contribution!

- Jeroen Ransijn
- Roland Warmerdam
- Ben McMahon
- Matt Shwery
- Colin Lohner
- Allen Kleiner
- Chris Chuck
- Brandon Scott
- ... many other on the Segment team and open-source contributors

This project is maintained by [Segment](https://segment.com/)

Please take a look at the [contributing guide](.github/CONTRIBUTING.md) to better understand what to work on.

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

Copyright © 2021 Segment.io, Inc.
